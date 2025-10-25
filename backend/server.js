import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import pg from './config/db.js';
import arcjet from './lib/arcjet.js';
import productRouter from './routes/productsRoute.js';

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));

app.use( async (req, res, next) => {
  try {
    const decision = await arcjet.protect(req, {
      requested: 1
    }) 
    if (decision.isDenied) {
      if ( decision.isRateLimited ) {
        res.status(429).json ( {error: 'Too Many Requests'})
      } else if ( decision.reason.isBot()) {
        res.status(403).json ( { error: 'Bot Access Denied'})
      } else {
        res.status(403).json ( { error: 'Forbidden'})
      }
       return;
    }

    if ( decision.results.some( (result) => result.isBot() && result.reason.isSpoofed())) {
      res.status(403).json( { error: 'spoofed bot detected'})
      return;
    }
    next();
  } catch (err) {
    console.log('Arcjet Error:', err)
    next(err)
  }})
app.use('/api/products', productRouter);

async function initDB() {
  try {
    await pg`
    CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
     )
    `;
  } catch (error) {
    console.log(error);
  }
}

initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Running Server on port ${PORT}`);
  });
});

console.log('DB IS INITIALIZED');

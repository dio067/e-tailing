import express from 'express';
import productsControllers from '../controllers/productsControllers.js';

const router = express.Router();

router.get('/', productsControllers.getProducts);
router.delete('/:id', productsControllers.deleteProduct);
router.post('/', productsControllers.createProduct);
router.get('/:id', productsControllers.getProduct);
router.put('/:id', productsControllers.updateProduct);

export default router;

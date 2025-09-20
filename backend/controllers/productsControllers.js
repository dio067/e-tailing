import pg from '../config/db.js';

export default {
  getProducts: async (req, res) => {
    // Logic to retrieve products
    try {
      const products = await pg`
       SELECT * FROM products;
      `;
      res.status(200).json({ success: true, data: products });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Faild to fetch data' });
    }
  },
  createProduct: async (req, res) => {
    const { name, price, image } = req.body;

    if (!name || !price || !image) {
      res
        .status(500)
        .json({ success: false, message: 'All fields are mandatory' });
    }
    try {
      const product =
        await pg` INSERT INTO products ( name, price, image) values(${name}, ${price}, ${image})
      RETURNING *`;

      res.status(201).json({ success: true, data: product[0] });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Faild to insert data' });
    }
  },
  deleteProduct: async (req, res) => {
    const { id } = req.params;

    try {
      const deletedProduct = await pg`
       DELETE FROM products where id = ${id} RETURNING *;
      `;

      res.status(200).json({ success: true, data: deletedProduct[0] });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Faild to delete data',
      });
    }
  },
  updateProduct: async (req, res) => {
    const { id } = req.params;
    const { name, price, image } = req.body;

    try {
      const updatedProduct = await pg`
      UPDATE products
      SET name =${name},price=${price}, image=${image}
      WHERE id = ${id}
      RETURNING *;
      `;

      if (updatedProduct.length === 0) {
        res.status(500).json({ success: false, message: 'Product not found' });
      }
      res.status(201).json({ success: true, data: updatedProduct[0] });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: `Faild to update  data with id ${id}`,
      });
    }
  },
  getProduct: async (req, res) => {
    const { id } = req.params;
    try {
      const product = await pg`SELECT * FROM products WHERE id = ${id};`;

      res.status(200).json({ success: true, data: product[0] });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: `Faild to fetch data with id ${id}` });
    }
  },
};

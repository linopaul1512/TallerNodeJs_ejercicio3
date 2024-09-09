const Product = require('../models/product');


// Obtener todos los productos
exports.findAll = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    console.error('Error retrieving products:', error);
    res.status(500).json({ message: 'Error retrieving products' });
  }
};

//Crear nuevo producto
exports.createProduct = async (req, res) => {
  const { name, price, quantity } = req.body;
  if (!name || !price || !quantity) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newProduct = await Product.create({ name, price, quantity });
    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error creating the product:', error);
    res.status(500).json({ message: 'Error creating the product', error });
  }
};

//Buscar por id
exports.findOneById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving the product', error });
  }
};

//Modificar producto
exports.update = async (req, res) => {
  const { id } = req.params;
  const { name, price, quantity } = req.body;
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    product.name = name || product.name;
    product.price = price || product.price;
    product.quantity = quantity || product.quantity;
    await product.save();
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error updating the product', error });
  }
};

//Borrar producto
exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    await product.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting the product', error });
  }
};

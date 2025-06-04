const prisma = require('../db/prisma.js');

const products = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

const create = async (req, res) => {
  const { name, description, price, imageUrl } = req.body;

  try {
    const product = await prisma.product.create({
      data: {
        name,
        description,
        price
      },
    });
    res.status(201).json(product);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Failed to create product' });
  }
}

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  
  try {
    const product = await prisma.product.delete({
      where: {id: id},
    });
    res.status(200).json({ message: 'Product deleted successfully', product });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Failed to delete product' });
  }
} 

module.exports = { products, create, deleteProduct };
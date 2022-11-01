const Product = require('../entity/Product.js');

const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll()

    res.json({
      status: 'success',
      code: 200,
      data: products
    })
  } catch(err) {
    console.error('ERROR:', err);
  }
}

module.exports = {
  getProducts
}

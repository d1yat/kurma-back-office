const { Sequelize } = require('sequelize');
const { db } = require('../config/database.js');

const { DataTypes } = Sequelize;
const Product = db.define('ms_produk', {
  id_produk: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  nama_produk: {
    type: DataTypes.STRING
  },
  deskripsi: {
    type: DataTypes.STRING
  },
  harga_beli: {
    type: DataTypes.NUMERIC
  },
  harga_jual: {
    type: DataTypes.NUMERIC
  },
  id_satuan: {
    type: DataTypes.INTEGER
  },
  id_kategori: {
    type: DataTypes.INTEGER
  }
}, {
  underscored: true,
  freezeTableName: true
});

module.exports = Product;

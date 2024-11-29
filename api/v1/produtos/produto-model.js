const Sequelize = require('sequelize');
const database = require('../../../config/db');

const Produto = database.sequelize.define('Produto', {
   id: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
   },
   nome: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   descricao: {
      type: Sequelize.STRING,
      allowNull: true,
   },
   categoria: {
      type: Sequelize.STRING,
      allowNull: true,
   },
   marca: {
      type: Sequelize.STRING,
      allowNull: true,
   },
   preco: {
      type: Sequelize.FLOAT,
      allowNull: true,
   },
   quantidadeEstoque: {
      type: Sequelize.INTEGER,
      allowNull: true,
      field: 'quantidade_estoque', 
   },
   codigoBarras: {
      type: Sequelize.STRING,
      allowNull: true,
      field: 'codigo_barras', 
   },
   dimensoes: {
      type: Sequelize.JSON,
      allowNull: true,
   },
   peso: {
      type: Sequelize.JSON,
      allowNull: true,
   },
   status: {
      type: Sequelize.STRING,
      allowNull: true,
   },
   dataCadastro: {
      type: Sequelize.DATE,
      allowNull: false,
      field: 'data_cadastro', 
   },
}, {
   tableName: 'produto', 
   timestamps: false, 
});

module.exports = { Produto };

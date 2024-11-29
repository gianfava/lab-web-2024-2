const produtoController = require('./produto-controller');
const produtoSchema = require('./produto-schema');

const baseVersion = '/v1/produtos';

const routes = [
    { method: 'POST', path: baseVersion, options: { handler: produtoController.createProduto, validate: produtoSchema.createProduto } },
    { method: 'GET', path: baseVersion, options: { handler: produtoController.listProdutos, validate: produtoSchema.listProdutos } },
    { method: 'GET', path: `${baseVersion}/{id}`, options: { handler: produtoController.getProdutoById, validate: produtoSchema.getProdutoById } },

    
];

module.exports = routes;

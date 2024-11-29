const produtoController = require('./produto-controller');
const produtoSchema = require('./produto-schema');

const baseVersion = '/v1/produtos';

const routes = [
    { method: 'POST', path: baseVersion, options: { handler: produtoController.createProduto, validate: produtoSchema.createProduto } },
   
];

module.exports = routes;

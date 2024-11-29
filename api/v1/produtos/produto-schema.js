const Joi = require('joi');

const produtoSchema = Joi.object({
    id: Joi.string().required(),
    nome: Joi.string().required(),
    descricao: Joi.string(),
    
});

const createProduto = { payload: produtoSchema };
const updateProduto = { payload: produtoSchema, params: Joi.object({ id: Joi.string().required() }) };
const deleteProduto = { params: Joi.object({ id: Joi.string().required() }) };
const getProdutoById = { params: Joi.object({ id: Joi.string().required() }) };
const listProdutos = { query: Joi.object({ categoria: Joi.string(), nome: Joi.string() }) };

module.exports = { createProduto, updateProduto, deleteProduto, getProdutoById, listProdutos };

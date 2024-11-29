const Joi = require('joi');

const produtoSchema = Joi.object({
    id: Joi.string().required(),
    nome: Joi.string().required(),
    descricao: Joi.string(),
    categoria: Joi.string(),
    marca: Joi.string(),
    preco: Joi.number().positive(),
    quantidadeEstoque: Joi.number().integer(),
    codigoBarras: Joi.string(),
    dimensoes: Joi.object({
        altura: Joi.number(),
        largura: Joi.number(),
        profundidade: Joi.number(),
        unidadeMedida: Joi.string(),
    }),
    peso: Joi.object({
        valor: Joi.number(),
        unidadeMedida: Joi.string(),
    }),
    status: Joi.string(),
    dataCadastro: Joi.date(),
});

const createProduto = { payload: produtoSchema };
const updateProduto = { payload: produtoSchema, params: Joi.object({ id: Joi.string().required() }) };
const deleteProduto = { params: Joi.object({ id: Joi.string().required() }) };
const getProdutoById = { params: Joi.object({ id: Joi.string().required() }) };
const listProdutos = { query: Joi.object({ categoria: Joi.string(), nome: Joi.string() }) };

module.exports = { createProduto, updateProduto, deleteProduto, getProdutoById, listProdutos };

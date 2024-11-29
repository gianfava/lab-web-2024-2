const produtoBusiness = require('./produto-business');

const createProduto = async (request, h) => {
    try {
        const result = await produtoBusiness.createProduto(request.payload);
        return h.response(result).code(201);
    } catch (err) {
        console.error('Erro ao criar produto:', err);
        return h.response({ message: 'Erro ao criar produto' }).code(500);
    }
};


module.exports = { createProduto};

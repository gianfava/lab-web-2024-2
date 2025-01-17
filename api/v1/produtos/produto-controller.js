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

const listProdutos = async (request, h) => {
    try {
        const produtos = await produtoBusiness.listProdutos(request.query);
        return h.response(produtos).code(200);
    } catch (err) {
        console.error('Erro ao listar produtos:', err);
        return h.response({ message: 'Erro ao listar produtos' }).code(500);
    }
};

const getProdutoById = async (request, h) => {
    try {
        const produto = await produtoBusiness.getProdutoById(request.params.id);
        return produto ? h.response(produto).code(200) : h.response().code(404);
    } catch (err) {
        console.error('Erro ao buscar produto por ID:', err);
        return h.response({ message: 'Erro ao buscar produto' }).code(500);
    }
};

const updateProduto = async (request, h) => {
    try {
        const updated = await produtoBusiness.updateProduto(request.params.id, request.payload);

        // Verifica se algum registro foi atualizado
        if (updated[0] === 0) {
            return h.response({ message: 'Produto não encontrado ou nenhuma alteração realizada' }).code(404);
        }

        return h.response({ message: 'Produto atualizado com sucesso' }).code(200);
    } catch (err) {
        console.error('Erro ao atualizar produto:', err);
        return h.response({ message: 'Erro ao atualizar produto' }).code(500);
    }
};

const deleteProduto = async (request, h) => {
    try {
        const deleted = await produtoBusiness.deleteProduto(request.params.id);
        
        if (!deleted) {
            return h.response({ message: 'Produto não encontrado' }).code(404);
        }

        return h.response({ message: 'Produto excluído com sucesso' }).code(200);
    } catch (err) {
        console.error('Erro ao deletar produto:', err);
        return h.response({ message: 'Erro ao deletar produto' }).code(500);
    }
};


module.exports = { createProduto, listProdutos, getProdutoById, updateProduto, deleteProduto};

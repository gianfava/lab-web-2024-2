const { Produto } = require('./produto-model');

const createProduto = async (produto) => {
    return await Produto.create(produto);
};

const updateProduto = async (id, produtoData) => {
    return await Produto.update(produtoData, { where: { id } });
};

const deleteProduto = async (id) => {
    return await Produto.destroy({ where: { id } });
};

const getProdutoById = async (id) => {
    return await Produto.findByPk(id);
};

const listProdutos = async (filters) => {
    const where = {};
    if (filters.categoria) where.categoria = filters.categoria;
    if (filters.nome) where.nome = { [Sequelize.Op.like]: `%${filters.nome}%` };
    return await Produto.findAll({ where });
};

module.exports = { createProduto, updateProduto, deleteProduto, getProdutoById, listProdutos };

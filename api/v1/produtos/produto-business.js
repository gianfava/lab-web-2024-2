const { Produto } = require('./produto-model');

const criaProduto = async (aluno) => {
    return await Produto.create(aluno);
};



module.exports = { criaProduto };

const Sequelize = require('sequelize');
const envConfig = require('./envs-config');

const sequelizeConfig = {
    dialect: 'postgres',
    port: envConfig.database.port,
    host: envConfig.database.host,
    logging: console.log
};

//database, usuario, senha
const sequelize = new Sequelize(envConfig.database.name, 
                                envConfig.database.user,
                                envConfig.database.password, 
                                sequelizeConfig);

                                
// Testando a conexão com o banco
sequelize.authenticate()
    .then(() => console.log('Conexão com o banco bem-sucedida.'))
    .catch(err => console.error('Erro ao conectar ao banco:', err));

    
module.exports = {sequelize};
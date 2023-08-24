const Sequelize = require('sequelize');

const connection = new Sequelize('project_dollar', 'sadonfa', '1022353421',{
    host: "localhost",
    dialect: 'mysql',
    logging: false
});

module.exports = connection;
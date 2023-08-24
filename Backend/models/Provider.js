const Sequelize = require('sequelize');
const connection = require('../config/db');

const Provider = connection.define('provider',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name_reason_social: Sequelize.STRING,
    activity: Sequelize.STRING,
    address: Sequelize.STRING,
    departament: Sequelize.STRING,
    services_products_offered: Sequelize.STRING,
    mail_warning_pay: Sequelize.STRING
},{
    timestamps: false
});

module.exports = Provider;
const Sequelize = require('sequelize');
const connection = require('../config/db');
const Provider = require('./Provider');

const InformationBanking = connection.define('information_banking',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    provider_id : Sequelize.INTEGER,
    name_bank : Sequelize.STRING,
    country_bank : Sequelize.STRING,
    address_bank : Sequelize.STRING,
    swift_code : Sequelize.STRING,
    headline_account : Sequelize.STRING,
    type_account : Sequelize.STRING,
    num_account : Sequelize.STRING,
},{
    timestamps: false
}
)

InformationBanking.belongsTo(Provider,{foreignKey: 'provider_id'});


module.exports = InformationBanking;
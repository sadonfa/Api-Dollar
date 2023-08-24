const Sequelize = require('sequelize');
const connection = require('../config/db');
const Provider = require('./Provider');

const AdministratorDirectorShareolder = connection.define('administrators_directors_shareolders',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    provider_id: Sequelize.INTEGER,
    name : Sequelize.STRING,
    identification : Sequelize.STRING,
    positition : Sequelize.STRING,
    name_beneficiary : Sequelize.STRING,
    identification_beneficiary : Sequelize.STRING,
    percentage_participation : Sequelize.STRING,
},{
    timestamps: false
}
)

AdministratorDirectorShareolder.belongsTo(Provider,{foreignKey: 'provider_id'});


module.exports = AdministratorDirectorShareolder;
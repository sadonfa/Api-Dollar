const Sequelize = require('sequelize');
const connection = require('../config/db');
const Provider = require('./Provider');

const LegalRepresentative = connection.define('legal_representative',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name_representative: Sequelize.STRING,
    document_identity: Sequelize.STRING,
    address_office: Sequelize.STRING,
    city: Sequelize.STRING,
    phone_company: Sequelize.STRING,
    mail_representative: Sequelize.STRING,
    country: Sequelize.STRING,
    cellphone: Sequelize.STRING,
    position_job: Sequelize.STRING,
    provider_id: Sequelize.INTEGER
},{
    timestamps: false
}
)

LegalRepresentative.belongsTo(Provider,{foreignKey: 'provider_id'});


module.exports = LegalRepresentative;
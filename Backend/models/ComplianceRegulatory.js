const Sequelize = require('sequelize');
const connection = require('../config/db');
const Provider = require('./Provider');

const ComplianceRegulatory = connection.define('compliance_regulatory',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    provider_id: Sequelize.INTEGER,
    member_pep : Sequelize.STRING,
    origin_funds : Sequelize.STRING,
    name_acquaintance : Sequelize.STRING,
    positition_acquaintance : Sequelize.STRING,
    relation_acquaintance: Sequelize.STRING,
},{
    timestamps: false
}
)

ComplianceRegulatory.belongsTo(Provider,{foreignKey: 'provider_id'});


module.exports = ComplianceRegulatory;
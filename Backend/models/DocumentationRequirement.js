const Sequelize = require('sequelize');
const connection = require('../config/db');
const Provider = require('./Provider');

const DocumentationRequirement = connection.define('documentation_requirement',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    provider_id: Sequelize.INTEGER,
    certification_banking : Sequelize.STRING,
    commitment_suppliers : Sequelize.STRING,
    documentation_extra : Sequelize.STRING
},{
    timestamps: false
}
)

DocumentationRequirement.belongsTo(Provider,{foreignKey: 'provider_id'});


module.exports = DocumentationRequirement;
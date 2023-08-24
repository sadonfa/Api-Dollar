const Sequelize = require('sequelize');
const connection = require('../config/db');
const Provider = require('./Provider');

const Information_Tributary = connection.define('information_tributary',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    provider_id : Sequelize.INTEGER,
nit_ElSalvador : Sequelize.STRING,
iva_ElSalvador : Sequelize.STRING,
taxpayer_ElSalvador : Sequelize.STRING,
activity_ElSalvador : Sequelize.STRING,
rtu_guatemala : Sequelize.STRING,
cui_guatemala : Sequelize.STRING,
regime_guatemala : Sequelize.STRING,
retention_guatemala : Sequelize.STRING,
data_retention_guatemala : Sequelize.STRING,
tax_guatemala : Sequelize.STRING,
num_tax_panama : Sequelize.STRING,
ruc_dni_peru : Sequelize.STRING,
retention_peru : Sequelize.STRING,
subject_spot_peru : Sequelize.STRING,
agent_perception_peru : Sequelize.STRING,
taxpayer_colombia : Sequelize.STRING,
autoretenedor_colombia : Sequelize.STRING,
retefuente_colombia : Sequelize.STRING,
rut_colombia : Sequelize.STRING,
ciiu_colombia : Sequelize.STRING
},{
    timestamps: false
}
)

Information_Tributary.belongsTo(Provider,{foreignKey: 'provider_id'});


module.exports = Information_Tributary;
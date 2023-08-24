const Sequelize = require('sequelize');
const connection = require('../config/db');
const Provider = require('./Provider');

const Contact = connection.define('contact',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    provider_id: Sequelize.INTEGER,
    contact_commercial: Sequelize.STRING,
    mail_commercial : Sequelize.STRING,
    positition_commercial : Sequelize.STRING,
    cellphone_commercial : Sequelize.STRING,
    contact_finance : Sequelize.STRING,
    mail_finance : Sequelize.STRING,
    positition_finance : Sequelize.STRING,
    cellphone_finance: Sequelize.STRING,
},{
    timestamps: false
}
)

Contact.belongsTo(Provider,{foreignKey: 'provider_id'});


module.exports = Contact;
const Contact = require('../models/Contact');
const Provider = require('../models/Provider');

exports.getContacts = async (req, res) => {
    try {
      const contacts = await Contact.findAll({
        include: [Provider],
      });
  
      res.json(contacts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener los contactos' });
    }
  };

exports.postContact = async (req, res) => {
    try {
      const {
        provider_id,
        contact_commercial,
        mail_commercial,
        positition_commercial,
        cellphone_commercial,
        contact_finance,
        mail_finance,
        positition_finance,
        cellphone_finance,
      } = req.body;
  
      const contact = await Contact.create({
        provider_id,
        contact_commercial,
        mail_commercial,
        positition_commercial,
        cellphone_commercial,
        contact_finance,
        mail_finance,
        positition_finance,
        cellphone_finance,
      });
  
      res.status(201).json(contact);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al crear el contacto' });
    }
  };
const contactController = require('../controllers/ContactController');
const express = require('express');
const router = express.Router();

// Ruta POST para crear un contacto
router.post('/contacts', contactController.postContact);

// Ruta GET para obtener todos los contactos
router.get('/contacts', contactController.getContacts);

module.exports = router;

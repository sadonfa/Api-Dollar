const express = require('express');
const router = express.Router();
const administratorDirectorShareolderController = require('../controllers/AdministratorDirectorShareolderController');

// Ruta POST para crear un administrador/director/accionista
router.post('/administrator-director-shareolders', administratorDirectorShareolderController.postAdministratorDirectorShareolder);

// Ruta GET para obtener todos los administradores/directores/accionistas
router.get('/administrator-director-shareolders', administratorDirectorShareolderController.getAdministratorDirectorShareolders);

module.exports = router;

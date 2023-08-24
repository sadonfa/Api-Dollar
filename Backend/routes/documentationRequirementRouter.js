const express = require('express');
const router = express.Router();
const documentationRequirementController = require('../controllers/DocumentationRequirementController');

// Ruta POST para crear un requisito de documentación
router.post('/documentation-requirements', documentationRequirementController.postDocumentationRequirement);

// Ruta GET para obtener todos los requisitos de documentación
router.get('/documentation-requirements', documentationRequirementController.getDocumentationRequirements);

module.exports = router;
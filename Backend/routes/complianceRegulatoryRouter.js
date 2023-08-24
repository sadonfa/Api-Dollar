const express = require('express');
const router = express.Router();
const complianceRegulatoryController = require('../controllers/ComplianceRegulatoryController');

// Ruta POST para crear el cumplimiento regulatorio
router.post('/compliance-regulatory', complianceRegulatoryController.postComplianceRegulatory);

// Ruta GET para obtener el cumplimiento regulatorio
router.get('/compliance-regulatory', complianceRegulatoryController.getComplianceRegulatory);

module.exports = router;

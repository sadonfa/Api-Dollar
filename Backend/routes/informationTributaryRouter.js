const informationTributaryController = require('../controllers/InformationTributaryController');
const express = require('express');
const router = express.Router();

// Ruta POST para crear una información tributaria
router.post('/information-tributaries', informationTributaryController.postInformationTributary);

// Ruta GET para obtener todas las informaciones tributarias
router.get('/information-tributaries', informationTributaryController.getInformationTributaries);

module.exports = router;

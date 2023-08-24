const express = require('express');
const router = express.Router();
const informationBankingController = require('../controllers/InformationBankingController');

// Ruta POST para crear una información bancaria
router.post('/information-banking', informationBankingController.postInformationBanking);

// Ruta GET para obtener todas las informaciones bancarias
router.get('/information-banking', informationBankingController.getInformationBankings);

module.exports = router;

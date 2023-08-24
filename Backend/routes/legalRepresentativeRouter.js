const LegalRepresentative = require('../controllers/LegalRepresentativeController');
const express = require('express');
const router = express.Router();


router.get('/legal-representatives',LegalRepresentative.getLegalRepresentatives);
router.post('/legal-representatives',LegalRepresentative.postLegalRepresentatives);


module.exports = router;
const providerController = require('../controllers/ProviderController');
const express = require('express');
const router = express.Router();

router.get('/providers',providerController.getProviders);
router.post('/providers',providerController.postProvider);

router.get('/providers/:id',providerController.getAllData);
module.exports = router;
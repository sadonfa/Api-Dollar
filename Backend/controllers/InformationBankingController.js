const InformationBanking = require('../models/InformationBanking');
const Provider = require('../models/Provider');

exports.postInformationBanking = async (req, res) => {
  try {
    const {
      provider_id,
      name_bank,
      country_bank,
      address_bank,
      swift_code,
      headline_account,
      type_account,
      num_account,
    } = req.body;

    const informationBanking = await InformationBanking.create({
      provider_id,
      name_bank,
      country_bank,
      address_bank,
      swift_code,
      headline_account,
      type_account,
      num_account,
    });

    res.status(201).json(informationBanking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la información bancaria' });
  }
};

exports.getInformationBankings = async (req, res) => {
  try {
    const informationBankings = await InformationBanking.findAll({
      include: [Provider],
    });

    res.json(informationBankings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la información bancaria' });
  }
};


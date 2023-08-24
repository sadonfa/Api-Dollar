const ComplianceRegulatory = require('../models/ComplianceRegulatory');
const Provider = require('../models/Provider');

exports.postComplianceRegulatory = async (req, res) => {
  try {
    const {
      provider_id,
      member_pep,
      origin_funds,
      name_acquaintance,
      positition_acquaintance,
      relation_acquaintance,
    } = req.body;

    const complianceRegulatory = await ComplianceRegulatory.create({
      provider_id,
      member_pep,
      origin_funds,
      name_acquaintance,
      positition_acquaintance,
      relation_acquaintance,
    });

    res.status(201).json(complianceRegulatory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el cumplimiento regulatorio' });
  }
};

exports.getComplianceRegulatory = async (req, res) => {
  try {
    const complianceRegulatory = await ComplianceRegulatory.findAll({
      include: [Provider],
    });

    res.json(complianceRegulatory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el cumplimiento regulatorio' });
  }
};

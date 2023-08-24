const DocumentationRequeriment = require('../models/DocumentationRequirement');
const Provider = require('../models/Provider');

exports.postDocumentationRequirement = async (req, res) => {
  try {
    const {
      provider_id,
      certification_banking,
      commitment_suppliers,
      documentation_extra,
    } = req.body;

    const documentationRequeriment = await DocumentationRequeriment.create({
      provider_id,
      certification_banking,
      commitment_suppliers,
      documentation_extra,
    });

    res.status(201).json(documentationRequeriment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear los requisitos de documentación' });
  }
};

exports.getDocumentationRequirements = async (req, res) => {
  try {
    const documentationRequeriments = await DocumentationRequeriment.findAll({
      include: [Provider],
    });

    res.json(documentationRequeriments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los requisitos de documentación' });
  }
};


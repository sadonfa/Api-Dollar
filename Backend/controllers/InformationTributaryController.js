const InformationTributary = require('../models/InformationTributary');
const Provider = require('../models/Provider');

exports.postInformationTributary = async (req, res) => {
  try {
    const {
      provider_id,
      nit_ElSalvador,
      iva_ElSalvador,
      taxpayer_ElSalvador,
      activity_ElSalvador,
      rtu_guatemala,
      cui_guatemala,
      regime_guatemala,
      retention_guatemala,
      data_retention_guatemala,
      tax_guatemala,
      num_tax_panama,
      ruc_dni_peru,
      retention_peru,
      subject_spot_peru,
      agent_perception_peru,
      taxpayer_colombia,
      autoretenedor_colombia,
      retefuente_colombia,
      rut_colombia,
      ciiu_colombia,
    } = req.body;

    const informationTributary = await InformationTributary.create({
      provider_id,
      nit_ElSalvador,
      iva_ElSalvador,
      taxpayer_ElSalvador,
      activity_ElSalvador,
      rtu_guatemala,
      cui_guatemala,
      regime_guatemala,
      retention_guatemala,
      data_retention_guatemala,
      tax_guatemala,
      num_tax_panama,
      ruc_dni_peru,
      retention_peru,
      subject_spot_peru,
      agent_perception_peru,
      taxpayer_colombia,
      autoretenedor_colombia,
      retefuente_colombia,
      rut_colombia,
      ciiu_colombia,
    });

    res.status(201).json(informationTributary);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la información tributaria' });
  }
};

exports.getInformationTributaries = async (req, res) => {
  try {
    const informationTributaries = await InformationTributary.findAll({
      include: [Provider],
    });

    res.json(informationTributaries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la información tributaria' });
  }
};

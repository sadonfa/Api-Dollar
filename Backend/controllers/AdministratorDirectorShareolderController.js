const AdministratorDirectorShareolder = require('../models/AdministratorDirectorShareolder');
const Provider = require('../models/Provider');

exports.postAdministratorDirectorShareolder = async (req, res) => {
  try {
    const {
      provider_id,
      name,
      identification,
      positition,
      name_beneficiary,
      identification_beneficiary,
      percentage_participation,
    } = req.body;

    const administratorDirectorShareolder = await AdministratorDirectorShareolder.create({
      provider_id,
      name,
      identification,
      positition,
      name_beneficiary,
      identification_beneficiary,
      percentage_participation,
    });

    res.status(201).json(administratorDirectorShareolder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el administrador/director/accionista' });
  }
};

exports.getAdministratorDirectorShareolders = async (req, res) => {
  try {
    const administratorDirectorShareolders = await AdministratorDirectorShareolder.findAll({
      include: [Provider],
    });

    res.json(administratorDirectorShareolders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los administradores/directores/accionistas' });
  }
};

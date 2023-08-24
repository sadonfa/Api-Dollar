const LegalRepresentative = require('../models/LegalRepresentative');
const Provider = require('../models/Provider');

exports.getLegalRepresentatives = async (req,res) => {
    try {
        const legalRepresentatives = await LegalRepresentative.findAll({
            include: [Provider]
        });
        res.json(legalRepresentatives);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error to get legalRepresentatives'})
    }

}

exports.postLegalRepresentatives = async (req,res) => {
    const {name_representative,document_identity,address_office,city,phone_company,	mail_representative,country,cellphone,position_job,provider_id} = req.body;
    try {
        const provider = await Provider.findByPk(provider_id)
        if(!provider){
            return res.status(404).json({message: "Provider not found"})
        }

        const legalRepresentative = await LegalRepresentative.create({
            name_representative,
            document_identity,
            address_office,
            city,
            phone_company,	
            mail_representative,
            country,
            cellphone,
            position_job,
            provider_id
        });
        res.status(201).json(legalRepresentative);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error to create Legal Representative'})
    }
}
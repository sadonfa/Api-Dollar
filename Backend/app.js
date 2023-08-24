const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const providerRoutes = require('./routes/providerRouter');
const legalRepresentativeRoutes = require('./routes/legalRepresentativeRouter');
const contactRoutes = require('./routes/contactRouter');
const informationTributaryRoutes = require('./routes/informationTributaryRouter');
const informationBankingRoutes = require('./routes/informationBankingRouter');
const documentationRequirementRoutes = require('./routes/documentationRequirementRouter');
const complianceRegulatoryRoutes = require('./routes/complianceRegulatoryRouter')
const administratorDirectorShareolderRoutes = require('./routes/administratorDirectorShareolderRouter');
const cors = require('cors');
//Parseamos respuestas a json y al urlencoded le sacamos el extended
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());

//Agregar rutas
app.use(contactRoutes); 
app.use(legalRepresentativeRoutes); 
app.use(providerRoutes);
app.use(informationTributaryRoutes);
app.use(informationBankingRoutes);
app.use(documentationRequirementRoutes);
app.use(complianceRegulatoryRoutes);
app.use(administratorDirectorShareolderRoutes);

//Corremos el servidor, en X puerto, y damos un mensaje de confirmacion
app.listen(4000, () => {
    console.log("Servidor iniciado localhost:4000");
});
const Provider = require('../models/Provider');
const mysql = require('mysql2/promise');

exports.getProviders = async (req, res) => {
    try{ //intenta esto
        //Vamos a esperar a que vaya a buscar todos los datos que tenga nuestra tabla
        const providers = await Provider.findAll();
        //Una vez tengas los proveedores, parsealo a JSON(objeto)
        res.json(providers);

    } catch (error){   //por si falla
    
        console.log(error);
        //Codigo de error, y un mensaje de respuesta
        res.status(500).json({ mensaje: 'Error to get providers'});
    }
}

exports.postProvider = async (req, res) => {
    const {name_reason_social,activity,address,departament,services_products_offered,mail_warning_pay} = req.body;

    try{
        const provider = await Provider.create({
            name_reason_social,
            activity,
            address,
            departament,
            services_products_offered,
            mail_warning_pay
        });
        res.status(201).json(provider);
    } catch(error){
        console.log(error);
        res.status(500).json({ mensaje: 'Error to create provider'});
    }
}

exports.getAllData = async (req,res) => {
        try {
          const providerId = req.params.id;

          // Crear la conexión a la base de datos
          const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'sadonfa',
            password: '1022353421',
            database: 'project_dollar',
          });
      
          // Consulta SQL para obtener los datos del proveedor y las tablas relacionadas
          const query = `
            SELECT *
            FROM providers
            LEFT JOIN legal_representatives ON providers.id = legal_representatives.provider_id
            LEFT JOIN information_tributaries ON providers.id = information_tributaries.provider_id
            LEFT JOIN information_bankings ON providers.id = information_bankings.provider_id
            LEFT JOIN documentation_requirements ON providers.id = documentation_requirements.provider_id
            LEFT JOIN contacts ON providers.id = contacts.provider_id
            LEFT JOIN compliance_regulatories ON providers.id = compliance_regulatories.provider_id
            LEFT JOIN administrators_directors_shareolders ON providers.id = administrators_directors_shareolders.provider_id
            WHERE providers.id = ?;
          `;
      
          // Ejecutar la consulta con el ID del proveedor como parámetro
          const [rows, fields] = await connection.query(query, [providerId]);
      
          // Cerrar la conexión a la base de datos
          connection.end();
      
          // Enviar los datos como respuesta
          res.json(rows);
        } catch (err) {
          console.error('Error al obtener los datos del proveedor:', err);
          res.status(500).json({ error: 'Error al obtener los datos del proveedor' });
        }
      };
    

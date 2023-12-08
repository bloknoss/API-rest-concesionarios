// Importo express y inicio un Router
const express = require('express');
const concesionariosRouter = express.Router();

// Importo el controlador de los concesionarios
const controller  = require('../controllers/concesionarios');

// Cada ruta que he creado aquí lleva asignada un callback de el controlador.
concesionariosRouter.get('/concesionarios/',controller.getConcesionarios);
concesionariosRouter.post('/concesionarios/',controller.createConcesionario);
concesionariosRouter.get('/concesionarios/:id/',controller.getConcesionario);
concesionariosRouter.put('/concesionarios/:id',controller.updateConcesionario);
concesionariosRouter.delete('/concesionarios/:id',controller.deleteConcesionario);

// Exporto el router para los concesionarios
module.exports = concesionariosRouter;
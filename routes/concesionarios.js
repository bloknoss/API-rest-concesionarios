// Importo express y inicio un Router
const express = require('express');
const router = express.Router();

// Importo el controlador de los concesionarios
const controller  = require('../controllers/concesionarios');

// Cada ruta que he creado aquí lleva asignada un callback de el controlador.
router.get('/concesionarios/',controller.getConcesionarios);
router.post('/concesionarios/',controller.createConcesionario);
router.get('/concesionarios/:id/',controller.getConcesionario);
router.put('/concesionarios/:id',controller.updateConcesionario);
router.delete('/concesionarios/:id',controller.deleteConcesionario);

// Exporto el router para los concesionarios
module.exports = router;
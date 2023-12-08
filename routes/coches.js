// Importo express y inicio un router
const express = require('express');
const router = express.Router();

// Importo el controlador de los coches
const controller = require('../controllers/coches');

// Cada ruta que he creado aquí lleva asignada un callback de el controlador.
router.get('/concesionarios/:id/coches', controller.getCoches);
router.post('/concesionarios/:id/coches', controller.createCoche);
router.get('/concesionarios/:id/coches/:cocheId', controller.getCoche);
router.put('/concesionarios/:id/coches/:cocheId', controller.updateCoche);
router.delete('/concesionarios/:id/coches/:cocheId', controller.deleteCoche);

// Exporto el router para los coches
module.exports = router;
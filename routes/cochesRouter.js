const express = require('express');
const router = express.Router();

const {getCoche, getCoches, deleteCoche, updateCoche, createCoche} = require('../controllers/cochesControllers');

router.get('/concesionarios/:id/coches', getCoches);
router.post('/concesionarios/:id/coches', createCoche);
router.get('/concesionarios/:id/coches/:cocheId', getCoche);
router.put('/concesionarios/:id/coches/:cocheId', updateCoche);
router.delete('/concesionarios/:id/coches/:cocheId', deleteCoche);

module.exports = router;
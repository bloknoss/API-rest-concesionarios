const express = require('express');
const router = express.Router();

const {getConcesionario, getConcesionarios, updateConcesionario, deleteConcesionario, createConcesionario} = require('../controllers/concesionariosControllers');

router.get('/concesionarios', getConcesionarios);
router.post('/concesionarios', createConcesionario);
router.get('/concesionarios/:id/',getConcesionario);
router.put('/concesionarios/:id', updateConcesionario);
router.delete('/concesionarios/:id', deleteConcesionario);

module.exports = router;
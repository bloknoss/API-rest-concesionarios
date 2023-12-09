// Importamos el servicio de concesionario, este se encargará de realizar las consultas con la base de datos
const concesionarioService =  require('../services/concesionarios');


// Lista todos los concesionarios
const getConcesionarios = async (_request, response,next) => {
  try {
    await concesionarioService.getConcesionarios().then(x => response.json(x));
    next();
  } catch (err) {
    console.log(`Ha ocurrido un error: ${  err.message}`);
  }
};
  
// Lista los concesionarios
const createConcesionario = async (request, response,next) => {

  try {
    await concesionarioService.postConcesionario(request.body);
    
    response.json({ message: 'OK' });
    next();

  } catch (err) {

    console.log(`Ha ocurrido un error: ${  err.message}`);
  }
};
  
// Obtener un solo concesionario
const getConcesionario = async (request, response,next) => {
  try {
    
    const id = request.params.id;
    await concesionarioService.getConcesionario(id).then(x => response.json(x));
  } catch (err) {

    console.log(`Ha ocurrido un error: ${  err.message}`);
  }

};
  
// Actualizar un solo concesionario
const updateConcesionario =  async (request, response,next) => {
  try {
    const id = request.params.id;
    await concesionarioService.putConcesionario(id, request.body);
    response.json({ message: 'OK' });
    next();
  } catch (err) {
    console.log(`Ha ocurrido un error: ${  err.message}`);
  }
};
  
// Borrar un solo concesionario
const deleteConcesionario  = async (request, response,next) => {
  try {
    const id = request.params.id;
    await concesionarioService.deleteConcesionario(id);
    response.json({ message: 'OK' });
    next();

  } catch (err) {
    console.log(`Ha ocurrido un error: ${  err.message}`);
  }
};


module.exports = { 
  getConcesionarios,
  createConcesionario,
  getConcesionario,
  updateConcesionario,
  deleteConcesionario
};
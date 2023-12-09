// Importamos el servicio de concesionario, este se encargará de realizar las consultas con la base de datos
const concesionarioService =  require('../services/concesionarios');


// Lista todos los concesionarios
const getConcesionarios = async (_request, response,next) => {
  await concesionarioService.getConcesionarios().then(x => response.json(x));
  next();
};
  
// Lista los concesionarios
const createConcesionario = async (request, response,next) => {

  await concesionarioService.postConcesionario(request.body);
  
  response.json({ message: 'OK' });
  next();
};
  
// Obtener un solo concesionario
const getConcesionario = async (request, response,next) => {
  const id = request.params.id;
  await concesionarioService.getConcesionario(id).then(x => response.json(x));
};
  
// Actualizar un solo concesionario
const updateConcesionario =  async (request, response,next) => {
  const id = request.params.id;
  await concesionarioService.putConcesionario(id, request.body);
  response.json({ message: 'OK' });
  next();
};
  
// Borrar un solo concesionario
const deleteConcesionario  = async (request, response,next) => {
  const id = request.params.id;
  await concesionarioService.deleteConcesionario(id);
  response.json({ message: 'OK' });
  next();
};


module.exports = { 
  getConcesionarios,
  createConcesionario,
  getConcesionario,
  updateConcesionario,
  deleteConcesionario
};
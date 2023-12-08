const cochesService = require('../services/cochesServices');

// Devuelve todos los coches pertenecientes a un concesionario
const getCoches =  async (request, response, next) => {
  const id = request.params.id;

  await cochesService.getCoches(id).then(x => response.json(x));
  next();
};


const createCoche = async (request, response, next) => {
  const id = request.params.id;
  
  await cochesService.postCoche(id,request.body); 
  response.json({ message: 'OK' });
  next();
};
  
// Obtener un solo coche de un concesionario
const getCoche = async (request, response, next) => {
  const id = await request.params.id;
  const cocheId = request.params.cocheId;
  
  await cochesService.getCoche(id,cocheId).then(x => response.json(x));
  next();
};
  

// Actualizar un solo coche perteneciente a un concesionario
const updateCoche =  async (request, response, next) => {
  const id =  request.params.id;
  const cocheId = request.params.cocheId;
  await cochesService.putCoche(id, cocheId, request.body);
  
  response.json({ message: 'OK' });
  next();
};
  
// Borrar un coche en especifico
const deleteCoche = async (request, response, next) => {
  const id = request.params.id;
  const cocheId = request.params.cocheId;
  
  await cochesService.deleteCoche(id, cocheId);

  response.json({ message: 'OK' });
}; 


module.exports = {
  getCoches,
  createCoche,
  getCoche,
  updateCoche,
  deleteCoche
};
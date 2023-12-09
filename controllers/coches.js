const cochesService = require('../services/coches');

// Devuelve todos los coches pertenecientes a un concesionario
const getCoches =  async (request, response, next) => {
  
  try  {
    const id = request.params.id;
    await cochesService.getCoches(id).then(x => response.json(x));
    next();
  } catch (err) {
    console.log(`Ha ocurrido un error${err.message}`);
  }
};


const createCoche = async (request, response, next) => {
  try {
    const id = request.params.id;    
    await cochesService.postCoche(id,request.body);

    response.json({ message: 'OK' });
    next();
  } catch (err) {
    console.log(`Ha ocurrido un error${err.message}`);
  }
};
  
// Obtener un solo coche de un concesionario
const getCoche = async (request, response, next) => {
  try {

    const id = await request.params.id;
    const cocheId = parseInt(request.params.cocheId);
    
    await cochesService.getCoche(id,cocheId).then(x => response.json(x));
    next();

  } catch (err) {
    console.log(`Ha ocurrido un error: ${err.message}`);
  }
};
  

// Actualizar un solo coche perteneciente a un concesionario
const updateCoche =  async (request, response, next) => {
  try {
    const id =  request.params.id;
    const cocheId = request.params.cocheId;
    await cochesService.putCoche(id, cocheId, request.body);
  
    response.json({ message: 'OK' });
    next();
  } 
  catch (err) {
    console.log(`Ha ocurrido un error: ${err.message}`);
  }
};
  
// Borrar un coche en especifico
const deleteCoche = async (request, response, next) => {
  try {
    const id = request.params.id;
    const cocheId = request.params.cocheId;
  
    await cochesService.deleteCoche(id, cocheId);

    response.json({ message: 'OK' });
  } catch (err) {
    console.log(`Ha ocurrido un error: ${err.message}`);
  }
}; 


module.exports = {
  getCoches,
  createCoche,
  getCoche,
  updateCoche,
  deleteCoche
};
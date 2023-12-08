
const express = require('express');
const app = express();

// Devuelve todos los coches pertenecientes a un concesionario
const getCoches =  async (request, response, next) => {
  const id = await parseObjectId(request.params.id);
  dbFindOne(id).then((concesionario) => response.json(concesionario.coches));
  next();
};


const createCoche = async (request, response, next) => {
  const id = await parseObjectId(request.params.id);
  const concesionario = await dbFindOne(id).then((concesionario) => concesionario);
  
  concesionario.coches.push(request.body);
  dbUpdateConcesionario(id, concesionario.nombre, concesionario.direccion, concesionario.coches);
  
  response.json({ message: 'OK' });
  next();
};
  
// Obtener un solo coche de un concesionario
const getCoche = async (request, response, next) => {
  const id = await parseObjectId(request.params.id);
  const cocheId = request.params.cocheId;
  
  dbFindOne(id).then((concesionario) => response.json(concesionario.coches[cocheId]));
  next();
};
  

// Actualizar un solo coche perteneciente a un concesionario
const updateCoche =  async (request, response, next) => {
  const id = await parseObjectId(request.params.id);
  const cocheId = request.params.cocheId;
  const concesionario = await dbFindOne(id).then((concesionario) => concesionario);
  
  concesionario.coches[cocheId] = request.body;
  dbUpdateConcesionario(id, concesionario.nombre, concesionario.direccion, concesionario.coches);
  
  response.json({ message: 'OK' });
  next();
};
  
// Borrar un coche en especifico
const deleteCoche = async (request, response, next) => {
  const id = await parseObjectId(request.params.id);
  const cocheId = request.params.cocheId;
  const concesionario = await dbFindOne(id).then((concesionario) => concesionario);
  
  concesionario.coches.splice(cocheId, 1);
  dbUpdateConcesionario(id, concesionario.nombre, concesionario.direccion, concesionario.coches);
  
  response.json({ message: 'OK' });
}; 


module.exports = {
  getCoches,
  createCoche,
  getCoche,
  updateCoche,
  deleteCoche
};
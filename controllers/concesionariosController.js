const express = require('express');
const app = express();


// Lista todos los concesionarios
const getConcesionarios = async (_request, response,next) => {
  dbFindMany().then((concesionarios) => response.json(concesionarios));
  next();
};
  
// Lista los concesionarios
const createConcesionario = async (request, response,next) => {
  const newConcesionario = request.body;
  await dbInsert(newConcesionario);
  response.json({ message: 'OK' });
  next();
};
  
// Obtener un solo concesionario
const getConcesionario = async (request, response,next) => {
  const id = await parseObjectId(request.params.id);
  dbFindOne(id).then((concesionario) => response.json(concesionario));
  next();
};
  
// Actualizar un solo concesionario
const updateConcesionario =  async (request, response,next) => {
  const id = await parseObjectId(request.params.id);
  const nombre = request.body.nombre;
  const direccion = request.body.direccion;
  const coches = request.body.coches;
  
  await dbUpdateConcesionario(id, nombre, direccion, coches);
  response.json({ message: 'OK' });
  next();
};
  
// Borrar un solo concesionario
const deleteConcesionario  = async (request, response,next) => {
  const id = await parseObjectId(request.params.id);
  await dbDeleteOne(id);

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
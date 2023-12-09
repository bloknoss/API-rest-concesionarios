const database = require('../database/database');


// Devuelve una lista con todos los concesionarios
const getConcesionarios =  async () => {
  return await database.dbFindConcesionarios();
};
  
// Lista todos los concesionarios
const postConcesionario =  async (body) => {
  return await database.dbInsertConcesionario(body);
  
};
  
// Obtener un solo concesionario
const getConcesionario = async (id) => {
  const _id = await database.parseObjectId(id);
  return await database.dbFindConcesionario(_id);
};
  
// Actualizar un solo concesionario
const putConcesionario =  async (id, body) => {
  const _id = await database.parseObjectId(id);
  const nombre = body.nombre;
  const direccion = body.direccion;
  const coches = body.coches;
  
  return await database.dbUpdateConcesionario(_id, nombre, direccion, coches);
};
  
// Borrar un solo conesionario
const deleteConcesionario =  async (id) => {
  const _id = await database.parseObjectId(id);
  await database.dbDeleteConcesionario(_id);
};

module.exports = {
  getConcesionarios,
  getConcesionario,
  postConcesionario,
  putConcesionario,
  deleteConcesionario
};
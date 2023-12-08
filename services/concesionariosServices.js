const { dbFindOne, dbFindMany, parseObjectId, dbInsert, dbDeleteOne, dbUpdateConcesionario } = require('../database/database');


// Devuelve una lista con todos los concesionarios
const getConcesionarios =  async () => {
  return await dbFindMany();
};
  
// Lista todos los concesionarios
const postConcesionario =  async (body) => {
  return await dbInsert(body);
  
};
  
// Obtener un solo concesionario
const getConcesionario = async (id) => {
  const _id = await parseObjectId(id);
  return await dbFindOne(_id);
};
  
// Actualizar un solo concesionario
const putConcesionario =  async (id, body) => {
  const _id = await parseObjectId(id);
  const nombre = body.nombre;
  const direccion = body.direccion;
  const coches = body.coches;
  
  return await dbUpdateConcesionario(_id, nombre, direccion, coches);
};
  
// Borrar un solo conesionario
const deleteConcesionario =  async (id) => {
  const _id = await parseObjectId(id);
  await dbDeleteOne(_id);
};

module.exports = {
  getConcesionarios,
  getConcesionario,
  postConcesionario,
  putConcesionario,
  deleteConcesionario
};
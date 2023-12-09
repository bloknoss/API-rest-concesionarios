const database = require('../database/database');

const getCoches = async (id) => {
  const _id = await database.parseObjectId(id);
  return await database.dbFindCoches(_id);
};
  
// Añadir un nuevo coche perteneciente al concesionario
const postCoche = async (id, body) => {
  const _id = await database.parseObjectId(id);
  return await database.dbInsertCoche(_id, body);
};
  
// Obtener un solo coche de un concesionario
const getCoche = async (id, cocheId) => {
  const _id = await database.parseObjectId(id); 
  return await database.dbFindCoche(_id,cocheId);
};
  
// Actualizar un solo coche perteneciente a un concesionario
const putCoche = async (id, cocheId, body) => {
  const _id = await database.parseObjectId(id);
  return await database.dbUpdateCoche(_id, cocheId, body);
};
  
// Borrar un coche en especifico
const deleteCoche =  async (id,cocheId) => {
  const _id = await database.parseObjectId(id);
  return await database.dbDeleteCoche(_id, cocheId);
};


module.exports = {
  getCoches,
  getCoche,
  postCoche,
  putCoche,
  deleteCoche

};
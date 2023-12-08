const { dbFindOne, parseObjectId, dbUpdateConcesionario } = require('../database/database');

const getCoches = async (id) => {
  const _id = await parseObjectId(id);
  return await dbFindOne(_id).then(concesionario => concesionario.coches);
};
  
// Añadir un nuevo coche perteneciente al concesionario
const postCoche = async (id, body) => {
  const _id = await parseObjectId(id);
  const concesionario = await dbFindOne(_id).then((concesionario) => concesionario);  
  concesionario.coches.push(body);
  dbUpdateConcesionario(_id, concesionario.nombre, concesionario.direccion, concesionario.coches);
  
};
  
// Obtener un solo coche de un concesionario
const getCoche = async (id, cocheId) => {
  const _id = await parseObjectId(id);
  
  return await dbFindOne(_id).then((concesionario) =>  concesionario.coches[cocheId]);
};
  
// Actualizar un solo coche perteneciente a un concesionario
const putCoche = async (id, cocheId, body) => {
  const _id = await parseObjectId(id);
  const concesionario = await dbFindOne(_id).then((concesionario) => concesionario);
  
  concesionario.coches[cocheId] = body;
  return await dbUpdateConcesionario(_id, concesionario.nombre, concesionario.direccion, concesionario.coches);
};
  
// Borrar un coche en especifico
const deleteCoche =  async (id,cocheId) => {
  const _id = await parseObjectId(id);
  const concesionario = await dbFindOne(_id).then((concesionario) => concesionario);
  
  concesionario.coches.splice(cocheId, 1);
  return await dbUpdateConcesionario(_id, concesionario.nombre, concesionario.direccion, concesionario.coches);
};


module.exports = {
  getCoches,
  getCoche,
  postCoche,
  putCoche,
  deleteCoche

};
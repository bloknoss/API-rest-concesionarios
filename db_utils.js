const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;

const db_name = "concesionarios";
const collection_name = "concesionarios";
const db_uri = "mongodb://127.0.0.1:27017";


async function dbFindOne(search = {}) {
    const conn = new MongoClient(`${db_uri}/${db_name}`);

    try {
        const collection = conn.db().collection(`${collection_name}`);
        const results = await collection.findOne(search);

        return results;
    } catch (err) {
        console.error(err);
    } finally {
        conn.close();
    }
}

async function dbFindMany(search = {}) {
    const conn = new MongoClient(`${db_uri}/${db_name}`);
    try {
        const collection = conn.db().collection(`${collection_name}`);
        const results = await collection.find(search).toArray();

        return results;
    } catch (err) {
        console.error(err);
    } finally {
        conn.close();
    }
}


async function dbInsert(item) {
    const conn = new MongoClient(`${db_uri}/${db_name}`);

    try {
        const collection = conn.db().collection(`${collection_name}`);
        const results = await collection.insertOne(item);
        return results;
    } catch (err) {
        console.error(err);
    } finally {
        conn.close();
    }
}

async function dbDeleteOne(id) {
    const conn = new MongoClient(`${db_uri}/${db_name}`);
    try {
        const collection = conn.db().collection(`${collection_name}`);
        const results = await collection.findOneAndDelete({ _id: id });

        return results;
    } catch (err) {
        console.error(err);
    } finally {
        conn.close();
    }
}

async function dbUpdateConcesionario(id, nombre, direccion, coches) {
    const conn = new MongoClient(`${db_uri}/${db_name}`);
    try {
        const collection = conn.db().collection(collection_name);

        const results = await collection.updateOne(
            { _id: id},
            {
                $set: {
                    nombre: nombre,
                    direccion: direccion,
                    coches: coches,
                },
            }
        );

        return results;
    } catch (err) {
    } finally {
        conn.close();
    }
}

async function parseObjectId(id) {
    const conn = new MongoClient(`${db_uri}/${db_name}`);

    try {
        const collection = conn.db().collection(collection_name);

        const results = await collection.find().toArray();

        //Validacion de la ID proporcionada
        if (isNaN(id)) {
            id = new ObjectId(id);
            let existsId = await collection.findOne({ _id: id });

            return existsId == null ? { message: "No existe la Id de Concesionario que has introducido." } : existsId._id;
        } else if (results.length < parseInt(id) + 1) {
            return Promise.resolve({ message: "Concesionario not found" });
        } else {
            return results[parseInt(id)]._id;
        }
    } catch (err) {
        console.log(err);
    } finally {
        conn.close();
    }
}
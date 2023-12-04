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

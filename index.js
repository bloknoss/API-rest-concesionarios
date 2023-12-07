// Importamos el framework Express
const express = require("express");

// Importamos helmet para añadir seguridad a nuestra API
const helmet = require("helmet");

// Importamos Swagger UI Express
const swaggerUi = require("swagger-ui-express");

// Importamos la configuración de Swagger
const swaggerCnf = require("./swagger.json");

// Inicializamos la aplicación
const app = express();

// Importamos las funciones de bases de datos
const { dbFindOne, dbFindMany, parseObjectId, dbInsert, dbDeleteOne, dbUpdateConcesionario } = require("./db_utils");

// Indicamos que la aplicación puede recibir JSON (API Rest)
app.use(express.json());

// Añadimos el Middleware de Helmet a nuestra API (Añaderá bastantes headers de protección)
app.use(helmet());

// Añadimos la ruta para los api-docs, configurando Swagger en el.
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerCnf)
  );
  

// Indicamos el puerto en el que vamos a desplegar la aplicación
const port = process.env.PORT || 8080;

// Devuelve una lista con todos los concesionarios
app.get("/concesionarios/", (_request, response) => {
    dbFindMany().then((concesionarios) => response.json(concesionarios));
});

// Lista todos los concesionarios
app.post("/concesionarios/", async (request, response) => {
    const newConcesionario = request.body;
    await dbInsert(newConcesionario);

    response.json({ message: "OK" });
});

// Obtener un solo concesionario
app.get("/concesionarios/:id", async (request, response) => {
    const id = await parseObjectId(request.params.id);
    dbFindOne(id).then((concesionario) => response.json(concesionario));
});

// Actualizar un solo concesionario
app.put("/concesionarios/:id", async (request, response) => {
    const id = await parseObjectId(request.params.id);
    const nombre = request.body.nombre;
    const direccion = request.body.direccion;
    const coches = request.body.coches;

    await dbUpdateConcesionario(id, nombre, direccion, coches);
    response.json({ message: "OK" });
});

// Borrar un solo conesionario
app.delete("/concesionarios/:id", async (request, response) => {
    const id = await parseObjectId(request.params.id);
    await dbDeleteOne(id);

    response.json({ message: "OK" });
});

// Devuelve todos los coches pertenecientes a un concesionario
app.get("/concesionarios/:id/coches", async (request, response) => {
    const id = await parseObjectId(request.params.id);
    dbFindOne(id).then((concesionario) => response.json(concesionario.coches));
});

// Añadir un nuevo coche perteneciente al concesionario
app.post("/concesionarios/:id/coches", async (request, response) => {
    const id = await parseObjectId(request.params.id);
    const concesionario = await dbFindOne(id).then((concesionario) => concesionario);

    concesionario.coches.push(request.body);
    dbUpdateConcesionario(id, concesionario.nombre, concesionario.direccion, concesionario.coches);

    response.json({ message: "OK" });
});

// Obtener un solo coche de un concesionario
app.get("/concesionarios/:id/coches/:cocheId", async (request, response) => {
    const id = await parseObjectId(request.params.id);
    const cocheId = request.params.cocheId;

    dbFindOne(id).then((concesionario) => response.json(concesionario.coches[cocheId]));
});

// Actualizar un solo coche perteneciente a un concesionario
app.put("/concesionarios/:id/coches/:cocheId", async (request, response) => {
    const id = await parseObjectId(request.params.id);
    const cocheId = request.params.cocheId;
    const concesionario = await dbFindOne(id).then((concesionario) => concesionario);

    concesionario.coches[cocheId] = request.body;
    dbUpdateConcesionario(id, concesionario.nombre, concesionario.direccion, concesionario.coches);

    response.json({ message: "OK" });
});

// Borrar un coche en especifico
app.delete("/concesionarios/:id/coches/:cocheId", async (request, response) => {
    const id = await parseObjectId(request.params.id);
    const cocheId = request.params.cocheId;
    const concesionario = await dbFindOne(id).then((concesionario) => concesionario);

    concesionario.coches.splice(cocheId, 1);
    dbUpdateConcesionario(id, concesionario.nombre, concesionario.direccion, concesionario.coches);

    response.json({ message: "OK" });
});

// Iniciamos el servidor
app.listen(port, (err) => {
    if (err) {
        console.log(`Ha ocurrido un error mientras se iniciaba el servidor\n${err.message}`);
    }
    console.clear();
    console.log(`Servidor desplegado en puerto: ${port}`);
});

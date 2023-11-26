// Importamos el framework Express
const express = require("express");

// Inicializamos la aplicación
const app = express();

// Indicamos que la aplicación puede recibir JSON (API Rest)
app.use(express.json());

// Indicamos el puerto en el que vamos a desplegar la aplicación
const port = process.env.PORT || 8080;

// NOTA: Tanto las variables de concesionarios y oches podrían estar vacíos
// Definimos una estructura de datos para los coches.
// Esto podría estar vacío, tanto esta como la de coches, pero de esta manera ya existiran datos de ejemplo.
// (Esta también será temporal hasta incorporar la base de datos.)

const coches = [
    { modelo: "Clio", cv: 120, precio: 25000 },
    { modelo: "GTR", cv: 300, precio: 2500 },
];

// Definimos la estructura de datos para los concesionarios
// (Esta será temporal hasta implementar la base de datos)
let concesionarios = [{
    nombre: "Concesionario Antonio Jesus",
    direccion: "C/ Comiditas s/n",
    coches: coches,
}];

// Devuelve una lista con todos los concesionarios
app.get("/concesionarios/", (_request, response) => {
    response.json(concesionarios);
});

// Lista todos los concesionarios
app.post("/concesionarios/", (request, response) => {
    concesionarios.push(request.body);
    response.json({ message: "ok" });
});

// Obtener un solo concesionario
app.get("/concesionarios/:id", (request, response) => {
    const id = request.params.id;
    const result = concesionarios[id];
    response.json({ result });
});

// Actualizar un solo concesionario
app.put("/concesionarios/:id", (request, response) => {
    const id = request.params.id;
    concesionarios[id] = request.body;
    response.json({ message: "ok" });
});

// Borrar un solo conesionario
app.delete("/concesionarios/:id", (request, response) => {
    const id = request.params.id;
    concesionarios = concesionarios.filter((item) =>
        concesionarios.indexOf(item) != id
    );
    response.json({ message: "ok" });
});

// Devuelve todos los coches pertenecientes a un concesionario
app.get("/concesionarios/:id/coches", (request, response) => {
    const id = request.params.id;
    const cochesConcesionario = concesionarios[id].coches;
    response.json(cochesConcesionario);
});

// Añadir un nuevo coche perteneciente al concesionario
app.post("/concesionarios/:id/coches", (request, response) => {
    const id = request.params.id;
    concesionarios[id].coches.push(request.body);

    response.json({ message: "ok" });
});

// Obtener un solo coche de un concesionario
app.get("/concesionarios/:id/coches/:cocheId", (request, response) => {
    const id = request.params.id;
    const cocheId = request.params.cocheId;
    const result = concesionarios[id].coches[cocheId];
    response.json({ result });
});

// Actualizar un solo coche perteneciente a un concesionario
app.put("/concesionarios/:id/coches/:cocheId", (request, response) => {
    const id = request.params.id;
    const cocheId = request.params.cocheId;
    concesionarios[id].coches[cocheId] = request.body;
    response.json({ message: "ok" });
});

// Borrar un coche en especifico
app.delete("/concesionarios/:id/coches/:cocheId", (request, response) => {
    const id = request.params.id;
    const cocheId = request.params.cocheId;
    concesionarios[id].coches = concesionarios[id].coches.filter((item) =>
        concesionarios[id].coches.indexOf(item) != cocheId
    );

    response.json({ message: "ok" });
});

// Iniciamos el servidor
app.listen(port, (err) => {
    if (err) {
        console.log(
            `Ha ocurrido un error mientras se iniciaba el servidor\n${err.message}`,
        );
    }
    console.log(`Servidor desplegado en puerto: ${port}`);
});

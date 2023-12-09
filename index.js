// Importamos las variables de entorno
require('dotenv').config();

// Importamos el framework Express
const express = require('express');

// Importamos los routers para la API
const concesionariosRouter = require('./routes/concesionarios');
const cochesRouter = require('./routes/coches');

// Importamos helmet para añadir seguridad a nuestra API
const helmet = require('helmet');

// Importa el cookie-parser
const cookieParser = require('cookie-parser');

// Importamos Swagger UI Express
const swaggerUi = require('swagger-ui-express');

// Importamos la configuración de Swagger
const swaggerCnf = require('./swagger.json');

// Inicializamos la aplicación
const app = express();

// Indicamos que la aplicación puede recibir JSON (API Rest)
app.use(express.json());

// Implementamos el cookie parser
app.use(cookieParser());

// Añadimos el Middleware de Helmet a nuestra API (Añaderá bastantes headers de protección)
app.use(helmet());

// Añadimos la ruta para los api-docs, configurando Swagger en el.
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerCnf));

// Indicamos el puerto en el que vamos a desplegar la aplicación
const port = process.env.PORT || 8080;

// Implemetamos el middleware de los routers, no especificamos ruta, así que sera en /
// Si pusieramos '/api/' antes del router, todas las direcciones del router irían seguidas de /api/ 
// Por ahora, no he realizado esto, ya que tendría que realizar varios cambios a la documentación y README
// Y esperare a tener una versión final estable
app.use(concesionariosRouter);
app.use(cochesRouter);


// Iniciamos el servidor
app.listen(port, (err) => {
  console.clear();
  if (err) {
    console.log(`Ha ocurrido un error mientras se iniciaba el servidor\n${err.message}`);
  }
  console.log(`Servidor desplegado en puerto: ${port}`);
});

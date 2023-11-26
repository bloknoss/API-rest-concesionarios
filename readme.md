# ConcesioAPI

ConcesioAPI es una REST API creada en NodeJS mediante Express que tiene como objetivo el proporcionar unos endpoints para poder modificar / acceder datos sobre distintos concesionarios y sus respectivos coches de manera cómoda y sencilla.

## Instalación

Usa el gestor de paquetes de node [npm](https://www.npmjs.com/) para instalar las dependencias.

```bash
git clone https://github.com/bloknoss/API-rest-concesionarios.git
cd ./API-rest-concesionarios
npm i
```

## Guía de Uso
Una vez dentro del directorio del repositorio, y habiendo seguido la guia de instalación, realizamos el siguiente comando:
```bash
npm start
```
Con esto se debería de iniciar el servidor, y para realizar una llamada a la API, podemos ejecutar el comando [curl](https://curl.se/docs/) en la terminal para comprobar que funciona corretamente (Ajustar el comando según los cambios que hayas realizado):

**Entrada:**
```bash
curl -X GET http://localhost:8080/concesionarios
```
**Salida:**

![image](https://i.imgur.com/YVzFlDg.png)

Se puede apreciar que el comando curl nos ha devuelto un texto en formato JSON con los concesionarios, en lugar de un error, con esto se demostraría que funciona correctamente.
> **_NOTA:_** También se podría utilizar [Postman](https://www.postman.com/), tanto su versión CLI como su GUI, y sería igualmente de válido..

## Endpoints - Configuración
Por defecto, la ruta base o la IP donde estará el servidor de forma local será localhost, o [http://localhost](http://localhost/), a través de esto accederemos a los distintos endpoints de nuestra aplicación.
Estos endpoints están divididos entre las dos secciones que puedes acceder, los concesionarios y los coches, los coches pertenecen a los concesionarios, se deberá acceder a los coches mediante la id del concesionario.
Los endpoints estarán documentados abajo.

## API Endpoints - Concesinarios

1. **Obtener todos los concesionarios:**
   <details>
    <summary><code>GET</code> <code><b>/concesionarios/</b></code></summary>

   ##### Parametros
   > Ninguno

   ##### Respuestas
   > | Código HTTP | Content-Type                     | Respuesta                                      |
   > |-------------|----------------------------------|------------------------------------------------|
   > | `200`       | `application/json`               | Lista de concesionarios en formato JSON         |
   > | `500`       | `application/json`               | Error interno del servidor                      |

   ##### Ejemplo cURL
   > ```bash
   > curl -X GET http://localhost:8080/concesionarios/
   > ```

   </details>

2. **Añadir un nuevo concesionario:**
   <details>
    <summary><code>POST</code> <code><b>/concesionarios/</b></code></summary>

   ##### Parametros
   > | Nombre    | Tipo      | Tipo de dato                | Descripción                                   |
   > |-----------|-----------|-----------------------------|-----------------------------------------------|
   > | body      | requerido | objeto (JSON o YAML)        | Datos del nuevo concesionario en formato JSON |

   ##### Respuestas
   > | Código HTTP | Content-Type                     | Respuesta                    |
   > |-------------|----------------------------------|------------------------------|
   > | `200`       | `application/json`               | `{"message":"ok"}`           |
   > | `500`       | `application/json`               | Error interno del servidor   |

   ##### Ejemplo cURL
   > ```bash
   > curl -X POST -H "Content-Type: application/json" --data @nuevo_concesionario.json http://localhost:8080/concesionarios/
   > ```

   </details>

3. **Obtener un solo concesionario por ID:**
   <details>
    <summary><code>GET</code> <code><b>/concesionarios/:id</b></code></summary>

   ##### Parametros
   > | Nombre    | Tipo      | Tipo de dato   | Descripción                                   |
   > |-----------|-----------|----------------|-----------------------------------------------|
   > | id        | requerido | cadena         | ID del concesionario a obtener                |

   ##### Respuestas
   > | Código HTTP | Content-Type                     | Respuesta                    |
   > |-------------|----------------------------------|------------------------------|
   > | `200`       | `application/json`               | Concesionario en formato JSON |
   > | `404`       | `application/json`               | Concesionario no encontrado  |

   ##### Ejemplo cURL
   > ```bash
   > curl -X GET http://localhost:8080/concesionarios/1
   > ```

   </details>

4. **Actualizar un solo concesionario por ID:**
   <details>string
    <summary><code>PUT</code> <code><b>/concesionarios/:id</b></code></summary>

   ##### Parametros
   > | Nombre    | Tipo      | Tipo de dato                | Descripción                                   |
   > |-----------|-----------|-----------------------------|-----------------------------------------------|
   > | id        | requerido | cadena                      | ID del concesionario a actualizar              |
   > | body      | requerido | objeto (JSON o YAML)        | Datos actualizados del concesionario en formato JSON |

   ##### Respuestas
   > | Código HTTP | Content-Type                     | Respuesta                    |
   > |-------------|----------------------------------|------------------------------|
   > | `200`       | `application/json`               | `{"message":"ok"}`           |
   > | `404`       | `application/json`               | Concesionario no encontrado  |

   ##### Ejemplo cURL
   > ```bash
   > curl -X PUT -H "Content-Type: application/json" --data @concesionario_actualizado.json http://localhost:8080/concesionarios/1
   > ```

   </details>

5. **Eliminar un solo concesionario por ID:**
   <details>
    <summary><code>DELETE</code> <code><b>/concesionarios/:id</b></code></summary>

   ##### Parametros
   > | Nombre    | Tipo      | Tipo de dato   | Descripción                                   |
   > |-----------|-----------|----------------|-----------------------------------------------|
   > | id        | requerido | cadena         | ID del concesionario a borrar                  |

   ##### Respuestas
   > | Código HTTP | Content-Type                     | Respuesta                    |
   > |-------------|----------------------------------|------------------------------|
   > | `200`       | `application/json`               | `{"message":"ok"}`           |
   > | `404`       | `application/json`               | Concesionario no encontrado  |

   ##### Ejemplo cURL
   > ```bash
   > curl -X DELETE http://localhost:8080/concesionarios/1
   > ```

   </details>


## API Endpoints - Coches

1. **Obtener todos los coches pertenecientes a un concesionario:**
   <details>
   <summary><code>GET</code> <code><b>/concesionarios/:id/coches</b></code></summary>

##### Parametros
   > | Nombre    | Tipo      | Tipo de dato   | Descripción                                   |
   > |-----------|-----------|----------------|-----------------------------------------------|
   > | id        | requerido | cadena         | ID del concesionario a obtener                |

##### Respuestas
   > | Código HTTP | Content-Type                     | Respuesta                    |
   > |-------------|----------------------------------|------------------------------|
   > | `200`       | `application/json`               | Lista de coches en formato JSON |
   > | `404`       | `application/json`               | Concesionario no encontrado  |

##### Ejemplo cURL
   > ```bash
   > curl -X GET http://localhost:8080/concesionarios/1/coches
   > ```

   </details>

2. **Añadir un nuevo coche perteneciente a un concesionario:**
   <details>
   <summary><code>POST</code> <code><b>/concesionarios/:id/coches</b></code></summary>

##### Parametros
   > | Nombre    | Tipo      | Tipo de dato                | Descripción                                   |
   > |-----------|-----------|-----------------------------|-----------------------------------------------|
   > | id        | requerido | cadena                      | ID del concesionario al que pertenece el coche |
   > | body      | requerido | objeto (JSON o YAML)        | Datos del nuevo coche en formato JSON          |

##### Respuestas
   > | Código HTTP | Content-Type                     | Respuesta                    |
   > |-------------|----------------------------------|------------------------------|
   > | `200`       | `application/json`               | `{"message":"ok"}`           |
   > | `404`       | `application/json`               | Concesionario no encontrado  |

##### Ejemplo cURL
   > ```bash
   > curl -X POST -H "Content-Type: application/json" --data @nuevo_coche.json http://localhost:8080/concesionarios/1/coches
   > ```

   </details>

3. **Obtener un solo coche de un concesionario por ID de concesionario y ID de coche:**
   <details>
   <summary><code>GET</code> <code><b>/concesionarios/:id/coches/:cocheId</b></code></summary>

##### Parametros
   > | Nombre    | Tipo      | Tipo de dato   | Descripción                                   |
   > |-----------|-----------|----------------|-----------------------------------------------|
   > | id        | requerido | cadena         | ID del concesionario a obtener                |
   > | cocheId   | requerido | cadena         | ID del coche a obtener                       |

##### Respuestas
   > | Código HTTP | Content-Type                     | Respuesta                    |
   > |-------------|----------------------------------|------------------------------|
   > | `200`       | `application/json`               | Coche en formato JSON        |
   > | `404`       | `application/json`               | Coche no encontrado           |

##### Ejemplo cURL
   > ```bash
   > curl -X GET http://localhost:8080/concesionarios/1/coches/0
   > ```

   </details>

4. **Actualizar un solo coche perteneciente a un concesionario por ID de concesionario y ID de coche:**
   <details>
   <summary><code>PUT</code> <code><b>/concesionarios/:id/coches/:cocheId</b></code></summary>

##### Parametros
   > | Nombre    | Tipo      | Tipo de dato                | Descripción                                   |
   > |-----------|-----------|-----------------------------|-----------------------------------------------|
   > | id        | requerido | cadena                      | ID del concesionario al que pertenece el coche |
   > | cocheId   | requerido | cadena                      | ID del coche a actualizar                    |
   > | body      | requerido | objeto (JSON o YAML)        | Datos actualizados del coche en formato JSON |

##### Respuestas
   > | Código HTTP | Content-Type                     | Respuesta                    |
   > |-------------|----------------------------------|------------------------------|
   > | `200`       | `application/json`               | `{"message":"ok"}`           |
   > | `404`       | `application/json`               | Coche no encontrado           |

##### Ejemplo cURL
   > ```bash
   > curl -X PUT -H "Content-Type: application/json" --data @coche_actualizado.json http://localhost:8080/concesionarios/1/coches/0
   > ```

   </details>

5. **Eliminar un solo coche perteneciente a un concesionario por ID de concesionario y ID de coche:**

   <details>
   <summary><code>DELETE</code> <code><b>/concesionarios/:id/coches/:cocheId</b></code></summary>

##### Parametros
   > | Nombre    | Tipo      | Tipo de dato   | Descripción                                   |
   > |-----------|-----------|----------------|-----------------------------------------------|
   > | id        | requerido | cadena         | ID del concesionario al que pertenece el coche |
   > | cocheId   | requerido | cadena         | ID del coche a borrar                        |

##### Respuestas
   > | Código HTTP | Content-Type                     | Respuesta                    |
   > |-------------|----------------------------------|------------------------------|
   > | `200`       | `application/json`               | `{"message":"ok"}`           |
   > | `404`       | `application/json`               | Coche no encontrado           |

##### Ejemplo cURL
   > ```bash
   > curl -X DELETE http://localhost:8080/concesionarios/1/coches/0
   > ```

</details>

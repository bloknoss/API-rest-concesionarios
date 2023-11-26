1. **Obtener todos los concesionarios:**
   <details>
    <summary><code>GET</code> <code><b>/concesionarios/</b></code></summary>

   ##### Parameters
   > Ninguno

   ##### Responses
   > | Código HTTP | Content-Type                     | Respuesta                                      |
   > |-------------|----------------------------------|------------------------------------------------|
   > | `200`       | `application/json`               | Lista de concesionarios en formato JSON         |
   > | `500`       | `application/json`               | Error interno del servidor                      |

   ##### Example cURL
   > ```bash
   > curl -X GET http://localhost:8080/concesionarios/
   > ```

   </details>

2. **Añadir un nuevo concesionario:**
   <details>
    <summary><code>POST</code> <code><b>/concesionarios/</b></code></summary>

   ##### Parameters
   > | Nombre    | Tipo      | Tipo de dato                | Descripción                                   |
   > |-----------|-----------|-----------------------------|-----------------------------------------------|
   > | body      | requerido | objeto (JSON o YAML)        | Datos del nuevo concesionario en formato JSON |

   ##### Responses
   > | Código HTTP | Content-Type                     | Respuesta                    |
   > |-------------|----------------------------------|------------------------------|
   > | `200`       | `application/json`               | `{"message":"ok"}`           |
   > | `500`       | `application/json`               | Error interno del servidor   |

   ##### Example cURL
   > ```bash
   > curl -X POST -H "Content-Type: application/json" --data @nuevo_concesionario.json http://localhost:8080/concesionarios/
   > ```

   </details>

3. **Obtener un solo concesionario por ID:**
   <details>
    <summary><code>GET</code> <code><b>/concesionarios/:id</b></code></summary>

   ##### Parameters
   > | Nombre    | Tipo      | Tipo de dato   | Descripción                                   |
   > |-----------|-----------|----------------|-----------------------------------------------|
   > | id        | requerido | cadena         | ID del concesionario a obtener                |

   ##### Responses
   > | Código HTTP | Content-Type                     | Respuesta                    |
   > |-------------|----------------------------------|------------------------------|
   > | `200`       | `application/json`               | Concesionario en formato JSON |
   > | `404`       | `application/json`               | Concesionario no encontrado  |

   ##### Example cURL
   > ```bash
   > curl -X GET http://localhost:8080/concesionarios/1
   > ```

   </details>

4. **Actualizar un solo concesionario por ID:**
   <details>
    <summary><code>PUT</code> <code><b>/concesionarios/:id</b></code></summary>

   ##### Parameters
   > | Nombre    | Tipo      | Tipo de dato                | Descripción                                   |
   > |-----------|-----------|-----------------------------|-----------------------------------------------|
   > | id        | requerido | cadena                      | ID del concesionario a actualizar              |
   > | body      | requerido | objeto (JSON o YAML)        | Datos actualizados del concesionario en formato JSON |

   ##### Responses
   > | Código HTTP | Content-Type                     | Respuesta                    |
   > |-------------|----------------------------------|------------------------------|
   > | `200`       | `application/json`               | `{"message":"ok"}`           |
   > | `404`       | `application/json`               | Concesionario no encontrado  |

   ##### Example cURL
   > ```bash
   > curl -X PUT -H "Content-Type: application/json" --data @concesionario_actualizado.json http://localhost:8080/concesionarios/1
   > ```

   </details>

5. **Borrar un solo concesionario por ID:**
   <details>
    <summary><code>DELETE</code> <code><b>/concesionarios/:id</b></code></summary>

   ##### Parameters
   > | Nombre    | Tipo      | Tipo de dato   | Descripción                                   |
   > |-----------|-----------|----------------|-----------------------------------------------|
   > | id        | requerido | cadena         | ID del concesionario a borrar                  |

   ##### Responses
   > | Código HTTP | Content-Type                     | Respuesta                    |
   > |-------------|----------------------------------|------------------------------|
   > | `200`       | `application/json`               | `{"message":"ok"}`           |
   > | `404`       | `application/json`               | Concesionario no encontrado  |

   ##### Example cURL
   > ```bash
   > curl -X DELETE http://localhost:8080/concesionarios/1
   > ```

   </details>

6. **Obtener todos los coches pertenecientes a un concesionario:**
   <details>
    <summary><code>GET</code> <code><b>/concesionarios/:id/coches</b></code></summary>

   ##### Parameters
   > | Nombre    | Tipo      | Tipo de dato   | Descripción                                   |
   > |-----------|-----------|----------------|-----------------------------------------------|
   > | id        | requerido | cadena         | ID del concesionario a obtener                |

   ##### Responses
   > | Código HTTP | Content-Type                     | Respuesta                    |
   > |-------------|----------------------------------|------------------------------|
   > | `200`       | `application/json`               | Lista de coches en formato JSON |
   > | `404`       | `application/json`               | Concesionario no encontrado  |

   ##### Example cURL
   > ```bash
   > curl -X GET http://localhost:8080/concesionarios/1/coches
   > ```

   </details>

7. **Añadir un nuevo coche perteneciente a un concesionario:**
   <details>
    <summary><code>POST</code> <code><b>/concesionarios/:id/coches</b></code></summary>

   ##### Parameters
   > | Nombre    | Tipo      | Tipo de dato                | Descripción                                   |
   > |-----------|-----------|-----------------------------|-----------------------------------------------|
   > | id        | requerido | cadena                      | ID del concesionario al que pertenece el coche |
   > | body      | requerido | objeto (JSON o YAML)        | Datos del nuevo coche en formato JSON          |

   ##### Responses
   > | Código HTTP | Content-Type                     | Respuesta                    |
   > |-------------|----------------------------------|------------------------------|
   > | `200`       | `application/json`               | `{"message":"ok"}`           |
   > | `404`       | `application/json`               | Concesionario no encontrado  |

   ##### Example cURL
   > ```bash
   > curl -X POST -H "Content-Type: application/json" --data @nuevo_coche.json http://localhost:8080/concesionarios/1/coches
   > ```

   </details>

8. **Obtener un solo coche de un concesionario por ID de concesionario y ID de coche:**
   <details>
    <summary><code>GET</code> <code><b>/concesionarios/:id/coches/:cocheId</b></code></summary>

   ##### Parameters
   > | Nombre    | Tipo      | Tipo de dato   | Descripción                                   |
   > |-----------|-----------|----------------|-----------------------------------------------|
   > | id        | requerido | cadena         | ID del concesionario a obtener                |
   > | cocheId   | requerido | cadena         | ID del coche a obtener                       |

   ##### Responses
   > | Código HTTP | Content-Type                     | Respuesta                    |
   > |-------------|----------------------------------|------------------------------|
   > | `200`       | `application/json`               | Coche en formato JSON        |
   > | `404`       | `application/json`               | Coche no encontrado           |

   ##### Example cURL
   > ```bash
   > curl -X GET http://localhost:8080/concesionarios/1/coches/0
   > ```

   </details>

9. **Actualizar un solo coche perteneciente a un concesionario por ID de concesionario y ID de coche:**
   <details>
    <summary><code>PUT</code> <code><b>/concesionarios/:id/coches/:cocheId</b></code></summary>

   ##### Parameters
   > | Nombre    | Tipo      | Tipo de dato                | Descripción                                   |
   > |-----------|-----------|-----------------------------|-----------------------------------------------|
   > | id        | requerido | cadena                      | ID del concesionario al que pertenece el coche |
   > | cocheId   | requerido | cadena                      | ID del coche a actualizar                    |
   > | body      | requerido | objeto (JSON o YAML)        | Datos actualizados del coche en formato JSON |

   ##### Responses
   > | Código HTTP | Content-Type                     | Respuesta                    |
   > |-------------|----------------------------------|------------------------------|
   > | `200`       | `application/json`               | `{"message":"ok"}`           |
   > | `404`       | `application/json`               | Coche no encontrado           |

   ##### Example cURL
   > ```bash
   > curl -X PUT -H "Content-Type: application/json" --data @coche_actualizado.json http://localhost:8080/concesionarios/1/coches/0
   > ```

   </details>

9. **Actualizar un solo coche perteneciente a un concesionario por ID de concesionario y ID de coche:**

   <details>
    <summary><code>DELETE</code> <code><b>/concesionarios/:id/coches/:cocheId</b></code></summary>

   ##### Parameters
   > | Nombre    | Tipo      | Tipo de dato   | Descripción                                   |
   > |-----------|-----------|----------------|-----------------------------------------------|
   > | id        | requerido | cadena         | ID del concesionario al que pertenece el coche |
   > | cocheId   | requerido | cadena         | ID del coche a borrar                        |

   ##### Responses
   > | Código HTTP | Content-Type                     | Respuesta                    |
   > |-------------|----------------------------------|------------------------------|
   > | `200`       | `application/json`               | `{"message":"ok"}`           |
   > | `404`       | `application/json`               | Coche no encontrado           |

   ##### Example cURL
   > ```bash
   > curl -X DELETE http://localhost:8080/concesionarios/1/coches/0
   > ```

   </details>




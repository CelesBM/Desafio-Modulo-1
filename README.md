Proyecto
Creación de una aplicación de películas, las cuales reciben argumentos a través de la terminal y se muestra el listado de las mismas basado en los argumentos pasados.

Arquitectura
  -index.js
    Recibe argumentos, los procesa y delega las acciones a pelis.js.
  -pelis.js
     Lee el archivo JSON y expone funciones para interactuar con los datos.
  pelis.json
    Collection de películas. 

Escenarios posibles
  -Sin parámetros
    La aplicación devuelve todas las películas.
  -Sort
    La aplicación ordena la salida en base a ese parámetro (por ejemplo, en orden alfabético basándose en su title). 
  -Search
    La aplicación devuelve las películas que tienen el texto del argumento (por ejemplo, las películas que tengan un determinado tag).
   -No Format
   La aplicación devuelve el JSON completo de la respuesta.
Todos los argumentos se pueden combinar.

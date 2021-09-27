const pelis = require("./pelis");

function parsearARGV(argv) {
  
  const respuesta = {};
  argv.forEach(function (item, ind) {
    if (item.startsWith("--")) {
      const propiedadSinGuiones = item.slice(2);
      respuesta[propiedadSinGuiones] = argv[ind + 1];
      }
  });
  return respuesta;
}


function main() {

  const comandosAEjecutar = parsearARGV(process.argv.slice(2));
  return console.table(pelis.searchByCriteria(comandosAEjecutar));
}

main();

const pelis = require("./pelis");

function parsearARGV() {

  return {
    search: "drama",
    sort: "rating",
  };
}

function main() {
  const comandosAEjecutar = parsearARGV(process.argv);

  pelis.searchByCriteria(comandosAEjecutar);
}

main();

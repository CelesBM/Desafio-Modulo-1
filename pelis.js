const fs = require ("fs");

const getAll = function(){
    
    const pelisJson = fs.readFileSync(__dirname + "/pelis.json");
    const pelisParseadas = JSON.parse(pelisJson);
    return pelisParseadas;
}

const searchByTitle = function(titulo, arrayDePelis) {

    arrayDePelis = getAll();
    const filtrarTitulo = arrayDePelis.filter(function(item){
        if(item.title.includes(titulo)){
        return item}
    })
    return filtrarTitulo; 
};
 
 const searchByTag = function(texto, arrayDePelis) {

    arrayDePelis = getAll();
    const filtrarTag = arrayDePelis.filter(function(item){
        if(item.tags.includes(texto)){
        return item;}
        })
    return filtrarTag;
};

    const sortBy = function (propiedad, arrayDePelis) {

    arrayDePelis = getAll();
        
    const sort = arrayDePelis.sort(function (a, b) {
    if (a[propiedad] > b[propiedad]) {
    return 1;
    }
    if (a[propiedad] < b[propiedad]) {
    return -1;
    }
    return 0;
  });
    return sort;
}

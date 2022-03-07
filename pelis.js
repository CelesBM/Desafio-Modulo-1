const fs = require ("fs");

const getAll = function(){
    const pelisJson = fs.readFileSync(__dirname + "/pelis.json");
    const pelisParseadas = JSON.parse(pelisJson);
    return pelisParseadas;
};

const searchByTitle = function(titulo, arrayDePelis) {
    const filtrarTitulo = arrayDePelis.filter(function(item){
        if(item.title.includes(titulo)){
        return item}
    })
    return filtrarTitulo; 
};
 
 const searchByTag = function(texto, arrayDePelis) {
    const filtrarTag = arrayDePelis.filter(function(item){
        if(item.tags.includes(texto)){
        return item;}
    })
    return filtrarTag;
};

const sortBy = function (propiedad, arrayDePelis) {
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

const noFormat = function(arrayDePelis) {   
    const arrayNoFormat = JSON.stringify(arrayDePelis);
    return arrayNoFormat;
}
      
exports.searchByCriteria = function (criterios) {           
    let tmp = getAll();        
    if (criterios.search) {
        tmp = searchByTitle(criterios.search, tmp);
    } else {
            }         
    if (criterios.tag) {
        tmp = searchByTag(criterios.tag, tmp);
    } else {
            }      
    if (criterios.sort) {
        tmp = sortBy(criterios.sort, tmp);
    } else {       
 }
    if (criterios.hasOwnProperty("no-format")) {
        tmp = noFormat(tmp);        
}
    return tmp;
};

const EGG = require("@ull-esit-pl-1920/p7-t3-egg-2-daviddvg7");

let topEnv = EGG.topEnv;
topEnv['hola'] = function() { console.log("hola");}
let specialForms = EGG.specialForms;
specialForms['adios'] = function () {console.log("adios")}

module.exports = {topEnv, specialForms}
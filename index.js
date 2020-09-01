const EGG = require("@ull-esit-pl-1920/p7-t3-egg-2-daviddvg7");

let topEnv = EGG.topEnv;
topEnv['hola'] = function() { print("hola");}
let specialForms = EGG.specialForms;
specialForms['adios'] = function () {print("adios")}

console.log(topEnv, specialForms);
module.exports = {topEnv, specialForms}
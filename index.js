const EGG = require("@ull-esit-pl-1920/p7-t3-egg-2-daviddvg7");

let topEnv = EGG.topEnv['hola'] = function() { print("hola");}
let specialForms = EGG.specialForms['adios'] = function () {print("adios")}

module.exports = {topEnv, specialForms}
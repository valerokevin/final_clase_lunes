const {Router} = require("express");
const enrutadorGeneral = Router()
const enrutadorPrueba = require("./pruebasRouters");

enrutadorGeneral.use("/rutaprueba", enrutadorPrueba);

module.exports = enrutadorGeneral;
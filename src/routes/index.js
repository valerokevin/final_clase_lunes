const {Router} = require("express");
const enrutadorGeneral = Router()
const enrutadorPrueba = require("./pruebasRouters");

const enrutadorAuth = require("./autenticarRouter");

enrutadorGeneral.use("/rutaprueba", enrutadorPrueba);
enrutadorGeneral.use("/autenticar", enrutadorAuth);

module.exports = enrutadorGeneral;
const {Router} = require("express");

const enrutadorPrueba = Router();

enrutadorPrueba.get("/rutaPersonal", (req, res) => {
    res.json({mensaje: "ruta prueba, funcionando" })
});

module.exports =  enrutadorPrueba
const { Router } = require("express");

const enrutadorAuth = Router();

const {
    iniciarSesion,
    registrarse
} = require("../controllers/autenticarController");

enrutadorAuth.post("/registro", registrarse);

enrutadorAuth.post("/login", iniciarSesion);

module.exports = enrutadorAuth;
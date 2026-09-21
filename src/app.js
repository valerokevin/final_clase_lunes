require("dotenv").config();
const express = require("express");
const enrutadorGeneral = require("./routes")

const app = express()

//imoprtar los middleword
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
//debemosn inportar los enrutadores 


//endpoint de la ruta raiz de bienbenida a la appi
app.use("/api", enrutadorGeneral)

app.get("/",(req, res) => {
    res.send("API 3407182")
})
module.exports = app;
const app = require("./app");

const PUERTO = process.env.MIPUERTO || 3000;

app.listen(PUERTO, () =>{
    console.log(`Servidor en funcionamiento en el puerto: http://localhost:3003`);
});

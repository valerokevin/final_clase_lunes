const jwtoken = require("jsonwebtoken");
const autenticacion = (req, res, next) => {
    const token = req.header("campoAutenticar")?.split(" ")[1] // Obtener el token del encabezado Authorization  
    if (!token) {
        return res.status(401).json({ error: "Aceso no autorizado" });
    }
    //verificar el tocken
    jwtoken.verify(token, process.env.JWT_SECRET_KEY, (error, usuario) => {
        if (error) {
            return res.status(403).json({ error: "Token inválido" });
        }
        req.usuario = usuario;
        next();
    });
};
module.exports = autenticacion
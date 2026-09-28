const iniciarSesion = async (req, res) => {

    const userBd = {
        usuario: "kevin",
        clave: "1234"
    };
    try {
        const { usuario, clave } = req.body;
        if (userBd.usuario !== usuario || userBd.clave !== clave) {
            return res.json({
                mensaje: "usuario o clave incorrecta"
            });
        }
        res.json({
            mensaje: "usuario y clave correctos"
        });
    } catch (error) {
        res.json({
            Error: error
        });
    }
};
const registrarse = async (req, res) => {
    try {
        const datos = req.body;
        res.json({
            datosRegistro: datos
        });
    } catch (error) {
        res.json({Error: error});
    }
};
module.exports = {iniciarSesion,registrarse};
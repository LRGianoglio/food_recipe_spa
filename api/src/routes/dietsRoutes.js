const {Router} = require("express");

const dietsRoutes = Router();

dietsRoutes.use("/", (req, res) => {
    res.send("NIY: LISTADO DE TIPOS DE DIETAS")
})

module.exports = dietsRoutes;
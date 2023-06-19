const {Router} = require("express");

const recipesRoute = Router();

recipesRoute.get("/", (req, res) =>{
    res.send("NIY: LISTADO DE RECIPES")
})

recipesRoute.get("/:idRecipe", (req, res) => {
    const {idRecipe} = req.params
    res.send("NIY: DETALLE DE LA RECETA " + idRecipe)
})

recipesRoute.post("/", (req, res) => {
    const {name, desc} = req.body;
    res.send("NIY: CREACION DE NUEVA RECETA: " + name + desc);
})


module.exports = recipesRoute;
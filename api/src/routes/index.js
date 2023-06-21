const { Router } = require('express');
const recipesRoutes = require("./recipesRoutes.js")
const dietsRoutes = require("./dietsRoutes.js")

const mainRouter = Router();

mainRouter.use("/recipes", recipesRoutes);
mainRouter.use("/diets", dietsRoutes);

module.exports = mainRouter;
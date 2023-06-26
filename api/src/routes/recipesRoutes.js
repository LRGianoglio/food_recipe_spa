const {Router} = require("express");

const {
    getRecipe,
    getRecipes,
    postRecipe
} = require("../handlers/recipeHandlers");

const recipesRoute = Router();



recipesRoute.get("/:idRecipe", getRecipe)

recipesRoute.get("/", getRecipes)

recipesRoute.post("/", postRecipe)


module.exports = recipesRoute;
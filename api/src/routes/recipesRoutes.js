const {Router} = require("express");

const {
    getRecipeById,
    getAllRecipes,
    postNewRecipe
} = require("../handlers/recipeHandlers");

const recipesRoute = Router();



recipesRoute.get("/:idRecipe", getRecipeById)

recipesRoute.get("/", getAllRecipes)

recipesRoute.post("/", postNewRecipe)


module.exports = recipesRoute;
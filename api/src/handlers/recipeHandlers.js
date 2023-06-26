const {createRecipe, getRecipeById, getRecipesByName, getAllRecipes} = require("../controllers/recipeControllers");
const {Op} = require("sequelize")

const getRecipe = async (req, res) =>{
    const {idRecipe} = req.params;
    const source = isNaN(idRecipe) ? "ddbb" : "api";
    try {
        const recipe = await getRecipeById(idRecipe, source);
        res.status(200).json(recipe);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

const getRecipes = async (req, res) =>{
    const {name} = req.query;
    try {
        const recipes =
            name
                ? await getRecipesByName (name)
                : await getAllRecipes
        res.status(200).json(recipes);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

const postRecipe = async (req, res) =>{
    const {name, img, description, health_score, step_by_step} = req.body;
    try {
        const newRecipe = await createRecipe(name, img, description, health_score, step_by_step);
        res.status(201).json(newRecipe);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = {
    getRecipe,
    getRecipes,
    postRecipe
}
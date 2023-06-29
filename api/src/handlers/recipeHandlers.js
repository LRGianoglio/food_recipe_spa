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
    console.log(name);
    try {
        const recipes =
            (typeof name === "undefined")
                ? await getAllRecipes()
                : await getRecipesByName (name)
        res.status(200).json(recipes);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

const postRecipe = async (req, res) =>{
    const {name, img, description, health_score, step_by_step, diets} = req.body;
    try {
        await createRecipe(name, img, description, health_score, step_by_step, diets);
        res.status(201).json({message: "Receta creada exitosamente!"});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = {
    getRecipe,
    getRecipes,
    postRecipe
}
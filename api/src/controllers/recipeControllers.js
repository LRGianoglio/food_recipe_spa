const {Recipe} = require ("../db")
const {Op} = require("sequelize");
const axios = require("axios");
const { recipeFormatter } = require("../helpers/recipeHelpers");
const { YOUR_API_KEY } = process.env;

const createRecipe = async (name, img, description, health_score, step_by_step) => 
    await Recipe.create({name, img, description, health_score, step_by_step});

const getRecipeById = async (id, source) =>{
    const recipe =
        source === "api"
            ? recipeFormatter(
                (await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${YOUR_API_KEY}`))
                .data)
            : await Recipe.findByPk(id);
    return recipe;
}

const getRecipesByName = async (name) => {
    // const database = await Recipe.findAll({
    //     where: {
    //         name: {
    //             [Op.iLike]: `%${name}%`
    //         }
    //     }});

    const database = await Recipe.findAll();

    const api = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch/?apiKey=${YOUR_API_KEY}`)).data.results
    const apiFormatted = api.map(recipe => recipeFormatter(recipe));

    const allRecipes = [...apiFormatted, ...database];

    const res = allRecipes.filter(recipe => recipe.name.toLowerCase().includes(name));

    return res;
}

const getAllRecipes = async () => {
    await Recipe.findAll();
}

module.exports = {
    createRecipe,
    getRecipeById,
    getRecipesByName,
    getAllRecipes
};
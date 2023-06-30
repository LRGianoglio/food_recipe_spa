const {Recipe, Diet} = require ("../db")
const {Op, where} = require("sequelize");
const axios = require("axios");
const { detailedRecipeFormatter, recipeFormatter } = require("../helpers/recipeHelpers");
const { YOUR_API_KEY } = process.env;

const createRecipe = async (name, img, description, health_score, step_by_step, diets) =>{
    const newRecipe = await Recipe.create({name, img, description, health_score, step_by_step});

    const dietInstances = await Diet.findAll({
        where: {
          name: {
            [Op.in]: diets,
          },
        },
    });

    await newRecipe.addDiets(dietInstances);
}

const getRecipeById = async (id, source) =>{
    const recipe =
        source === "api"
            ? detailedRecipeFormatter(
                (await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${YOUR_API_KEY}`))
                .data)
            : await Recipe.findByPk(id);
    return recipe;
}

const getRecipesByName = async (name) => {
    const databaseRecipe = await Recipe.findAll({
        attributes: ["id", "name", "img"],
        include: [Diet],
        raw: true,
        where: {[Op.iLike]: `%${name}%`}
    });

    const databaseRecipeWithDiets = databaseRecipe.map(recipe => ({
        id: recipe.id,
        name: recipe.name,
        img: recipe.img,
        diets: recipe.Diet.map(diet => diet.name)
    }));

    const api = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`)).data.results
        .filter(recipe => recipe.name.toLowerCase().includes(name.toLowerCase()))
        .map(recipe => recipeFormatter(recipe));

    return [...api, ...databaseRecipeWithDiets];
}

const getAllRecipes = async () => {
    const database = await Recipe.findAll({
        attributes: ["id", "name", "img"],
        raw: true
    });

    const api = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`)).data.results
        .map(recipe => recipeFormatter(recipe));

    return [...database, ...api]
}

module.exports = {
    createRecipe,
    getRecipeById,
    getRecipesByName,
    getAllRecipes
};
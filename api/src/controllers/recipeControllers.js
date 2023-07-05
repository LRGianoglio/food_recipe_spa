const {Recipe, Diet} = require ("../db")
const { Op, where } = require('sequelize');
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
            : await Recipe.findByPk(id, {
              include: [
                {
                  model: Diet,
                  attributes: ['name'],
                  through: { attributes: [] } //Esto es para que no incluya los datos de la tabla intermedia
                }
              ]
            });

    console.log(recipe);

    const formatedRecipe = {
      id: recipe.id,
      name: recipe.name,
      img: recipe.img,
      description: recipe.description,
      health_score: recipe.health_score,
      step_by_step: recipe.step_by_step,
      diets: recipe.Diets?.map(diet=>diet.name)
    }

    return formatedRecipe;
}

const getRecipesByName = async (name) => {
    const databaseRecipe = await Recipe.findAll({
        attributes: ["id", "name", "img", "health_score"],
        where:{
            name: {
                [Op.iLike]: `%${name}%`
              }
        },
        include: [
          {
            model: Diet,
            attributes: ['name'],
            through: { attributes: [] } //Esto es para que no incluya los datos de la tabla intermedia
          }
        ]
      })
    const databaseRecipeWithDiets = databaseRecipe.map(recipe => ({
        id: recipe.id,
        name: recipe.name,
        img: recipe.img,
        health_score: recipe.health_score,
        diets: recipe.Diets.map(diet => diet.name)
    }));

    const api = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`)).data.results
        .filter(recipe => recipe.title && recipe.title.toLowerCase().includes(name.toLowerCase()))
        .map(recipe => recipeFormatter(recipe))

    return [...api, ...databaseRecipeWithDiets];
}

const getAllRecipes = async () => {
    const databaseRecipe = await Recipe.findAll({
        attributes: ["id", "name", "img", "health_score"],
        include: [
          {
            model: Diet,
            attributes: ['name'],
            through: { attributes: [] } //Esto es para que no incluya los datos de la tabla intermedia
          }
        ]
      })

    const databaseRecipeWithDiets = databaseRecipe.map(recipe => ({
        id: recipe.id,
        name: recipe.name,
        img: recipe.img,
        health_score: recipe.health_score,
        diets: recipe.Diets.map(diet => diet.name)
    }));

    const api = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`)).data.results
        .map(recipe => recipeFormatter(recipe));

    return [...databaseRecipeWithDiets, ...api]
}

module.exports = {
    createRecipe,
    getRecipeById,
    getRecipesByName,
    getAllRecipes
};
const { default: axios } = require("axios");
const {Diet} = require("./src/db");
const {YOUR_API_KEY} = process.env;

const cargarDietsEnDDBB = async () => {
    try {
        const dietas = [];
        const recetas = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`)).data.results
            .map(receta => {
                receta.diets.forEach(diet =>{
                    if(!dietas.includes(diet)) dietas.push(diet)
                })
            })
        
        for (const dieta of dietas){
            await Diet.findOrCreate({
                where: { name: dieta }
            })
        }
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {cargarDietsEnDDBB};
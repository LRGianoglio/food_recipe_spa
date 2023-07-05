const {Diet} = require("../db");

const getDietNames = async () =>{
    const diets = await Diet.findAll();
    return diets.map(diet => diet.name);
}

module.exports = {
    getDietNames
};
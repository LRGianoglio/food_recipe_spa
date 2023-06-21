const getRecipeById = (req, res) =>{
    const {idRecipe} = req.params;
    res.send("RECIPE BY ID " + idRecipe)
};

const getAllRecipes = (req, res) =>{
    const {name} = req.query;
    if (name) res.send("Datos de recetas que coincidan con " + name);
    else res.send("Datos de todas las recetas")
};

const postNewRecipe = (req, res) =>{
    res.send("POSTING RECIPE")
};

module.exports = {
    getRecipeById,
    getAllRecipes,
    postNewRecipe
}
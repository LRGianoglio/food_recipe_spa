const detailedRecipeFormatter = (recipe) => {
    return {
        id: recipe.id,
        name: recipe.title,
        img: recipe.image,
        description: recipe.summary,
        health_score: recipe.healthScore,
        step_by_step: recipe.instructions,
        diets: recipe.diets,
        custom: false
    }
}

const recipeFormatter = (recipe) => {
    console.log(recipe)
    return {
        id: recipe.id,
        name: recipe.title,
        img: recipe.image,
        diets: recipe.diets
    }
}

module.exports = {
    recipeFormatter,
    detailedRecipeFormatter
}
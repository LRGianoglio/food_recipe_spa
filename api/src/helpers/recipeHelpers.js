const recipeFormatter = (recipe) => {
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

module.exports = {
    recipeFormatter
}
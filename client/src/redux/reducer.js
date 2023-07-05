import { GET_RECIPES, GET_DIETS, SEARCH_BY_NAME, FILTER_BY, ORDER_BY,} from "./types";

const initialState = {
    recipes: [],
    filteredRecipes: [],
    doubleFilteredRecipes: [],
    diets: []
}

const rootReducer = (state=initialState, action) =>{
    switch(action.type){
        case GET_RECIPES:
            return {...state, recipes: action.payload, filteredRecipes: action.payload};
        case GET_DIETS:
            return {...state, diets: action.payload};
        case SEARCH_BY_NAME:
            return {...state, filteredRecipes: action.payload, doubleFilteredRecipes:action.payload}
        case FILTER_BY:
            const {source, diets} = action.payload;
            const filtered = state.filteredRecipes
                .filter(recipe=> {
                    if (
                        (
                            source === "any" || 
                            (source === "api" && !isNaN(recipe.id)) || 
                            (source === "ddbb" && isNaN(recipe.id))) 
                        && diets.every(diet => recipe.diets && recipe.diets.includes(diet))
                      ) return recipe})
            return {...state, doubleFilteredRecipes: filtered}
        case ORDER_BY:
            const { by, form } = action.payload;
            let orderedRecipes = [...state.doubleFilteredRecipes];

            if (by === "alpha") {
                if (form === "az") {
                    orderedRecipes.sort((a, b) => (a.name < b.name ? -1 : 1));
                } else if (form === "za"){
                    orderedRecipes.sort((a, b) => (a.name < b.name ? 1 : -1));
                }
            } else {
                if (form === "higher"){
                    orderedRecipes.sort((a, b) => (b.health_score - a.health_score));
                } else if (form === "lower"){
                    orderedRecipes.sort((a, b) => (a.health_score - b.health_score));
                }
            }
            return {...state, doubleFilteredRecipes: orderedRecipes}
        default:
            return{...state};
    }
}

export default rootReducer;
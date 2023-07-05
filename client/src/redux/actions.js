import axios from "axios";
import {  GET_RECIPES, GET_DIETS, SEARCH_BY_NAME, FILTER_BY, ORDER_BY } from "./types";


const getRecipes = () => {
    return async function(dispatch) {
        try {
            const recipes = (await axios.get("http://localhost:3001/recipes")).data;
            dispatch({type: GET_RECIPES, payload: recipes});
        } catch (error) {
            alert(error.message)
        }
    }
}

const getDiets = () => {
    return async function(dispatch) {
        try {
            const diets = (await axios.get("http://localhost:3001/diets")).data;
            dispatch({type: GET_DIETS, payload: diets});
        } catch (error) {
            alert(error.message)
        }
    }
}

const searchByName = (name) =>{
    return async function(dispatch){
        let query = "";
        if (name) query = "?name=" + name;
        try {
            const recipes = (await axios.get(`http://localhost:3001/recipes${query}`)).data;
            dispatch({type: SEARCH_BY_NAME, payload: recipes});
        } catch (error) {
            alert(error.message)
        }
    }
}

const filterBy = (filter) =>{
    return function(dispatch){
        dispatch({type: FILTER_BY, payload: filter})
    }
}

const orderBy = (order) =>{
    return function(dispatch){
        dispatch({type: ORDER_BY, payload: order})
    }
}

export {
    getRecipes,
    getDiets,
    searchByName,
    orderBy,
    filterBy
}
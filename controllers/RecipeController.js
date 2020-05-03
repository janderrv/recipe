const axios = require('axios');


const url = "https://www.themealdb.com/api/json/v1/1/";

class RecipeController {
    getRecipeByLetter = async (letter) => {
        try {
            const response = await axios.get(url + 'search.php?f=' + letter);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
    getCategories = async () => {
        try {
            const response = await axios.get(url + 'categories.php');
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
    getByCategory = async (category) => {
        try {
            const response = await axios.get(url + 'filter.php?c=' + category);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
    getRecipeByName = async (name) => {
        try {
            const response = await axios.get(url + 'search.php?s=' + name);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
    getRecipeById = async (id) => {
        try {
            const response = await axios.get(url + 'lookup.php?i=' + id);
            return response.data.meals[0];
        } catch (error) {
            console.log(error);
        }
    }
    getRandomRecipe = async () => {
        let recipes = []
        try {
            for (let i = 0; i < 3; i++) {
                const response = await axios.get(url + 'random.php');
                recipes.push(response.data.meals[0]);
            }
            return recipes;
        } catch (error) {
            console.log(error);
        }
    }
    youtubeConverter = (link) => {
        let x = link.split("=");
        let youtube = "https://www.youtube.com/embed/" + x[1];
        return youtube;
    };
}

module.exports = new RecipeController();
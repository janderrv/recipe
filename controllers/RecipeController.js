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
            for (let i = 0; i < 9; i++) {
                const response = await axios.get(url + 'random.php');
                recipes.push(response.data.meals[0]);
            }
            return recipes;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new RecipeController();
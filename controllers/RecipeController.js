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

}

module.exports = new RecipeController();
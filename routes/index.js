const express = require('express');
const router = express.Router();
const RecipeController = require('../controllers/RecipeController');

/* GET home page. */
router.get('/', function (req, res, next) {
  getRecipe = async () => {
    let recipes = await RecipeController.getRandomRecipe();
    res.render('index', {
      title: 'Recipes',
      recipes
    })
  }
  getRecipe();
});

router.get('/letter/:id', function (req, res, next) {
  let id = req.params.id;

  getByLetter = async () => {
    try {
      let response = await RecipeController.getRecipeByLetter(id);
      res.json(response.meals);
    } catch (error) {}
  }
  getByLetter();
});
router.get('/id/:id', function (req, res, next) {
  let id = req.params.id;

  getByLetter = async () => {
    try {
      let response = await RecipeController.getRecipeById(id);
      res.json(response);
    } catch (error) {}
  }
  getByLetter();
});


module.exports = router;
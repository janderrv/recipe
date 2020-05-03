const express = require('express');
const router = express.Router();
const RecipeController = require('../controllers/RecipeController');

/* GET home page. */
router.get('/', function (req, res, next) {
  getRecipe = async () => {
    let recipes = await RecipeController.getRandomRecipe();
    res.render('index', {
      title: 'Home - Recipes',
      recipes,
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
    } catch (error) { }
  }
  getByLetter();
});
router.get('/id/:id', function (req, res, next) {
  let id = req.params.id;

  getById = async () => {
    try {
      let recipe = await RecipeController.getRecipeById(id);
      let ingredients = [recipe.strIngredient1, recipe.strIngredient2,
      recipe.strIngredient3, recipe.strIngredient4, recipe.strIngredient5,
      recipe.strIngredient6, recipe.strIngredient7, recipe.strIngredient8,
      recipe.strIngredient9, recipe.strIngredient10, recipe.strIngredient11,
      recipe.strIngredient12, recipe.strIngredient13, recipe.strIngredient14,
      recipe.strIngredient15, recipe.strIngredient16, recipe.strIngredient17,
      recipe.strIngredient18, recipe.strIngredient19, recipe.strIngredient20
      ];
      let youtube = RecipeController.youtubeConverter(recipe.strYoutube);
      res.render('recipe', {
        title: recipe.strMeal + ' - Recipes',
        recipe,
        ingredients,
        youtube
      });
    } catch (error) { }
  }
  getById();
});

router.get('/search', (req, res) => {
  let search = req.query.search;
  getRecipeByName = async () => {
    let response = await RecipeController.getRecipeByName(search);
    let recipes = response.meals;
    res.render('search', {
      title: "Busca: " + search + " - Recipes",
      recipes,
      search
    })

  }
  getRecipeByName();
});

router.get('/categories', (req, res) => {
  getCategories = async () => {
    let response = await RecipeController.getCategories();
    let categories = response.categories;
    res.render('categories', { title: 'Categories - Recipes', categories })
  };
  getCategories();
});

router.get('/category/:category', function (req, res, next) {
  let category = req.params.category;

  getByCategory = async () => {
    try {
      let response = await RecipeController.getByCategory(category);
      let recipes = response.meals;
      res.render('category', { title: category + ' - Recipes', recipes })
    } catch (error) { }
  }
  getByCategory();
});


module.exports = router;
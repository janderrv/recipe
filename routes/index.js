var express = require('express');
var router = express.Router();
const RecipeController = require('../controllers/RecipeController');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/letter/:id', function (req, res, next) {
  let id = req.params.id;

  getByLetter = async () => {
    let response = await RecipeController.getRecipeByLetter(id);
    res.json(response.meals);
  }
  getByLetter();
});

module.exports = router;
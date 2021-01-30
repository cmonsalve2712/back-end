const express = require("express");
const router = express.Router();

const Recipe = require("./recipe-model");

router.post("/", (req, res) => {
  Recipe.add(req.body)
    .then((recipe) => {
      if (recipe.recipe_private == 0) {
        recipe.recipe_private = false;
      } else if (recipe.recipe_private == 1) {
        recipe.recipe_private = true;
      }
      res.status(201).json(recipe);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

router.get("/", async (req, res) => {
  try {
    const data = await Recipe.getRecipes();
    res.json(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.get("/:id", (req, res) => {
  Recipe.findById(req.params.id)
    .then((recipe) => {
      res.status(200).json(recipe);
    })
    .catch((err) => {
      res.status(500).json({ eror: err.message });
    });
});

router.get("/:id/shoppingList", async (req, res) => {
  const { id } = req.params;

  Recipe.getShoppingList(id)
    .then((ingredients) => {
      if (ingredients.length) {
        res.json(ingredients);
      } else {
        res
          .status(404)
          .json({ message: "Could not find ingredients for given recipe" });
      }
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

router.get("/:id/instructions", (req, res) => {
  const { id } = req.params;

  Recipe.getInstructions(id)
    .then((instructions) => {
      if (instructions.length) {
        res.json(instructions);
      } else {
        res
          .status(404)
          .json({ message: "Could not find instrutions for given recipe " });
      }
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

router.put("/:id", (req, res) => {
  Recipe.edit(req.params.id, req.body)
    .then((editedRecipe) => {
      res.status(200).json(editedRecipe);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Recipe.remove(id)
    .then(() => {
      res.status(200).json({ message: `Recipe ${id} has been removed` });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;

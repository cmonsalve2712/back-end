const db = require("../../data/dbConfig");

module.exports = {
  add(recipe) {
    return db("recipes")
      .insert(recipe)
      .then(([id]) => {
        return db("recipes").where("id", id).first();
      });
  },

  getRecipes() {
    return db("recipes");
  },

  getShoppingList(id) {
    return db("ingredients as i")
      .join("step_ingredients as si", "i.ingredient_id", "si.ingredient_id")
      .join("steps as s", "si.step_id", "s.step_id")
      .select("i.ingredient_name", "si.ingredient_quantity")
      .where("s.recipe_id", id);
  },

  getInstructions(id) {
    return db("steps")
      .select("step_text", "step_order")
      .where("recipe_id", id)
      .orderBy("step_order");
  },

  remove(id) {
    return db("recipes").where({ id }).del();
  },

  edit(id, changes) {
    return db("recipes").where({ id }).update(changes);
  },

  getById(id) {
    return db("recipes").where({ id }).first;
  },
};

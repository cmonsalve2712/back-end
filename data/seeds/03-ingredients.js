exports.seed = function (knex) {
  return knex("ingredients")
    .truncate()
    .then(function () {
      return knex("ingredients").insert([
        { ingredient_name: "Noodles" },
        { ingredient_name: "Sauce" },
        { ingredient_name: "Cheese" },
        { ingredient_name: "Dough" },
        { ingredient_name: "Water" },
        { ingredient_name: "Pepperoni" },
        { ingredient_name: "Chicken" },
        { ingredient_name: "Garlic" },
      ]);
    });
};

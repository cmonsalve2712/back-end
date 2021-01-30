exports.seed = function (knex) {
  return knex("steps")
    .truncate()
    .then(function () {
      return knex("steps").insert([
        {
          step_text: "Boil Noodles",
          step_order: 1,
          recipe_id: 1,
        },
        {
          step_text: "Drain Noodles",
          step_order: 2,
          recipe_id: 1,
        },
        {
          step_text: "Add Sauce",
          step_order: 3,
          recipe_id: 1,
        },
        {
          step_text: "Add Cheese",
          step_order: 4,
          recipe_id: 1,
        },
        {
          step_text: "Mix on Plate",
          step_order: 5,
          recipe_id: 1,
        },
        {
          step_text: "Roll Dough",
          step_order: 1,
          recipe_id: 2,
        },
        {
          step_text: "Add Cheese",
          step_order: 2,
          recipe_id: 2,
        },
        {
          step_text: "Add Pepperoni and Bake",
          step_order: 3,
          recipe_id: 2,
        },
        {
          step_text: "Boil Noodles",
          step_order: 1,
          recipe_id: 3,
        },
        {
          step_text: "Bake Chicken",
          step_order: 2,
          recipe_id: 3,
        },
        {
          step_text: "Place Chicken on top of Noodles",
          step_order: 3,
          recipe_id: 3,
        },
      ]);
    });
};

exports.seed = function (knex) {
  return knex("step_ingredients")
    .truncate()
    .then(function () {
      return knex("step_ingredients").insert([
        {
          step_id: 1,
          ingredient_id: 1,
          ingredient_quantity: 1,
        },
        {
          step_id: 2,
          ingredient_id: 1,
          ingredient_quantity: 1,
        },
        {
          step_id: 3,
          ingredient_id: 2,
          ingredient_quantity: 1,
        },
        {
          step_id: 4,
          ingredient_id: 3,
          ingredient_quantity: 1,
        },
        {
          step_id: 5,
          ingredient_id: 4,
          ingredient_quantity: 1,
        },
        {
          step_id: 6,
          ingredient_id: 4,
          ingredient_quantity: 1,
        },
        {
          step_id: 7,
          ingredient_id: 3,
          ingredient_quantity: 1,
        },
        {
          step_id: 8,
          ingredient_id: 6,
          ingredient_quantity: 1,
        },
        {
          step_id: 9,
          ingredient_id: 1,
          ingredient_quantity: 1,
        },
        {
          step_id: 10,
          ingredient_id: 7,
          ingredient_quantity: 3,
        },
        {
          step_id: 11,
          ingredient_id: 7,
          ingredient_quantity: 3,
        },
      ]);
    });
};

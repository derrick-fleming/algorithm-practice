function groupingDishes(dishes: string[][]): string[][] {

  const ingredients = {};

  for (const dish of dishes) {
    const [mainDish, ...dishIngredients] = dish;
    for (const ingredient of dishIngredients) {
      if (ingredients.hasOwnProperty(ingredient)) {
        ingredients[ingredient].push(mainDish);
      } else {
        ingredients[ingredient] = [mainDish];
      }
    }
  }

  for (const key in ingredients) {
    ingredients[key].sort();
  }

  const sortedIngredients = Object.keys(ingredients).sort();

  const menu = sortedIngredients.filter(ingredient => ingredients[ingredient].length >= 2).map(ingredient => [ingredient, ...ingredients[ingredient]]);

  return menu;

}

function initialDraft(dishes: string[][]): string[][] {

  const ingredients = new Map();


  dishes.forEach((dish) => {
    const mainDish = dish[0];
    for (let i = 1; i < dish.length; i++) {
      if (ingredients.has(dish[i])) {
        ingredients.get(dish[i]).push(mainDish)
      } else {
        ingredients.set(dish[i], [mainDish]);
      }
    }

  })

  const menu = [];

  ingredients.forEach((dishes, ingredient) => {
    if (dishes.length >= 2) {
      dishes.sort();
      const list = [ingredient, ...dishes];
      menu.push(list);
    }
  })

  menu.sort()

  return menu;

}

interface MealPrototype {
  name: string;
  price: number;
  ingredients: string[];
  getMeal(): void;

  clone(): MealPrototype;
}

class Meal implements MealPrototype {
  public name: string;
  public price: number;
  public ingredients: string[];

  constructor(name: string, price: number, ingredients: string[]) {
    this.name = name;
    this.price = price;
    this.ingredients = ingredients;
  }

  getMeal() {
    console.log({
      name: this.name,
      price: this.price,
      ingredients: this.ingredients,
    });
  }

  public clone(): MealPrototype {
    return new Meal(this.name, this.price, this.ingredients);
  }
}

const originalMeal = new Meal("Chicken Curry", 12, [
  "Chicken",
  "Curry Sauce",
  "Rice",
]);
const clonedMeal = originalMeal.clone();
clonedMeal.price = 23;

originalMeal.getMeal();
clonedMeal.getMeal();

# Prototype Design Pattern

The Prototype design pattern is a creational design pattern that allows objects to be cloned or copied. It is used when creating new objects by copying existing objects is more convenient or efficient than creating them from scratch.

<hr>

## Implementation

```typescript
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
```

<hr>

## Description

Let's break down the code module by module and explain how it implements the Prototype design pattern:

1. Prototype Interface (`MealPrototype`):

   - It defines the interface for the prototype objects. In this case, it includes properties `name`, `price`, `ingredients`, and a method `getMeal()`.
   - The `clone()` method is also declared in this interface, which ensures that all concrete prototypes implement this method.

2. Concrete Prototype (`Meal`):

   - The `Meal` class implements the `MealPrototype` interface and provides the concrete implementation for the prototype objects.
   - It has properties `name`, `price`, and `ingredients`, which represent the name, price, and ingredients of a meal.
   - The constructor initializes these properties with the provided values.
   - The `getMeal()` method prints the details of the meal to the console.
   - The `clone()` method creates a new instance of the `Meal` object with the same values for the name, price, and ingredients. This allows the cloning of meals to create new instances.

3. Creating and Using Prototype Objects:
   - The code creates an original meal using the `Meal` class, with the name "Chicken Curry", a price of 12, and an array of ingredients.
   - The `clone()` method is called on the original meal to create a cloned meal, which is assigned to the `clonedMeal` variable.
   - The price of the cloned meal is modified to 23.
   - The `getMeal()` method is called on both the original meal and the cloned meal, which prints their respective details to the console.

When the code is executed, it first creates the original meal and clones it. The cloned meal is then modified by changing its price. Finally, the details of both the original meal and the cloned meal are printed to the console.

The output of the code will be:

```
{ name: 'Chicken Curry', price: 12, ingredients: [ 'Chicken', 'Curry Sauce', 'Rice' ] }
{ name: 'Chicken Curry', price: 23, ingredients: [ 'Chicken', 'Curry Sauce', 'Rice' ] }
```

This demonstrates that the cloned meal is a separate object from the original meal. Modifying the price of the cloned meal does not affect the price of the original meal.

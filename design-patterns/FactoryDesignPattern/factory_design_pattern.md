# Factory Design Pattern

The Factory design pattern is a creational design pattern that provides a way to create objects without specifying their concrete classes directly. Instead, it delegates the object creation to a separate factory class, which is responsible for creating the appropriate objects based on certain conditions or parameters.

<hr>

## Implementation

```JavaScript
interface Car {
  model: string;
  fuelType: string;
  dateOfProduction: number;
  color: string;
  speedUp: () => void;
  slowDown: () => void;
}

class Sedan implements Car {
  model: string;
  fuelType: string;
  dateOfProduction: number;
  color: string;

  constructor(
    model: string,
    fuelType: string,
    dateOfProduction: number,
    color: string
  ) {
    this.model = model;
    this.fuelType = fuelType;
    this.dateOfProduction = dateOfProduction;
    this.color = color;
  }

  speedUp() {
    console.log("SEDAN speeding up!");
  }

  slowDown() {
    console.log("SEDAN slowing down!");
  }
}

class SUV implements Car {
  model: string;
  fuelType: string;
  dateOfProduction: number;
  color: string;

  constructor(
    model: string,
    fuelType: string,
    dateOfProduction: number,
    color: string
  ) {
    this.model = model;
    this.fuelType = fuelType;
    this.dateOfProduction = dateOfProduction;
    this.color = color;
  }

  speedUp() {
    console.log("SUV speeding up!");
  }

  slowDown() {
    console.log("SUV slowing down!");
  }
}

class CarFactory {
  static produceCar(
    model: string,
    dateOfProduction: number,
    fuelType: string,
    color: string
  ): Car {
    if (model === "Sedan") {
      return new Sedan(model, fuelType, dateOfProduction, color);
    } else if (model === "SUV") {
      return new SUV(model, fuelType, dateOfProduction, color);
    } else {
      throw new Error("Invalid car model!");
    }
  }
}

const sedan = CarFactory.produceCar("Sedan", 2023, "Diesel", "red");
sedan.slowDown();
// Output: Sedan slowing down!

const suv = CarFactory.produceCar("SUV", 2022, "Electric", "black");
suv.slowDown();
// Output: SUV slowing down!


```

<hr>

## Description

1. **Car Interface:**

   - The `Car` interface defines the structure that all car objects should adhere to. It includes properties like `model`, `fuelType`, `dateOfProduction`, and `color`, as well as methods such as `speedUp()` and `slowDown()`. This interface serves as a contract that the `Sedan` and `SUV` classes must implement.

2. **Sedan Class:**

   - The `Sedan` class is a concrete implementation of the `Car` interface.
   - It has properties (`model`, `fuelType`, `dateOfProduction`, `color`) that are initialized through its constructor.
   - The `speedUp()` method of the `Sedan` class is implemented to log a message indicating that the sedan is speeding up.
   - The `slowDown()` method of the `Sedan` class is implemented to log a message indicating that the sedan is slowing down.

3. **SUV Class:**

   - The `SUV` class is another concrete implementation of the `Car` interface.
   - It has properties (`model`, `fuelType`, `dateOfProduction`, `color`) that are initialized through its constructor.
   - The `speedUp()` method of the `SUV` class is implemented to log a message indicating that the SUV is speeding up.
   - The `slowDown()` method of the `SUV` class is implemented to log a message indicating that the SUV is slowing down.

4. **CarFactory Class:**

   - The `CarFactory` class acts as a factory for creating car objects.
   - It has a static method called `produceCar()` that takes in parameters such as `model`, `dateOfProduction`, `fuelType`, and `color`.
   - Inside the `produceCar()` method, it checks the value of the `model` parameter to determine which type of car to create.
   - If the `model` is "Sedan", it creates and returns a new instance of the `Sedan` class with the provided arguments.
   - If the `model` is "SUV", it creates and returns a new instance of the `SUV` class with the provided arguments.
   - If an invalid `model` value is provided, it throws an error.

5. **Creating Sedan and SUV Objects:**

   - The code uses the `CarFactory` class to create instances of `sedan` and `suv` objects.
   - It calls the static method `produceCar()` on the `CarFactory` class with the appropriate arguments to create the desired car objects.
   - The `produceCar()` method internally decides which type of car to create based on the `model` parameter.
   - The `sedan` and `suv` objects are assigned the returned car instances.

6. **Invoking Methods on Car Objects:**
   - The code invokes the `slowDown()` method on both the `sedan` and `suv` objects.
   - The `slowDown()` method of the respective car objects is called, and it logs a message indicating that the car is slowing down.

In summary, the code demonstrates the Factory design pattern by providing a central `CarFactory` class responsible for creating different types of car objects (`Sedan` and `SUV`). The `CarFactory` class encapsulates the object creation logic and allows clients to create car instances without being aware of the specific car classes. The created car objects adhere to the common `Car` interface, providing a unified way to interact with different car types.

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

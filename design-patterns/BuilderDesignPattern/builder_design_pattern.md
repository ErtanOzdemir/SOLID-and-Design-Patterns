# Builder Design Pattern

The main idea behind the Builder pattern is to separate the construction of an object from its representation. By doing so, the same construction process can be used to create different representations of an object. This pattern is useful when there are multiple steps involved in creating an object, and the order of those steps may vary.

<hr>

## Implentation

```TypeScript
class House {
  private foundation!: string;
  private structure!: string;
  private roof!: string;
  private interior!: string;

  setFoundation(foundation: string) {
    this.foundation = foundation;
  }

  setStructure(structure: string) {
    this.structure = structure;
  }

  setRoof(roof: string) {
    this.roof = roof;
  }

  setInterior(interior: string) {
    this.interior = interior;
  }

  getDetails() {
    return JSON.stringify({
      foundation: this.foundation,
      structure: this.structure,
      roof: this.roof,
      interior: this.interior,
    });
  }
}

class HouseBuilder {
  private house: House;

  constructor() {
    this.house = new House();
  }

  setFoundation(foundation: string) {
    this.house.setFoundation(foundation);
    return this;
  }

  setStructure(structure: string) {
    this.house.setStructure(structure);
    return this;
  }

  setRoof(roof: string) {
    this.house.setRoof(roof);
    return this;
  }

  setInterior(interior: string) {
    this.house.setInterior(interior);
    return this;
  }

  getHouse() {
    return this.house;
  }
}

const houseBuilder = new HouseBuilder();

const newHouse = houseBuilder
  .setFoundation("Concrete")
  .setInterior("Modern")
  .setStructure("Brick")
  .getHouse();

console.log(newHouse.getDetails());

```

<hr>

## Description

**Module 1: House**

The `House` class represents the product being constructed. It has private attributes for the foundation, structure, roof, and interior of the house. The class provides setter methods (`setFoundation`, `setStructure`, `setRoof`, `setInterior`) to set the values of these attributes.

```TypeScript
class House {
  private foundation!: string;
  private structure!: string;
  private roof!: string;
  private interior!: string;

  setFoundation(foundation: string) {
    this.foundation = foundation;
  }

  setStructure(structure: string) {
    this.structure = structure;
  }

  setRoof(roof: string) {
    this.roof = roof;
  }

  setInterior(interior: string) {
    this.interior = interior;
  }

  getDetails() {
    return JSON.stringify({
      foundation: this.foundation,
      structure: this.structure,
      roof: this.roof,
      interior: this.interior,
    });
  }
}
```

**Module 2: HouseBuilder**

The `HouseBuilder` class serves as the concrete builder in the Builder pattern. It has a private instance of the `House` class and initializes it in its constructor. The class provides setter methods (`setFoundation`, `setStructure`, `setRoof`, `setInterior`) to set the attributes of the `House` object. Each setter method returns the current instance of the `HouseBuilder` to enable method chaining. The `getHouse` method returns the constructed `House` object.

```TypeScript
class HouseBuilder {
  private house: House;

  constructor() {
    this.house = new House();
  }

  setFoundation(foundation: string) {
    this.house.setFoundation(foundation);
    return this;
  }

  setStructure(structure: string) {
    this.house.setStructure(structure);
    return this;
  }

  setRoof(roof: string) {
    this.house.setRoof(roof);
    return this;
  }

  setInterior(interior: string) {
    this.house.setInterior(interior);
    return this;
  }

  getHouse() {
    return this.house;
  }
}
```

**Module 3: Main Code**

In the main code, a new instance of `HouseBuilder` is created: `const houseBuilder = new HouseBuilder();`.

The `HouseBuilder` object is then used to construct a `newHouse` by sequentially calling the setter methods and chaining them together:

```TypeScript
const newHouse = houseBuilder
  .setFoundation("Concrete")
  .setInterior("Modern")
  .setStructure("Brick")
  .setRoof("Wood")
  .getHouse();
```

Finally, `console.log(newHouse.getDetails());` prints the details of the constructed house.

By using the Builder pattern, the construction process of a `House` object is separated from the `House` class itself. The `HouseBuilder` class provides a fluent and flexible way to construct a `House` object by setting its attributes step by step. Method chaining allows for concise and readable code when configuring the house.

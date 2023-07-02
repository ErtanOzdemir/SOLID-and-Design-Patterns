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
  .setRoof("Wood")
  .getHouse();

console.log(newHouse.getDetails());

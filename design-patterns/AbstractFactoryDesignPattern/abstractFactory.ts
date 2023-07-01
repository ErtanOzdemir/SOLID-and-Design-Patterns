interface Chair {
  sit: () => void;
}

class VictorianChair implements Chair {
  sit() {
    console.log("Sitting on Victorian Chair");
  }
}

class ModernChair implements Chair {
  sit() {
    console.log("Sitting on Modern Chair");
  }
}

interface Sofa {
  sit: () => void;
}

class VictorianSofa implements Sofa {
  sit() {
    console.log("Sitting on Victorian Sofa");
  }
}

class ModernSofa implements Sofa {
  sit() {
    console.log("Sitting on Modern Sofa");
  }
}

interface FurnitureFactory {
  produceChair: () => Chair;
  produceSofa: () => Sofa;
}

class VictorianFurnitureFactory implements FurnitureFactory {
  produceChair() {
    return new VictorianChair();
  }
  produceSofa() {
    return new VictorianSofa();
  }
}

class ModernFurnitureFactory implements FurnitureFactory {
  produceChair() {
    return new ModernChair();
  }
  produceSofa() {
    return new ModernSofa();
  }
}

function createFurniture(factory: FurnitureFactory) {
  const chair = factory.produceChair();
  const sofa = factory.produceSofa();

  chair.sit();
  sofa.sit();
}

const victorianFactory = new VictorianFurnitureFactory();
createFurniture(victorianFactory);

const modernFactory = new ModernFurnitureFactory();
createFurniture(modernFactory);

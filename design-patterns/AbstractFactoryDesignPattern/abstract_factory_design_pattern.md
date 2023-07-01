# Abstract Factory Design Pattern

The Abstract Factory design pattern is a creational pattern that allows the creation of families of related or dependent objects through an interface, without directly specifying their concrete classes. This pattern is suitable when there is a requirement to create multiple objects that are part of the same family or have interdependencies between them.

The primary objective of the Abstract Factory pattern is to provide a mechanism to build objects that are interoperable and adhere to a common interface while also encapsulating the object generation process. This technique encourages loose coupling and flexibility by allowing client programs to build objects without being aware of their concrete kinds.

<hr>

## Implementation

```TypeScript
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

```

<hr>

## Description

1. **Chair Interface**

   - The `Chair` interface defines the common methods that all chair implementations should have.
   - It includes a single method `sit()` that represents sitting on a chair.

2. **VictorianChair and ModernChair**

   - These are concrete implementations of the `Chair` interface.
   - The `VictorianChair` class provides the specific implementation of the `sit()` method for a Victorian-style chair.
   - The `ModernChair` class provides the specific implementation of the `sit()` method for a modern-style chair.

3. **Sofa Interface**

   - The `Sofa` interface defines the common methods that all sofa implementations should have.
   - It includes a single method `sit()` that represents sitting on a sofa.

4. **VictorianSofa and ModernSofa**

   - These are concrete implementations of the `Sofa` interface.
   - The `VictorianSofa` class provides the specific implementation of the `sit()` method for a Victorian-style sofa.
   - The `ModernSofa` class provides the specific implementation of the `sit()` method for a modern-style sofa.

5. **FurnitureFactory Interface**

   - The `FurnitureFactory` interface defines the common methods that all furniture factories should have.
   - It includes two methods: `produceChair()` and `produceSofa()`.
   - The `produceChair()` method is responsible for creating a `Chair` object.
   - The `produceSofa()` method is responsible for creating a `Sofa` object.

6. **VictorianFurnitureFactory and ModernFurnitureFactory**

   - These are concrete implementations of the `FurnitureFactory` interface.
   - The `VictorianFurnitureFactory` class provides the specific implementation for creating Victorian-style chairs and sofas.
   - The `ModernFurnitureFactory` class provides the specific implementation for creating modern-style chairs and sofas.
   - Each factory class implements the `produceChair()` and `produceSofa()` methods, returning instances of the respective chair and sofa classes.

7. **createFurniture Function**

   - The `createFurniture()` function takes a `FurnitureFactory` object as an argument.
   - It uses the factory to create a chair and a sofa by calling the `produceChair()` and `produceSofa()` methods.
   - Finally, it calls the `sit()` method on the created chair and sofa objects, simulating sitting on the furniture.

8. **Creating Instances and Invoking createFurniture**
   - The code creates an instance of `VictorianFurnitureFactory` and `ModernFurnitureFactory`.
   - It then invokes the `createFurniture()` function with each factory object.
   - This demonstrates how the abstract factory pattern allows the creation of different furniture styles (Victorian and modern) using the same `createFurniture()` function, without explicitly specifying the concrete types.

In summary, the code is organized into modules, with each module responsible for a specific part of the abstract factory pattern implementation. The interfaces define the common methods that the concrete classes must implement, and the factory classes provide the concrete implementations for creating different types of chairs and sofas. The `createFurniture()` function acts as the client code that uses the factories to create furniture objects.

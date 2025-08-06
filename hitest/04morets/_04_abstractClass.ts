abstract class Animal {
    constructor(public name: string) {}

    // Abstract method (must be implemented by subclasses)
    abstract makeSound(): void;

    // Regular method
    move(): void {
        console.log(`${this.name} is moving.`);
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Woof! Woof!");
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log("Meow!");
    }
}

// Usage:
const dog = new Dog("Buddy");
dog.makeSound(); // Output: Woof! Woof!
dog.move();      // Output: Buddy is moving.

const cat = new Cat("Whiskers");
cat.makeSound(); // Output: Meow!
cat.move();      // Output: Whiskers is moving.
interface Vehicle {
    brand: string;
    model: string;
    year: number;
    start(): void;
    stop(): void;
}

class Car implements Vehicle {
    constructor(
        public brand: string,
        public model: string,
        public year: number
    ) {}

    start(): void {
        console.log(`${this.brand} ${this.model} is starting...`);
    }

    stop(): void {
        console.log(`${this.brand} ${this.model} is stopping...`);
    }
}

// Usage:
const myCar = new Car("Toyota", "Camry", 2020);
myCar.start(); // Output: Toyota Camry is starting...
myCar.stop();  // Output: Toyota Camry is stopping...
// Generic function
function identity<T>(arg: T): T {
    return arg;
}

// Generic class
class Box<T> {
    private content: T;

    constructor(value: T) {
        this.content = value;
    }

    getValue(): T {
        return this.content;
    }

    setValue(value: T): void {
        this.content = value;
    }
}

// Usage:
const numberBox = new Box<number>(123);
console.log(numberBox.getValue()); // Output: 123

const stringBox = new Box<string>("Hello");
console.log(stringBox.getValue()); // Output: Hello

// Generic function usage
const result1 = identity<string>("Hello");
const result2 = identity<number>(42);
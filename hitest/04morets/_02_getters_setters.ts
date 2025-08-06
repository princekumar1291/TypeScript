class Employee {
    private _salary: number;

    constructor(salary: number) {
        this._salary = salary;
    }

    // Getter for salary
    public get salary(): number {
        return this._salary;
    }

    // Setter for salary
    public set salary(amount: number) {
        if (amount < 0) {
            throw new Error("Salary cannot be negative.");
        }
        this._salary = amount;
    }
}

// Usage:
const emp = new Employee(5000);
console.log(emp.salary); // Uses the getter, Output: 5000

emp.salary = 6000;       // Uses the setter
console.log(emp.salary); // Output: 6000

// emp.salary = -1000;   // Throws error: Salary cannot be negative.
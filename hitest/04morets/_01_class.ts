class BankAccount {
    public accountNumber: string;
    private balance: number;
    private pin: string;

    constructor(accountNumber: string, initialBalance: number, pin: string) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.pin = pin;
    }

    public deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Invalid deposit amount.");
        }
    }

    public withdraw(amount: number, inputPin: string): void {
        if (inputPin !== this.pin) {
            console.log("Incorrect PIN.");
            return;
        }
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Invalid withdrawal amount or insufficient funds.");
        }
    }

    public getBalance(): number {
        return this.balance;
    }

    private validatePin(inputPin: string): boolean {
        return inputPin === this.pin;
    }
}

// Usage:
const account = new BankAccount("123456789", 1000, "1234");
console.log(account.accountNumber); // Public property - accessible
// console.log(account.balance); // Error: 'balance' is private
account.deposit(500);
account.withdraw(200, "1234");
console.log(account.getBalance()); // Output: 1300
"use strict";
class Device {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
}
let d1 = new Device("Laptop", 50000, "Electronics");
let d2 = new Device("Mobile", 10000, "Electronics");
console.log(d1, d2);
class BottleMacker {
    constructor(name, price, color) {
        this.name = name;
        this.price = price;
        this.color = color;
    }
}
let b1 = new BottleMacker("Macker", 100, "Red");
let b2 = new BottleMacker("Macker", 100, "Red");
console.log(b1, b2);
//Access Modifiers
class BookMaker {
    constructor(name, price, color) {
        this.name = name;
        this.price = price;
        this.color = color;
    }
}
let book1 = new BookMaker("Book1", 100, "Red");
book1.name = "Book2";
// book1.price=200;  //Error beacuse price is private
// book1.color="White";  //Error beacuse color is protected
console.log(book1);
//readonly
class BottleMacker2 {
    constructor(name, price, color) {
        this.name = name;
        this.price = price;
        this.color = color;
    }
}
let b21 = new BottleMacker2("Macker", 100, "Red");
console.log(b21);
//getter and setter
class BookMaker3 {
    constructor(_name) {
        this._name = _name;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
}
let book3 = new BookMaker3("Book1");
book1.name = "Book2";
console.log(book1);
console.log(book3.name);
//static property and method
class BottleMacker4 {
    static getRandomNumber() {
        return Math.random();
    }
}
BottleMacker4.count = 0;
console.log(BottleMacker4.count);
console.log(BottleMacker4.getRandomNumber());
//Abstract Class
class Payment {
    constructor(amount, account) {
        this.amount = amount;
        this.account = account;
    }
    isPaymentValid(amount) {
        return this.amount >= amount;
    }
}
class GPay extends Payment {
    constructor(amount, account) {
        super(amount, account);
    }
}

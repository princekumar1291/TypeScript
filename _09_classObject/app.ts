class Device{
    name:string;
    price:number;
    category:string;
    constructor(name:string,price:number,category:string){
        this.name=name;
        this.price=price;
        this.category=category;
    }
}
let d1=new Device("Laptop",50000,"Electronics");
let d2=new Device("Mobile",10000,"Electronics");
console.log(d1,d2);


class BottleMacker{
    constructor(public name:string,public price:number,public color:string){}
}

let b1=new BottleMacker("Macker",100,"Red");
let b2 = new BottleMacker("Macker", 100, "Red");
console.log(b1,b2);



//Access Modifiers

class BookMaker{
    public name:string;
    private price:number;
    protected color:string;
    constructor(name:string,price:number,color:string){
        this.name=name;
        this.price=price;
        this.color=color;
    }
}

let book1=new BookMaker("Book1",100,"Red");
book1.name="Book2";
// book1.price=200;  //Error beacuse price is private
// book1.color="White";  //Error beacuse color is protected

console.log(book1);


//readonly
class BottleMacker2{
    constructor(public readonly name:string,public readonly price:number,public readonly color:string){}
}

let b21=new BottleMacker2("Macker",100,"Red");
console.log(b21);


//getter and setter
class BookMaker3{
    public _name:string;
    constructor(_name:string){
        this._name=_name;
    }

    get name(){
        return this._name; 
    }

    set name(name:string){
        this._name=name;
    }
}

let book3=new BookMaker3("Book1");
book1.name="Book2";
console.log(book1);
console.log(book3.name);


//static property and method
class BottleMacker4{
    static count:number=0;
    static getRandomNumber():number{
        return Math.random();
    }
}

console.log(BottleMacker4.count);
console.log(BottleMacker4.getRandomNumber());




//Abstract Class
abstract class Payment{
    constructor(protected amount:number,protected account:number){}
    isPaymentValid(amount:number): boolean {
        return this.amount >= amount;
    }
}
class GPay extends Payment{
    constructor(amount:number,account:number){
        super(amount,account);
    }
}
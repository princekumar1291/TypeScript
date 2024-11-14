"use strict";
//generics
function abcd(a, b, c) {
    console.log(a, b, c);
}
function ab(a, b, c) {
    return "Prince";
}
abcd(12, "Prince", 12);
abcd("Prince", "Prince", 12);
function log(val) {
    console.log(val);
}
log(12);
log("Prince");
let obj = {
    name: "Prince",
    age: 12,
    key: "Prince"
};
//generric class
class myClass {
    constructor(name) {
        this.name = name;
    }
}
let obj1 = new myClass("Prince");

"use strict";
let a; //set to any
a = 100;
a = "Prince";
let b = 100; //automatic type inference (set to number)
// b="Prince";  //Error
let c; //explicit type declaration
c = 100;
// c="Prince";  //Error
let d;
d = 12;
d = "Prince";
// d.toString(); // error because d is unknown
if (typeof d == "string") { // type guard
    d.toUpperCase();
}
//function
function greet() {
    console.log("Hello");
}
function add(a, b) {
    return a + b;
}
//Null
let e = null;
//Undefined
let f;
//Never
function abcd() {
    while (true) {
        console.log("Hello");
    }
}
abcd();
console.log("Hello");

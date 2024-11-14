"use strict";
//function
function add(a, b) {
    return a + b;
}
let sum = add(1, 2);
console.log(sum);
function abcd(name, age, email, isAdmin, cb) {
    console.log(name, age, email, isAdmin);
}
abcd("Prince", 12, "a@b.com", true, () => {
    console.log("hello");
});
function abcde(name, age, email, isAdmin, cb) {
    cb(name);
}
abcde("Prince", 12, "a@b.com", true, (val) => {
    console.log(val);
});
//optional parameter
function abcdef(name, age, email, gender) {
    console.log(name, age, email, gender);
}
abcdef("Prince", 12, "a@b.com");
//default parameter
function abcdefg(name, age, email, gender = "Not to be disclosed") {
    console.log(name, age, email, gender);
}
abcdefg("Prince", 12, "a@b.com");
abcdefg("Prince", 12, "a@b.com", "Male");
//rest parameter
function sum2(...arr) {
    return arr.reduce((a, b) => a + b);
}
console.log(sum2(1, 2, 3, 4, 5));
function sum3(a, b) {
    if (b) {
        return a + b;
    }
    else {
        console.log(a);
    }
}
console.log(sum3(1));
console.log(sum3(1, 2));

"use strict";
//Interface 
function printUser(obj) {
    console.log(obj.name);
    console.log(obj.age);
    console.log(obj.email);
}
printUser({ name: "Prince", age: 12 });
function printAdmin(admin) {
    console.log(admin.name);
    console.log(admin.age);
    console.log(admin.email);
    console.log(admin.isAdmin);
}
function printAbcd(admin) {
    console.log(admin.name);
    console.log(admin.age);
    console.log(admin.email);
    console.log(admin.isAdmin);
}
let a;
a = 12;
a = "Prince";
a = true;

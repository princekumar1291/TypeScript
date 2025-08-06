// ===================================
// PRIMITIVE vs REFERENCE TYPES Demo
// ===================================

console.log("=== PRIMITIVE TYPES ===");

// PRIMITIVE TYPES in TypeScript/JavaScript
// - Stored by VALUE
// - Copied when assigned
// - Immutable

// 1. NUMBER
let num1: number = 42;
let num2: number = num1; // COPIED by value
num2 = 100;
console.log("num1:", num1); // 42 (unchanged)
console.log("num2:", num2); // 100

// 2. STRING
let str1: string = "Hello";
let str2: string = str1; // COPIED by value
str2 = "World";
console.log("str1:", str1); // "Hello" (unchanged)
console.log("str2:", str2); // "World"

// 3. BOOLEAN
let bool1: boolean = true;
let bool2: boolean = bool1; // COPIED by value
bool2 = false;
console.log("bool1:", bool1); // true (unchanged)
console.log("bool2:", bool2); // false

// 4. UNDEFINED & NULL
let undef1: undefined = undefined;
let null1: null = null;

// 5. SYMBOL (ES6+)
let sym1: symbol = Symbol("id");
let sym2: symbol = sym1; // COPIED by value
console.log("sym1 === sym2:", sym1 === sym2); // true

// 6. BIGINT (ES2020+)
let big1: bigint = 123n;
let big2: bigint = big1; // COPIED by value

console.log("\n=== REFERENCE TYPES ===");

// REFERENCE TYPES in TypeScript/JavaScript
// - Stored by REFERENCE
// - Share the same memory location
// - Mutable

// 1. OBJECTS
let obj1: { name: string; age: number } = { name: "Prince", age: 25 };
let obj2 = obj1; // REFERENCE copied, not the object itself
obj2.name = "Kumar";
console.log("obj1.name:", obj1.name); // "Kumar" (CHANGED!)
console.log("obj2.name:", obj2.name); // "Kumar"
console.log("obj1 === obj2:", obj1 === obj2); // true (same reference)

// 2. ARRAYS
let arr1: number[] = [1, 2, 3];
let arr2: number[] = arr1; // REFERENCE copied
arr2.push(4);
console.log("arr1:", arr1); // [1, 2, 3, 4] (CHANGED!)
console.log("arr2:", arr2); // [1, 2, 3, 4]
console.log("arr1 === arr2:", arr1 === arr2); // true (same reference)

// 3. FUNCTIONS
function greet(name: string): string {
    return `Hello, ${name}!`;
}
let func1 = greet;
let func2 = func1; // REFERENCE copied
console.log("func1 === func2:", func1 === func2); // true

// 4. DATES
let date1: Date = new Date();
let date2: Date = date1; // REFERENCE copied
date2.setFullYear(2025);
console.log("date1 year:", date1.getFullYear()); // 2025 (CHANGED!)
console.log("date2 year:", date2.getFullYear()); // 2025

console.log("\n=== COMPARING BEHAVIOR ===");

// PRIMITIVE - Creating independent copies
let primitive1: number = 10;
let primitive2: number = primitive1;
primitive2 += 5;
console.log("Primitive1:", primitive1); // 10 (unchanged)
console.log("Primitive2:", primitive2); // 15

// REFERENCE - Sharing same object
let reference1: { count: number } = { count: 10 };
let reference2 = reference1;
reference2.count += 5;
console.log("Reference1.count:", reference1.count); // 15 (changed!)
console.log("Reference2.count:", reference2.count); // 15

console.log("\n=== CREATING TRUE COPIES ===");

// How to create TRUE COPIES of reference types

// 1. SHALLOW COPY for Objects
let original: { name: string; age: number } = { name: "Prince", age: 25 };
let shallowCopy = { ...original }; // Spread operator
shallowCopy.name = "Kumar";
console.log("Original name:", original.name); // "Prince" (unchanged)
console.log("Copy name:", shallowCopy.name); // "Kumar"

// 2. SHALLOW COPY for Arrays
let originalArr: number[] = [1, 2, 3];
let copyArr: number[] = [...originalArr]; // Spread operator
copyArr.push(4);
console.log("Original array:", originalArr); // [1, 2, 3] (unchanged)
console.log("Copy array:", copyArr); // [1, 2, 3, 4]

// 3. DEEP COPY (for nested objects)
let nestedObj: { person: { name: string; details: { age: number } } } = {
    person: {
        name: "Prince",
        details: { age: 25 }
    }
};
let deepCopy = JSON.parse(JSON.stringify(nestedObj));
deepCopy.person.details.age = 30;
console.log("Original nested age:", nestedObj.person.details.age); // 25 (unchanged)
console.log("Copy nested age:", deepCopy.person.details.age); // 30

console.log("\n=== TYPEOF OPERATOR ===");

// Using typeof to identify types
console.log("typeof 42:", typeof 42); // "number"
console.log("typeof 'hello':", typeof "hello"); // "string"
console.log("typeof true:", typeof true); // "boolean"
console.log("typeof undefined:", typeof undefined); // "undefined"
console.log("typeof null:", typeof null); // "object" (known quirk!)
console.log("typeof {}:", typeof {}); // "object"
console.log("typeof []:", typeof []); // "object"
console.log("typeof function(){}:", typeof function(){}); // "function"

console.log("\n=== MEMORY VISUALIZATION ===");
console.log("PRIMITIVE: variable → value (stored directly)");
console.log("REFERENCE: variable → memory address → actual object");
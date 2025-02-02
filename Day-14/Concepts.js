import { Addition, subtraction, multiply, divide } from "./math.js";
// const math = require('./math');


// const pi = 3.14;
// let data = "This is a normal Data";

// console.log(data, pi);



// Template strings
// Template strings (also called template literals) are an easier way to work with strings in JavaScript.
// Multi-line strings
// Embedding variables using ${}
// Expression evaluation inside strings


// `` used instead of '', ""

// const Name = "John\nThis is Multiline and\nstring in js";
// console.log(`Hello, ${Name}!`);

const Message = `hello,
This is a Multiline 
String in JS`

// console.log(Name);

const a = 5; 
const b = 10;

// console.log(`The sum of ${a} and ${b} is ${a+b}`);


function greet(name){
    return `Hello, ${name}!`;
}

// console.log(`${greet("Alice")}`);


const user = {
    name : "Bob",
    age: 25,

};

// console.log(`User Info: ${user.name} is ${user.age} years old`);

// 🔹 When to Use Template Strings?

// ✅ When working with dynamic content
// ✅ When formatting multi-line strings
// ✅ When inserting variables into strings



const product = "Laptop";
const price = 50000;

// console.log(`The ${product} costs ₹${price}.`);



// Arrays
// An array is a collection of values stored in a single variable. Arrays can store multiple data types like numbers, strings, objects, and even other arrays.

const fruits = ["Apple", "Banana", "Orange"];
// console.log(fruits); 
// Output: ["Apple", "Banana", "Orange"]

// console.log(fruits[0]); // Output: Apple
// console.log(fruits[1]); // Output: Banana


fruits[1] = "mango";
// console.log(fruits);

// console.log(fruits.length)



// push (add to end) & Pop (remove from end)


fruits.push("Grapes");
// console.log(fruits);


fruits.pop();
// console.log(fruits);

// Unshift (add to beginning) & Shift (remove from beginning)

fruits.unshift("Grapes");
// console.log(fruits)

fruits.shift();
// console.log(fruits);


// Objects
// An object is a collection of key-value pairs.

const person = {
    name: "Amogh",
    age: 25,
    isStudent: false,
    location: "India",
    dob: "24-Sept",
    travel: "yes"
};

// console.log(person);

// console.log(person.name);
// console.log(person.location);
// console.log(person.dob);

// console.log(person["travel"]);
// console.log(person["age"]);


person.age = 30;
person.location = "Dubai";


// console.log(person.location);
// console.log(person.age);

person.city = "New Delhi";
delete person.location;
// console.log(person);



const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022
};

// console.log(`My car is a ${car.year} ${car.brand} ${car.model}.`);



// import and export
// JavaScript import/export allows you to split code into multiple files, making it modular and reusable.


console.log(Addition(5,3));
console.log(subtraction(5,3));
console.log(multiply(5,3));
console.log(divide(5,3));








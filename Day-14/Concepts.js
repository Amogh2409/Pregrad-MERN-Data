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


// console.log(Addition(5,3));
// console.log(subtraction(5,3));
// console.log(multiply(5,3));
// console.log(divide(5,3));




// Arrow Functions
// Arrow functions (=>) provide a shorter and cleaner way to write functions in JavaScript.


// Normal Function

// function add(a, b) {
//     return a + b;
// }
// console.log(add(3, 5)); // Output: 8


// const add = (a, b) => a + b;
// console.log(add(3, 5)); // Output: 8


// const greet = name => `Hello, ${name}!`;
// console.log(greet("Alice")); // Output: Hello, Alice!


// function sayHello(){
//     return "Hello World";
// }

// const sayHello = () => "Hello, World!";
// console.log(sayHello()); // Output: Hello, World!

// const multiply = (a, b) => {
//     const result = a * b;
//     return result;
// };
// console.log(multiply(4, 6)); // Output: 24


let name1 = "Amit";
//This Keyword

const person1 = {
    name: "Amogh",
    sayHello: function(){
        console.log(`Hello, my name is ${this.name}`)
    },
    sayHelloArrow: () => {
        console.log(`Hello, my name is ${this.name}`)
    }
}

// person1.sayHello();
// person1.sayHelloArrow();


// Lexical Scope

// Lexical Scope means "where a variable is available in the code" and how JavaScript decides which variable to use when there are multiple with the same name

// Think of a school:

// A teacher (global scope) can enter any classroom and talk to any student.
// A student (local scope) can only talk to classmates inside their room but not students in another class.

// let school = "ABC School"; // Global variable

// function getSchoolName() {
//     console.log(school); // Can access global variable
// }

// getSchoolName(); // Output: ABC School
// console.log(school); // Output: ABC School


// function showStudent() {
//     let student = "John"; // Local variable
    // console.log(student);
// }

// showStudent(); // Output: John
// console.log(student); // ❌ ERROR: student is not defined



// Nested Scope (Functions Inside Functions)
// Inner functions can access variables from outer functions (but not the other way around!).



function outer(){
    let teacher = "Mrs. Smith";

    function inner(){
        let student = "Amogh";
        console.log(teacher);

    }
    inner();

    // console.log(student);
}

// outer();


// let and const variables are only available inside the {} block they are declared in.

// if (true) {
//     let age = 20;
//     console.log(age); // ✅ Works here
// }

// console.log(age); // ❌ ERROR: age is not defined


// function test() {
//     let x = 10;
//     if (true) {
//         let x = 20;
//         console.log(x);
//     }
//     console.log(x);
// }

// test();




// Immutability in JS
// Immutability means not changing the original data. Instead of modifying existing variables, we create new ones.

// 📌 Why is Immutability Important?
// 1️⃣ Prevents unexpected changes (bugs).
// 2️⃣ Helps in functional programming (used in React & Redux).
// 3️⃣ Makes debugging easier (no accidental modifications).

// let person3 = {name : "Alice", age: 25};

// let newPerson = {...person3, age: 26};
// console.log(person3);
// console.log(newPerson);





// let numbers = [1, 2, 3];
// let newNumbers = [...numbers, 4]; // ✅ Creates a new array
// console.log(newNumbers); // [1, 2, 3, 4]
// console.log(numbers);    // [1, 2, 3] (Unchanged)




// function updateAge(person) {
//     person.age = 30; // ❌ Changes the original object
// }

// let user1 = { name: "Bob", age: 25 };
// updateAge(user1);
// console.log(user1); // { name: "Bob", age: 30 } (Changed)


function updateAge(person) {
    return { ...person, age: 30 }; // ✅ Returns a new object
}

let user1 = { name: "Bob", age: 25 };
let updatedUser = updateAge(user);
console.log(updatedUser); // { name: "Bob", age: 30 }
console.log(user);        // { name: "Bob", age: 25 } (Unchanged)







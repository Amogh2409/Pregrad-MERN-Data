// An array is a collection of items stored in a single variable. These items (or elements) can be of any data type, such as numbers, strings, objects, or even other arrays

// Arrays are useful for organizing and managing data, allowing for efficient access and manipulation of the elements within them.They provide a way to group related data together, making it easier to iterate through, sort, and perform operations on the data as a whole.In programming, arrays are often used in algorithms and data structures to enhance performance and facilitate complex data handling.


// let arrayName =  [element1, element2, element3];// This creates an array named arrayName containing three elements.

// let fruits = ["apple", "banana", "cherry"];
// console.log(fruits[2]);

// let numbers = [1,2,3,4];
// console.log(numbers);
// numbers.push(5);
// console.log(numbers)



// hetrogeneous Element
// let mixedArray = [1, "HEllo", true, null]; // This is an array containing elements of different data types.

// console.log(mixedArray);

// let names = ["Alice", "Bob", "Charlie", "David"];


//Array Constructor

// let array = new Array(3);  // this will create an empty array
// console.log(array)

// let array2 = new Array('A','B','C');
// console.log(array2);
// console.log(array);



//Basic Operations on Array


// let cities = ["Paris", "London", "New York"];
// console.log(cities[1]);

//Modify an Array
// cities[2] = "Los Angeles";
// console.log(cities);


//length of an Array
// console.log(city.length);

// let num = [1,2,3,4];
// console.log(num);
// num.push(5);
// console.log(num);
// num.unshift(0);
// console.log(num);

// Adding Elements in Array
// city.push(10); // Adds an element in the end
// city.unshift(0); // Adds an element at the beginning

// console.log(city);

//Removing Elements from Array
// city.pop(); // Removes the last element
// city.shift(); // Removes the first element

// console.log(city);





// for(let i = 0; i<city.length; i++){
//     console.log("This is City number " + city[i]);
// }

// city.forEach((cities, index)=> {
//     console.log(`${index} : ${city}`);
// })


// Array Methods
// Map(), filter(), reduce()

let numbers = [1,2,3];
let square = numbers.map(num=> num * num);  // this create a new array by applying a function to each element
// console.log(square);

numbers.push(4);

let evens = numbers.filter(num => num % 2 === 0)  // Create a  new array with elements that passes this condition
// console.log(evens);

let sum = numbers.reduce((acc, num) => acc + num, 0)
// console.log(sum);
// [1,2,3,4]

// let Number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];


//Searching in Arrays

// console.log(Number.indexOf(10));



// console.log(fruits.indexOf("cherry"));// Output: 2

//Includes 
// console.log(fruits.includes("Mango"));


let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// splice(): Adds/removes elements at a specific index.
fruits.splice(2, 1, "orange");
fruits.splice(4, 1, "mango");
// console.log(fruits);

// slice() : Return a new array from a portion of the original array
let sliced = fruits.slice(1,5);
console.log(sliced);





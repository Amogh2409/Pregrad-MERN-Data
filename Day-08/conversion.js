// Implicit type conversion 
// It happens when JavaScript automatically converts one data type to another behind the scenes to make the code work. This can happen in operations like addition, comparison, or logical operations.

// String and Number

// let num = 5;
// let str = "10";
// let result = num + str;  // 5(int) converts to string
// console.log(result);




// Boolean and Number:

// let value = 2 + true; // bool add number  (true ->1 false -> 0)
// console.log(value);


//comparision

// console.log(5 == "5");  True
// console.log(5 == "5");  False




// Explicit Type Conversion
// Explicit type conversion happens when you manually convert one data type into another using built-in JavaScript methods.


// String to Number:

// let str = "123";
// let num = Number(str);
// console.log(str);
// console.log(typeof str);
// console.log(num);
// console.log(typeof num);



// Number to String:

// let num = 456;
// let str = String(num); // Converts the number to a string
// console.log(str); // Output: "456"
// console.log(typeof str); // Output: "string"



// Boolean to String:

// let bool = true;
// let str = String(bool); // Converts boolean to string
// console.log(typeof bool);
// console.log(typeof str);
// console.log(str); // Output: "true"


// String to Boolean:

// let str = "hello";
// let bool = Boolean(str);  // Non Empty String converts to true
// console.log(bool);
// let emptystr = "";
// console.log(Boolean(emptystr));



// Parsing Numbers:
// parseFloat, parseInt  to extract numbers from strings

// let str = "123.45px";
// console.log(parseInt(str));
// console.log(parseFloat(str));





// Implicit Conversion	                     Explicit Conversion
// Happens automatically by JavaScript.	     Performed manually using methods.
// Less predictable and can lead to bugs.	 More predictable and controlled.
// Example: "5" + 2 → "52"	                 Example: Number("5") + 2 → 7
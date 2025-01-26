//       A function in JavaScript is a block of reusable code designed to perform a specific task. It is executed when "called" or "invoked."


//       Why Use Functions?
//       Reusability: Write once, use multiple times.
//       Modularity: Break down complex problems into smaller pieces.
//       Maintainability: Easier to debug and manage.
//       Readability: Improves code organization and understanding.

//      function greet(n){
//          return `Hello, ${n}! How are you today?`;
//      }
//      const date = function(date){
//          return `There DOB is ${date}`;
//      }
//      console.log(greet("Amogh"));
//      console.log(greet("Alice"));
//      console.log(greet("Arjun"));
//      console.log(greet("keshav"));
//      console.log(greet("Aman"));
//      console.log(greet("kunal"));
//      console.log(date("1992"));


//      console.log("Hello Amogh! Nice to meet you!");
//      console.log("Hello Ama! Nice to meet you!");
//      console.log("Hello keshav! Nice to meet you!");
//      console.log("Hello Amogh! Nice to meet you!");
//      console.log("Hello Amogh! Nice to meet you!");
//      console.log("Hello Amogh! Nice to meet you!");
//      console.log("Hello Amogh! Nice to meet you!");





//      calling a function

//      function sayHi(){
//          console.log("Hi!");
//      }



//     function add(a,b,c,d,e,f,g,h,i){
//         return a+b+c + d + e + f + g + h + i;
//     }

//     console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9));
//     console.log(add(8, 9, 10, 11, 13, 132, 243, 3,3, 4));
//     console.log(add(54,44,232,4454,0,566,66456,6,0));
//     console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9));


//     function Name(a){
//         console.log(`I am a developer and my name is ${a}.`);
//     }

//     Name("Amogh");
//     Name();





//     Default Parameter

//    function Name(a = "Guest"){
//        return `I am a developer and my name is ${a}.`;
//    }

//    Name("Amogh");
//    Name();

//    function square(num) {
//        return num * num;
//    }

//    console.log(square(5))




//    Checking if the numbers is greatter than each other

//    function compareNumbers(a,b){
//        if(a>b){
//            return `${a} is greater than ${b}`;
//        }
//        else if(a == b){
//            return `${a} is equal to ${b}`;
//        }
//        else{
//            return `${b} is greater than ${a}`;
//        }
//    }


//    console.log(compareNumbers(10, 5));
//    console.log(compareNumbers(3, 7));
//    console.log(compareNumbers(6, 8));
//    console.log(compareNumbers(7, 8));
//    console.log(compareNumbers(8, 9));
//    console.log(compareNumbers(5, 8));
//    console.log(compareNumbers(4, 8));
//    console.log(compareNumbers(8, 0));
//    console.log(compareNumbers(8, 8));
//    console.log(compareNumbers(8, 8));
//    console.log(compareNumbers(8, 8));
//    console.log(compareNumbers(8, 8));



//    arrow Function

//   const square = (num) => num * num;

//   console.log(5)
//   console.log(square(5));
//   console.log(square(8));


//   const greet = (Name) => `Hello, ${Name}!How are you today?`

//   console.log(greet("Alice"))
//   console.log(greet("Bob"))



//   1. Write a function to add two numbers.  
//   2. Create a function to check if a number is even or odd.  
//   3. Write a function to greet someone by their name.  
//   4. Create a function to calculate the factorial of a number.  
//   5. Write a function to find the largest of three numbers.  
//   6. Write a function to return the square of a number.  
//   7. Create a function to convert Celsius to Fahrenheit.  
//   8. Write a function to calculate the sum of all numbers in an array.  
//   9. Create a function to reverse a string.  
//   10. Write a function to check if a number is positive, negative, or zero.  
//   11. Create a function to find the smallest number in an array.  
//   12. Write a function to count the number of vowels in a string.  
//   13. Create a function to check if a string is a palindrome.  
//   14. Write a function to calculate the area of a rectangle given its length and width.  
//   15. Create a function to check if a given year is a leap year.



// The factorial of a number 𝑛
// n, denoted as n!, is the product of all positive integers less than or equal to 𝑛

// 5 ,4,3,2,1 = 12
// 6 5 4 3 2 1 = 720
// 7 6 5 4 3 2 1 = 5040
// A Promise represents a value that may be available now, in the future, or never.

//asynchronous operations

// Promises has some states 
    // Pending: Initial state , not fulfilled ya rejected
    // Fullfill: The operation was completed successfully
    // rejected: the operation failed



    // let myPromise = new Promise((resolve, reject) => {
    //     let success = false; // Change to false if rejection
    //     setTimeout(()=>{
    //         if(success){
    //             resolve("Promise resolved");
    //         }
    //         else{
    //             reject("Promise rejected");
    //         }
    //     }, 2000)
    // });



    // myPromise
    // .then(result => console.log(result))
    // .catch(error => console.log(error))
    // .finally(()=> console.log("Promises execution completed"));




    //  Synchronous vs Asynchronous Execution

    //  js executes the code line by line, in the order it appears
    // if one line takes a long time to compile the whole file waits until it finish


// console.log("Step 1");
// console.log("Step 2");
// console.log("Step 3");


// asynchronous Execution (Non blocking Code);

// --> async doesnt stop the exexution of the program
// The program continues executing the next instructions while waiting for an operation to complete.

// Fetch Data from Api
// reading/ writing files
// DB operations
// handling user inputs


console.log("Step 1");
console.log("Step 2");
console.log("Step 3");

setTimeout(()=> {
    console.log("Step 2 but delayed");
}, 2000);

for(let i = 1; i<7; i++){
    console.log(`Step ${i}`);
}

setTimeout(()=> {
    console.log("Step 3 but delayed");
}, 2000);
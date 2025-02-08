
// console.log("Step 1");
// console.log("Step 2");
// console.log("Step 3");

// setTimeout(()=> {
//     console.log("Step 2 but delayed");
// }, 2000);

// for(let i = 1; i<7; i++){
//     console.log(`Step ${i}`);
// }

// setInterval(() => {
//     console.log("Runs every 2 seconds");
// }, 1500);


// fetching data from api



// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log("error:", error))










async function fetchData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/comments');
    let data = await response.json();

    let names = data.map(comment => comment.name);
    let emails = data.map(comment => comment.email);
    let bodies = data.map(comment => comment.body);
    // console.log(bodies);

    let details = data.map(comment => ({
        name: comment.name,
        email: comment.email,
        body: comment.body,
    }));

    console.log(details);
    
}

fetchData();
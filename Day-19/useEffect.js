
import React, { useState, useEffect } from 'react';

function Counter(){
    const [count, setCount] = useState(0);

    useEffect(()=> {
        console.log(`This count is now ${count}`);
        return ()=> {
            console.log(`Cleaning up .... Previous count was ${count}`);
        }
    }, [count]);

    return (
        <div>
            <p>
                Count : {count}
            </p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    )
}

export default Counter;

// Data Fetching
// event listener
// timers (set inteval)
// Update the Domfunction

// Advantages of UseEffect
    // simplifies code
    // Cleaner Cleanup (timer, event listener cancel, memory loss minimize)

// Things to Watch out
    // Dependency array  - if you forget one your effect might not run 
    // Running on every render - > number of operations icre - > performance down


    // useEffect is like a helper that tells React, "After you've finished painting the screen, run this extra code."
    // You can tell it, "Only run this extra code when these specific values change."
    // And if needed, you can also tell it, "Before you run this code again or when I'm leaving, do this cleanup."    
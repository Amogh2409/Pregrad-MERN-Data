
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
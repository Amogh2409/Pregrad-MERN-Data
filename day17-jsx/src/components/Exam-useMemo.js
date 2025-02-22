import React, { useState, useMemo } from 'react';

function ExpensiveCalculation({ num }) {
    const squaredNumber = useMemo(() => {
        console.log("Calculating square...");
        return num * num;
    }, [num]);  // Only re runs when num changes

    return (
        <div>
            <p>Number: {num}</p>
            <p>Squared Number: {squaredNumber}</p>
        </div>
    );
}

export default ExpensiveCalculation;


// useCallback memoizes a function, - > ensure that its reference remains the same unless dependencies change

// if a function is passed as a prop to child components, React may recreate it evry render


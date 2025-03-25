import React from "react";

const Controls = ({ resetArray, startBubbleSort, sorting }) => {
    return (
        <div>
            <button onClick={resetArray} disabled={sorting}>Generate New Array</button>
            <button onClick={startBubbleSort} disabled={sorting}>Bubble Sort</button>
        </div>
    );
};

export default Controls;
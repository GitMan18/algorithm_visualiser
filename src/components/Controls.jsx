import React from "react";

const Controls = ({ resetArray, startSorting, sorting }) => {
    return (
        <div className="controls">
            <button onClick={resetArray} disabled={sorting}>Generate New Array</button>
            <button onClick={startSorting} disabled={sorting}>Start Sorting</button>
        </div>
    );
};

export default Controls;
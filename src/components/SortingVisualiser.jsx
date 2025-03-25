import React, { useState, useEffect } from "react";
import { bubbleSort } from "../algorithms/bubbleSort";

const SortingVisualiser = () => {
    const [array, setArray] = useState([]);
    
    // Generate random array
    useEffect(() => {
        resetArray();
    }, []);

    const resetArray = () => {
        const newArray = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 5);
        setArray(newArray);
    };

    const startBubbleSort = () => {
        const animations = bubbleSort(array);
        animateSorting(animations);
    };

    const animateSorting = (animations) => {
        animations.forEach(([indexA, indexB, type], i) => {
            setTimeout(() => {
                setArray((prevArray) => {
                    const newArray = [...prevArray];
                    if (type === "swap") {
                        [newArray[indexA], newArray[indexB]] = [newArray[indexB], newArray[indexA]];
                    }
                    return newArray;
                });
            }, i * 100);
        });
    };

    return (
        <div>
            <button onClick={resetArray}>Generate New Array</button>
            <button onClick={startBubbleSort}>Bubble Sort</button>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                {array.map((value, index) => (
                    <div 
                        key={index} 
                        style={{
                            height: `${value}px`,
                            width: "20px",
                            margin: "2px",
                            backgroundColor: "teal"
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default SortingVisualiser;
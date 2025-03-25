import React, { useState, useEffect } from "react";
import { bubbleSort } from "../algorithms/bubbleSort";
import SortingBar from "./SortingBar";
import Controls from "./Controls";

const SortingVisualiser = () => {
    const [array, setArray] = useState([]);
    const [sorting, setSorting] = useState(false);
    const [activeIndices, setActiveIndices] = useState([]);

    useEffect(() => {
        resetArray();
    }, []);

    const resetArray = () => {
        if (sorting) return;
        const newArray = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 5);
        setArray(newArray);
        setActiveIndices([]);
    };

    const startBubbleSort = () => {
        if (sorting) return;
        setSorting(true);
        const animations = bubbleSort(array);
        animateSorting(animations);
    };

    const animateSorting = (animations) => {
        animations.forEach(([indexA, indexB, type], i) => {
            setTimeout(() => {
                setActiveIndices([indexA, indexB]);

                setArray((prevArray) => {
                    const newArray = [...prevArray];
                    if (type === "swap") {
                        [newArray[indexA], newArray[indexB]] = [newArray[indexB], newArray[indexA]];
                    }
                    return newArray;
                });

                setTimeout(() => {
                    if (i === animations.length - 1) {
                        setSorting(false);
                        setActiveIndices([]);
                    }
                }, 100);
            }, i * 100);
        });
    };

    return (
        <div className="visualiser-container">
            <h2>Bubble Sort Visualiser</h2>
            <Controls resetArray={resetArray} startBubbleSort={startBubbleSort} sorting={sorting} />
            <div className="bars-container">
                {array.map((value, index) => (
                    <SortingBar key={index} height={value} isActive={activeIndices.includes(index)} />
                ))}
            </div>
        </div>
    );
};

export default SortingVisualiser;
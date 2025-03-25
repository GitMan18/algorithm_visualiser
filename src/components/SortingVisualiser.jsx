import React, { useState, useEffect } from "react";
import { bubbleSort } from "../algorithms/bubbleSort";
import { insertionSort } from "../algorithms/insertionSort";
import { selectionSort } from "../algorithms/selectionSort";
import { quickSort } from "../algorithms/quickSort";
import { bogoSort } from "../algorithms/bogoSort";
import SortingBar from "./SortingBar";
import Controls from "./Controls";

const SortingVisualiser = () => {
    const [array, setArray] = useState([]);
    const [sorting, setSorting] = useState(false);
    const [activeIndices, setActiveIndices] = useState([]);
    const [algorithm, setAlgorithm] = useState("bubbleSort");
    const [bogoFailed, setBogoFailed] = useState(false);

    useEffect(() => {
        resetArray();
    }, []);

    const isSorted = (arr) => {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) return false;
        }
        return true;
    };

    const resetArray = () => {
        if (sorting) return;
        let newArray;
        do {
            newArray = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 5);
        } while (isSorted(newArray));
        setArray(newArray);
        setActiveIndices([]);
        setBogoFailed(false);
    };

    const startSorting = () => {
        if (sorting) return;

        setTimeout(() => {
            setSorting(true);
            let animations = [];

            switch (algorithm) {
                case "bubbleSort":
                    setBogoFailed(false);
                    animations = bubbleSort(array);
                    break;
                case "insertionSort":
                    setBogoFailed(false);
                    animations = insertionSort(array);
                    break;
                case "selectionSort":
                    setBogoFailed(false);
                    animations = selectionSort(array);
                    break;
                case "quickSort":
                    setBogoFailed(false);
                    animations = quickSort(array);
                    break;
                case "bogoSort":
                    const result = bogoSort(array);
                    animations = result.animations;
                    break;
                default:
                    setBogoFailed(false);
                    animations = bubbleSort(array);
            }

            animateSorting(animations);
        }, 50);
    };

    const animateSorting = (animations) => {
        if (algorithm === "bogoSort") {
            animations.forEach((step, i) => {
                setTimeout(() => {
                    setArray(step.state);
                    setActiveIndices([]);
                    if (i === animations.length - 1) {
                        setSorting(false);
                        setBogoFailed(!isSorted(step.state));
                    }
                }, i * 200);
            });
            return;
        }

        animations.forEach((step, i) => {
            setTimeout(() => {
                setActiveIndices([step[0], step[1]]);

                if (step[2] === "swap") {
                    setArray((prevArray) => {
                        const newArray = [...prevArray];
                        [newArray[step[0]], newArray[step[1]]] = [newArray[step[1]], newArray[step[0]]];
                        return newArray;
                    });
                }
        
                else if (step[2] === "overwrite") {
                    setArray((prevArray) => {
                        const newArray = [...prevArray];
                        newArray[step[0]] = step[1]; // Set index to the new value
                        return newArray;
                    });
                }

                if (i === animations.length - 1) {
                    setTimeout(() => {
                        setSorting(false);
                        setActiveIndices([]);
                    }, 100);
                }
            }, i * 100);
        });
    };

    return (
        <div className="visualiser-container">
            <h2>Sorting Algorithm Visualiser</h2>
            <select
                onChange={(e) => {
                    setAlgorithm(e.target.value);
                }}
                value={algorithm}
                disabled={sorting}
            >
                <option value="bubbleSort">Bubble Sort</option>
                <option value="insertionSort">Insertion Sort</option>
                <option value="selectionSort">Selection Sort</option>
                <option value="quickSort">Quick Sort</option>
                <option value="bogoSort">Bogo Sort</option>
            </select>

            <Controls resetArray={resetArray} startSorting={startSorting} sorting={sorting} />

            <div className="bars-container">
                {array.map((value, index) => (
                    <SortingBar
                        key={index}
                        height={value}
                        isActive={activeIndices.includes(index)}
                        isFailedBogo={bogoFailed}
                    />
                ))}
            </div>

            {bogoFailed && (
                <p style={{ color: "red", marginTop: "10px" }}>
                    Bogo Sort failed to sort in 100 attempts.
                </p>
            )}
        </div>
    );
};

export default SortingVisualiser;
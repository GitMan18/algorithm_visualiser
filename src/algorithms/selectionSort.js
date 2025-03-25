export function selectionSort(arr) {
    let animations = [];
    let sortedArray = [...arr];

    for (let i = 0; i < sortedArray.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < sortedArray.length; j++) {
            animations.push([j, minIndex, "compare"]); // Highlight comparison
            if (sortedArray[j] < sortedArray[minIndex]) {
                minIndex = j;
            }
        }
        // Swap minimum element with the current element
        [sortedArray[i], sortedArray[minIndex]] = [sortedArray[minIndex], sortedArray[i]];
        animations.push([i, minIndex, "swap"]);
    }

    return animations;
}
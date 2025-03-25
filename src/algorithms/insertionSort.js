export function insertionSort(arr) {
    let animations = [];
    let sortedArray = [...arr]; // Copy array to avoid modifying original too soon

    for (let i = 1; i < sortedArray.length; i++) {
        let key = sortedArray[i];
        let j = i - 1;

        // Compare and shift larger elements right
        while (j >= 0 && sortedArray[j] > key) {
            animations.push([j, j + 1, "compare"]); // Compare animation
            animations.push([j + 1, sortedArray[j], "overwrite"]); // Overwrite animation
            sortedArray[j + 1] = sortedArray[j]; // Shift element right
            j--;
        }
        animations.push([j + 1, key, "overwrite"]); // Insert element in correct place
        sortedArray[j + 1] = key;
    }

    return animations;
}
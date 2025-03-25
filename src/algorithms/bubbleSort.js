export function bubbleSort(arr) {
    let animations = [];
    let n = arr.length;
    let sortedArray = [...arr];

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (sortedArray[j] > sortedArray[j + 1]) {
                // Push the indices being compared (for animation)
                animations.push([j, j + 1, "compare"]);

                // Swap values
                [sortedArray[j], sortedArray[j + 1]] = [sortedArray[j + 1], sortedArray[j]];

                // Push the indices being swapped (for animation)
                animations.push([j, j + 1, "swap"]);
            }
        }
    }
    return animations;
}
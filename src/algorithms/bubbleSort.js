export function bubbleSort(arr) {
    let animations = [];
    let sortedArray = [...arr];

    for (let i = 0; i < sortedArray.length - 1; i++) {
        for (let j = 0; j < sortedArray.length - 1 - i; j++) {
            animations.push([j, j + 1, "compare"]); // Compare animation

            if (sortedArray[j] > sortedArray[j + 1]) {
                [sortedArray[j], sortedArray[j + 1]] = [sortedArray[j + 1], sortedArray[j]];
                animations.push([j, j + 1, "swap"]); // Swap animation
            }
        }
    }
    return animations;
}
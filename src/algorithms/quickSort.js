export function quickSort(arr) {
    let animations = [];
    let sortedArray = [...arr]; // Copy array to avoid modifying original too soon
    quickSortHelper(sortedArray, 0, sortedArray.length - 1, animations);
    return animations;
}

function quickSortHelper(arr, low, high, animations) {
    if (low < high) {
        let pivotIndex = partition(arr, low, high, animations);
        quickSortHelper(arr, low, pivotIndex - 1, animations);
        quickSortHelper(arr, pivotIndex + 1, high, animations);
    }
}

function partition(arr, low, high, animations) {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        animations.push([j, high, "compare"]); // Show comparison

        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
            animations.push([i, j, "swap"]); // Show swap
        }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    animations.push([i + 1, high, "swap"]); // Show pivot swap

    return i + 1;
}
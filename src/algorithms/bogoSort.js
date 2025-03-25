export function bogoSort(arr) {
    const animations = [];
    const maxAttempts = 100;
    let current = [...arr];
    let sorted = false;

    for (let i = 0; i < maxAttempts; i++) {
        animations.push({ type: "shuffle", state: [...current] });

        if (isSorted(current)) {
            sorted = true;
            break;
        }

        shuffle(current);
    }

    return { animations, didFail: !sorted };
}

function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) return false;
    }
    return true;
}

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}
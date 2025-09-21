function minimumRecolors(blocks: string, k: number): number {
    const n = blocks.length;

    let minimumRecolors = k;
    let currentRecolors;

    for (let i = 0; i <= n - k; i++) { // Time Complexity: O(n-k)
        currentRecolors = 0;
        for (let j = i; j < i+k; j++) { // Time Complexity: O(k)
            if (blocks[j] === "W") currentRecolors++;
        }
        if (currentRecolors < minimumRecolors) minimumRecolors = currentRecolors;
        // minimumRecolors = Math.min(currentRecolors, minimumRecolors);
    }

    // (n-k)*(k) => n*k-k^2 ~ O(n*k)

    return minimumRecolors;
};
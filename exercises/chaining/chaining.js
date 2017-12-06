var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

console.log(
    // 1. reverse sort
    integers.sort((x,y) => y-x)
        // 2. remove x > 19
        .filter(x => x <= 19)
        // 3. 1.5x - 1
        .map(x => 1.5*x-1)
        // 4. sum
        .reduce((x, y) => x+y)
);
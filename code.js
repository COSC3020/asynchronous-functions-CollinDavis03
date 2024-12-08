const asyncMatches = (arr, key, callback) => {
    let count = 0;
    let index = 0;

    const processNext = () => {
        if (index >= arr.length) {
            callback(count); // All items processed, return count
            return;
        }

        setImmediate(() => {
            if (arr[index] === key) count++;
            index++;
            processNext(); // Process the next item
        });
    };

    processNext(); // Start processing
};

module.exports = asyncMatches;

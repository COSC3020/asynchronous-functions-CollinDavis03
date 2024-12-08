function asyncMatches(arr, key, callback) {
    // Simulate asynchronous processing
    setImmediate(() => {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === key) count++;
        }
        callback(count);
    });
}

module.exports = asyncMatches;

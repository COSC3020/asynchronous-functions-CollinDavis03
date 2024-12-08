function asyncMatches(arr, key, callback) {
    // Simulate asynchronous processing
    //ensure the work happens asynchrously
    setImmediate(() => {
        let count = 0;
        //iterate through the array
        for (let i = 0; i < arr.length; i++) {
            //If the key matches, increment the counter
            if (arr[i] === key) count++;
        }
        //Once the iteration is complete, invoke the callback with the count
        callback(count);
    });
}

module.exports = asyncMatches;

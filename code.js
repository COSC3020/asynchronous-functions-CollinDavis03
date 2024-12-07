const async = require('async');

const asyncMatches = (arr, key, callback) => {
    let count = 0;

    async.eachSeries(
        arr,
        (item, cb) => {
            // Simulate asynchronous processing
            setImmediate(() => {
                if (item === key) count++;
                cb(); // Signal completion of the current iteration
            });
        },
        (err) => {
            if (err) {
                callback(err); // Pass error to the callback
            } else {
                callback(count); // Return the final count
            }
        }
    );
};

module.exports = asyncMatches;

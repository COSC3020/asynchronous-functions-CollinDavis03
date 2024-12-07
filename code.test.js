const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');
const async = require('async');


const arg1 = [2, 2, 4, 2];
asyncMatches(arg1, 2, result => {
    assert(result === 3);
});
const arg2 = [0, 0, 0, 0];
asyncMatches(arg2, 0, result => {
    assert(result === 4);
});
const arg3 = [500, 23423, 500, 420, 666];
asyncMatches(arg3, 500, result => {
    assert(result === 2);
});
const arg4 = [0];
asyncMatches(arg4, 2, result => {
    assert(result === 0);
});
const arg5 = [3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5];
asyncMatches(arg5, 4, result => {
    assert(result === 5);
});
const arg6 = [1];
asyncMatches(arg6, 1, result => {
    assert(result === 1);
});

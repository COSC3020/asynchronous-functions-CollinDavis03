const asyncMatches = (arr, key, callback) => {
  let count = 0; 

  async.eachSeries(
    arr,
    (item, cd) => { 
      if (item === key) count++; 
      setImmediate(cb); 
    },
    (err) => { 
      if (err) {
          callback(err); 
      } else {
          callback(count);
      }
    }
  );
};

module.exports = asyncMatches; 


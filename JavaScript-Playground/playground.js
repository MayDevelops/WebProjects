var promise = Promise.resolve(1);
promise.then(function(value) {
  console.log("Resolved Promise", value);
});

promise.catch(function(reason) {
  console.log("Not Run", reason);
});

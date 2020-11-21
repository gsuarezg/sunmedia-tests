let promise = new Promise(function(resolve, reject) {
  setTimeout(function () {
    if (Math.round(Math.random()) === 1) {
      resolve("Success!");
    } else {
      reject("Fail!");
    }
  }, 1000);
});

promise
  .then(function (successMessage) {
    console.log("Yes! " + successMessage);
  })
  .catch(function (failMessage) {
    console.log("No! " + failMessage);
  });

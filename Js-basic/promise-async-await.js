const myPromise = new Promise((resolve, reject) => {
  // Asynchronous or Synchronous payload logic
  let operationSuccessful = false;

  if (operationSuccessful) {
    resolve("Fulfillment Payload"); // Transition state to 'fulfilled'
  } else {
    reject(new Error("Rejection Reason")); // Transition state to 'rejected'
  }
});
myPromise
  .then((value) => {
    // Invoked only when the promise transitions to the fulfilled state
    console.log("Resolved with value:", value);
  })
  .catch((error) => {
    // Invoked only when the promise transitions to the rejected state
    console.error("Rejected with error:", error.message);
  })
  .finally(() => {
    // Invoked unconditionally once the promise settles (fulfilled or rejected)
    console.log("Cleanup operations executed here.");
  });

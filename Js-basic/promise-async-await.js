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

//Example 2
const checkServerStatus = new Promise((resolve, reject) => {
  const isOnline = true;
  if (isOnline) {
    resolve("Server is active.");
  } else {
    reject("Server is offline.");
  }
});

checkServerStatus
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
// Output: "Server is active."

//Example 3
const waitForTimer = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Timer successfully finished!");
  }, 5000);
});

waitForTimer.then((message) => console.log(message));
// Output (after 1 second): "Timer successfully finished!"
//Example 4
const fixedPromise = new Promise((resolve, reject) => {
  resolve("First resolution locked.");
  resolve("Second resolution attempted."); // Ignored
  reject("Rejection attempted."); // Ignored
});

fixedPromise.then((result) => console.log(result));
// Output: "First resolution locked."

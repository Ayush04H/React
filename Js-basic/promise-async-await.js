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

//Example 5
Promise.resolve(10) // Instantly creates a resolved promise containing the value 10
  .then((num) => num * 5) // Returns 50 to the next promise
  .then((num) => num + 20) // Returns 70 to the next promise
  .then((finalResult) => console.log(`Final value: ${finalResult}`));
// Output: "Final value: 70"

//Example 6
const fetchRawUsername = Promise.resolve("   john_doe_dev   ");

fetchRawUsername
  .then((rawText) => rawText.trim())
  .then((trimmedText) => trimmedText.toUpperCase())
  .then((formattedName) => console.log(`User: ${formattedName}`));
// Output: "User: JOHN_DOE_DEV"

// Example 7
const dynamicCrasher = new Promise((resolve, reject) => {
  // Accessing a completely non-existent property crashes synchronously
  const result = undefinedObject.property;
  resolve(result);
});

dynamicCrasher
  .then((res) => console.log(res))
  .catch((error) => console.log(`Error intercepted cleanly: ${error.message}`));
// Output: "Error intercepted cleanly: undefinedObject is not defined"

//console.log(fetch("https://jsonplaceholder.typicode.com/todos/1"));
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => res.json())
  .then((data) => console.log(data));

// Async Await
async function getTodoItem() {
  try {
    // 1. Pause execution until the network request finishes
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
    );

    // 2. Pause execution until the stream converts to a JSON object
    const todoData = await response.json();

    // 3. Output the final data
    console.log(todoData);
  } catch (error) {
    // Replaces the old .catch() chain method
    console.error("Network or parsing error occurred:", error);
  }
}

// Invoke the asynchronous execution block
console.log(getTodoItem());
console.log("res wait");

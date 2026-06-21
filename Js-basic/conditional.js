// Example 1: Standard if/else
let userRole = "guest";
if (userRole === "admin") {
  console.log("Access Granted");
} else {
  console.log("Access Denied"); // Output: Access Denied
}

// Example 2: Ternary Operator (The React Way)
const isLoggedIn = true;
const greeting = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(greeting); // Output: Welcome back!

// Example 3: Short-Circuit Evaluation (&&)
const hasUnreadMessages = true;
// In React, the right side would be a UI component. Here it's a string.
const notification = hasUnreadMessages && "You have 3 new messages!";
console.log(notification); // Output: You have 3 new messages!

// Example 4: Fallback values (||)
const usernameInput = null; // null is "falsy"
const displayName = usernameInput || "Anonymous User";
console.log(displayName); // Output: Anonymous User

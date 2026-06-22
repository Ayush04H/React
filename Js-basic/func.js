// Example 1: Traditional Function
function greetUser(name) {
  return "Hello, " + name;
}
console.log(greetUser("Alice")); // Output: Hello, Alice

// Example 2: The exact same logic as an Arrow Function
const greetUserArrow = (name) => {
  return "Hello, " + name;
};
console.log(greetUserArrow("Bob")); // Output: Hello, Bob

// Example 3: Implicit Return (Crucial for React)
// Because it's one line, we drop the { } and the 'return' word.
const multiply = (a, b) => a * b;
console.log(multiply(5, 4)); // Output: 20

// Example 4: Single Parameter shorthand
const square = (num) => num * num;
console.log(square(6)); // Output: 36

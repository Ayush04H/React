// Example 1: Basic for loop (Print even numbers 0 to 10)
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// Output: 0, 2, 4, 6, 8, 10 (printed on separate lines)

// Example 2: for...of loop (Iterating Arrays)
const techStack = ["React", "Node", "PostgreSQL"];
for (const tech of techStack) {
  console.log("I am learning " + tech);
}
// Output:
// I am learning React
// I am learning Node
// I am learning PostgreSQL

// Example 3: for...in loop (Iterating Objects)
const fileStats = { size: "5MB", type: "PDF", secure: true };
for (const key in fileStats) {
  console.log(key + ": " + fileStats[key]);
}
// Output:
// size: 5MB
// type: PDF
// secure: true

// ==========================================
// Example 4: forEach() with Arrays
// ==========================================
const languages = ["JavaScript", "Java", "Python"];

languages.forEach(function (language) {
  console.log("Learning " + language);
});

// Output:
// Learning JavaScript
// Learning Java
// Learning Python

// ==========================================
// Example 5: forEach() with Index
// ==========================================
const fruits = ["Apple", "Banana", "Mango"];

fruits.forEach(function (fruit, index) {
  console.log(index + ": " + fruit);
});

// Output:
// 0: Apple
// 1: Banana
// 2: Mango

// ==========================================
// Example 6: forEach() with Objects inside Array
// ==========================================
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

users.forEach(function (user) {
  console.log(user.id + " - " + user.name);
});

// Output:
// 1 - Alice
// 2 - Bob
// 3 - Charlie

// ==========================================
// Example 7: Modern Arrow Function with forEach
// ==========================================
const numbers = [10, 20, 30, 40];

numbers.forEach((number) => {
  console.log(number);
});

// Output:
// 10
// 20
// 30
// 40

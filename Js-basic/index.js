function App() {
  return "Hello World";
}

const a = 2;

// Example 1: Basic let and const
let age = 25;
console.log(age); // Output: 25
age = 26; // Valid: let allows reassignment
console.log(age); // Output: 26

const name = "Alice";
console.log(name); // Output: Alice
//name = "Bob"; // ERROR: Assignment to constant variable.
//console.log(name); // This line will not execute due to the error

{
  let innerVariable = "I live inside these braces";
  const alsoHidden = "Me too";
  console.log(innerVariable); // Output: I live inside these braces
}
// console.log(innerVariable); // ERROR: innerVariable is not defined

const user = { role: "admin", active: true };
console.log(user.active); // Output: false
user.active = false; // Valid! We are mutating the contents, not reassigning 'user'.
console.log(user.active); // Output: false
console.log(user.role); // Output: admin
user.role = "guest"; // Valid! We can change properties of the object.
console.log(user.role); // Output: admin
// user = { role: "guest" }; // ERROR: Cannot reassign a const variable.

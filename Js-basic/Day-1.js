//Question 1
//Declare a variable using const for your birth year. Try to reassign it to the current year. What error do you get?
//This Modifies becasue the year is treated as an object and the value of the object can be modified but the reference to the object cannot be changed.
const year = new Date();
year.setFullYear(2002);
console.log(year);
year.setFullYear(2003);
console.log(year);

const curr = 2002;
console.log(curr);
// curr = 4000;
// console.log(curr);
//Uncaught TypeError: Assignment to constant variable.

//Question 2
//Declare a let variable called score, initialize it to 0, and add 10 to it. Print the result.//
let vari = 0;
vari += 10;
console.log(vari);

//Question 3
//Create an object called laptop with properties for brand (string), ram (number), and isOn (boolean).
const laptop = {
  brand: "This",
  ram: 10,
  isOn: false,
};
console.log(laptop);
console.log(laptop.isOn);
console.log(laptop.brand);
console.log(laptop.ram);

//Question 4
//Create an array called fruits containing three fruit names. Print the second fruit in the array to the console.
const fruits = ["A", "B", "C"];
console.log(fruits);
console.log(fruits[1]);

//Question 5
//Write an if/else statement that checks if a variable temperature is above 30. If it is, print "It's hot", otherwise print "It's fine".

let temp = 30;
function App(val) {
  if (val > 30) {
    console.log("It is Hot");
  } else {
    console.log("It is Not");
  }
}
console.log(App(temp));

//Question 6
//Convert the if/else statement from Question 5 into a single-line ternary operator.
let res = temp > 30 ? "It is Hot" : "It is not";
console.log(res);

//Question 7
//Write a standard for loop that prints the numbers from 1 to 5.
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

//Question 8
//Use a for...of loop to iterate over the fruits array from Question 4 and print each fruit.
for (const fruit of fruits) {
  console.log(fruit);
}

//Question 9
//Create a variable userInput and set it to null. Use the || operator to create a variable finalInput that defaults to "No input provided" if userInput is null.
const userInput = null;
const finalInput = userInput || "No input provided";
console.log(finalInput);

//Question 10
//Write a short-circuit expression using &&. Create a variable isAdmin = true. If true, print "Show Admin Dashboard".
const isAdmin = true;
console.log(isAdmin && "Show Admin Dashboard");

//Question 11
//Scope Trap: Write a for loop using let i = 0. Inside the loop, declare const multiplier = i * 2 and print it. Why does const work inside the loop even though the value changes every iteration?
//const multiplier = i * 2; - in this case it throws error
for (let i = 1; i <= 5; i++) {
  //Reason Every Loop creates a new instance or block of scope
  const multiplier = i * 2;
  console.log(multiplier);
}

//Question 12
// Object Mutation: Create a const object representing a shoppingCart with an array of items inside it. Push a new item into the array. Why does JavaScript allow this despite the const keyword?
const shoppingCart = [
  { 1: "this", 2: "That" },
  { 1: "this", 2: "That" },
  { 1: "this", 2: "That" },
];

console.log(shoppingCart);
shoppingCart.push({ 1: "this", 2: "That" });

console.log(shoppingCart);

//Question 13
//Nested Data: Create an array called company that contains two objects. Each object should represent an employee with a name and an address object (which contains city and zip). Print the city of the second employee.
const company = [
  {
    name: "A",
    address: {
      city: "ADB",
      zip: "B",
    },
  },
  {
    name: "A",
    address: {
      city: "ABC",
      zip: "B",
    },
  },
];
console.log(company[1].address.city);
console.log(company[1].address);

//Question 14
//14. Ternary Chaining: Write a nested ternary operator. If score is > 90, return "A". If not, check if score > 80, return "B". If not, return "C". (Note: While common, too much chaining is bad practice in React).
const score = 95;
const result = score > 90 ? "A" : score > 80 ? "B" : "C";
console.log(result);

//Question 15
//15. Short-Circuit Gotcha: In React, if you do const count = 0; return count && "Items exist";, it will render 0 to the screen instead of nothing. Test 0 && "Hello" in your console. Why does it output 0 instead of false or nothing?
const count = 0;
console.log(count && "Item Exist");

// 0 is a Falsy value

//Question 16
//16. Looping Objects: Create an object mapping HTTP status codes to messages (e.g., 200: "OK", 404: "Not Found"). Use a for...in loop to print a string formatted as "Status 200 means OK" for each key.
const http = {
  200: "Status Ok",
  201: "Created",
  204: "No Content",
  302: "Found",
  401: "Unauthorized",
  404: "Not Found",
  500: "Internal Server Error",
};

for (const key in http) {
  console.log(`${key} : ${http[key]}`);
}

//Question 17
//17. FizzBuzz Logic: Write a for loop from 1 to 15. If a number is divisible by 3, print "Fizz". If divisible by 5, print "Buzz". If both, print "FizzBuzz". Otherwise, print the number.
for (let i = 1; i <= 15; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//Question 18
//18. Conditional Object Properties: Create an if statement. If a variable includeDetails is true, add a details property to an existing object logEntry. If false, do nothing. Print the object.
includeDetails = true;
const logentry = {
  1: "A",
  2: "B",
};
console.log(logentry);
if (includeDetails) {
  logentry.details = "1BHK";
}
console.log(logentry);

//Question 19
//19. Scope Masking: Declare a global let name = "Global". Inside an if (true) block, declare let name = "Local" and print it. Outside the block, print name again. Observe and explain the output.
let name = "Global";
if (true) {
  let name = "local";
  console.log(name);
}
console.log(name);
// Reason - Scope of variable in the block is local as deined isnide bracket , and outside is different and is Global , it works uses concept of lexical scope and the scope chain

//Question 20
//20. Combining Loops and Conditionals: Given an array of numbers [4, -2, 9, 0, -5, 8], use a for...of loop and a ternary operator inside it to push only the positive numbers into a new array called positiveNumbers. Print the new array.
const cond = [4, -2, 9, 0, -5, 8];
const pos = [];
for (const key of cond) {
  key >= 0 ? pos.push(key) : null;
}
console.log(pos);

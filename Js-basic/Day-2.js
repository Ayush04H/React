//Question 1
//Write a traditional function called subtract that takes two numbers and returns their difference.
function Sub(a, b) {
  return a - b;
}
console.log(Sub(8, 2));

//Question 2
//Convert the subtract function from Question 1 into an Arrow Function.
const res = (a, b) => {
  return a - b;
};
console.log(res(8, 6));

//Question 3
//Write an arrow function called divide that takes two numbers and uses an implicit return (no curly braces or return keyword) to return the division result.
const res2 = (a, b) => a / b;
console.log(res2(8, 2));

//Question 4
//Create two variables: firstName and lastName. Use a template literal to print "My full name is [First] [Last]".
const firstName = "Ayush";
const lastName = "Kumar";
console.log(`My fill name is ${firstName} ${lastName}`);

//Question 5
//Use a template literal to write a 3-line poem. Print it to the console.
const poem = `
This is that,
This is that,
this is that.
`;
console.log(poem);

//Question 6
//Write the JavaScript code to select an HTML <div> that has the ID dashboard using querySelector
const dashboardselect = document.querySelector("#dashboard");

//Question 7
//Write the code to change the .textContent of the dashboard element from Question 6 to "Loading User Data...".
dashboardselect.textContent = "Testing";

//Question 8
//Write an event listener for a button (assume you already selected it as myButton) that logs "Saved!" to the console when clicked.
const buttonclick = document.querySelector("#bttn");
buttonclick.addEventListener("click", () => {
  console.log("Saved!");
});

//Question 9
//Create a variable totalHours = 40. Use a template literal to print "You worked [X] hours this week" but do the math totalHours * 5 directly inside the ${} interpolation.
totalHours = 40;
console.log(`You worked ${totalHours * 5} hours this week`);

//Question 10
//Write an arrow function with a single parameter username (without parentheses around the parameter) that returns an uppercase version of the name (username.toUpperCase()).
const username = "ayush";
const casechange = (username) => username.toUpperCase();
console.log(casechange(username));

//Question 11
//11. Implicit Ternary: Write an arrow function called checkStock that takes a number inventory. Use an implicit return and a ternary operator to return "In Stock" if inventory > 0, and "Out of Stock" if it is 0.
let inevntory = 10;
const checStock = (inevntory) => (inevntory > 0 ? "In Stock" : "Out of Stock");
console.log(checStock(inevntory));

//Question 12
//12. Nested Interpolation: Create an object user = { name: "Alex", age: 20 }. Write a template literal that checks the user's age inside the string. If age >= 18, the string should say "Alex is an adult". If under 18, "Alex is a minor".
const user = { name: "Alex", age: 20 };
if (user.age >= 18) {
  console.log(`${user.name} is an adult`);
} else {
  console.log(`${user.name} is a minor`);
}

//Question
//13. DOM Creation (Conceptual): In vanilla JS, creating a new element requires document.createElement('p'), setting its text, and using parentElement.appendChild(). Based on what you know about React, why is React's method of just writing <p>Text</p> in the code considered vastly superior?
const para = document.createElement("p");
para.textContent = "ABC";
const dashboard = document.getElementById("dashboard");
dashboard.appendChild(para);

//Question 14
//14. Template Literals with Functions: Write an arrow function getDiscount() that returns the number 15. Then, write a template literal that says "You get a [X]% discount!" by directly calling the getDiscount() function inside the ${}.
const getDiscount = () => 15;
const message = `You get a ${getDiscount()}% discount!`;
console.log(message);

//Question 15
//Event Target: When you click a button, the event listener passes an event object. Write an event listener where clicking a button logs event.target.textContent to the console. (Researching event.target is highly useful for React forms).
const button = document.getElementById("bttn");

button.addEventListener("click", (event) => {
  console.log(event.target.textContent);
});

//Question 16
//16. Array Map to UI: Given const tags = ["JS", "React", "CSS"], write a for...of loop that generates a single long string of HTML using template literals: "<li>JS</li> <li>React</li> <li>CSS</li>". (This is exactly how React renders lists, just without the manual string building).
const tags = ["JS", "React", "CSS"];
let html = "";
for (const tag of tags) {
  html += `<li>${tag}</li>`;
}
//Extra from my side to display it on html page also
document.getElementById("tagList").innerHTML = html;
console.log(html);

//Using Map insted of Loop - Question 16
// const tags = ["JS", "React", "CSS"];

// const html = tags.map((tag) => `<li>${tag}</li>`).join("");

// document.getElementById("tagList").innerHTML = html;

// console.log(html);

//Question 17
//17. NodeList vs Array: If you use document.querySelectorAll('.items'), it returns a NodeList, not a true Array. You cannot use all array methods on it immediately. How do you convert a NodeList into a standard JavaScript array? (Hint: Use the spread operator ... or Array.from()).
const nodeList = document.querySelectorAll(".items");
//Tried Both the Cases
//const arr = [...nodeList];
const arr = Array.from(nodeList);
console.log(arr);

//Question 18
//18. Function Scope Trap: Write an arrow function that contains a let count = 0. Inside that function, add a for loop that runs 3 times, adding 1 to count. Return count. Call the function twice. Does the count reset to 0 the second time you call it, or does it keep counting up? Why?
//let count = 0;
const scopetrap = () => {
  let count = 0;
  for (let i = 1; i <= 3; i++) {
    count++;
  }
  return count;
};
console.log(scopetrap());
console.log(scopetrap());

// The count variable is declared inside the function, so it has function scope. Every time the function is called, a new count variable is created and initialized to 0. When the function finishes, that local variable is destroyed. Therefore, count resets to 0 on every function call and does not keep increasing.

//Question 19
//The count variable is declared inside the function, so it has function scope. Every time the function is called, a new count variable is created and initialized to 0. When the function finishes, that local variable is destroyed. Therefore, count resets to 0 on every function call and does not keep increasing.

button.addEventListener("click", () => {
  button.classList.toggle("active-state");
});

//Question 20
//20. Combining all Day 2 skills: Write an arrow function called renderCard that takes an object profile = { name: "Sam", role: "Dev" }. The function should use an implicit return to return a template literal containing this exact HTML structure, injecting the object's data dynamically
const profile = {
  name: "Sam",
  role: "Dev",
};
const renderCard = (profile) => `
<div class="card">
  <h2>Name: ${profile.name}</h2>
  <p>Role: ${profile.role}</p>
</div>
`;
console.log(renderCard(profile));
document.getElementById("dashboard2").innerHTML = renderCard(profile);

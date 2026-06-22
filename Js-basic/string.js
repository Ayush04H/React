// Example 1: Old way vs. Template Literals
const user = "Charlie";
const items = 5;

// Old way
console.log(user + " has " + items + " items in their cart.");

// Modern Template Literal (Much cleaner)
console.log(`${user} has ${items} items in their cart.`);
// Output for both: Charlie has 5 items in their cart.

// Example 2: Math inside the string
const price = 10;
const tax = 2;
console.log(`Your total is $${price + tax}.`);
// Output: Your total is $12.

// Example 3: Ternary operator inside the string
const isMember = true;
console.log(`Shipping cost: ${isMember ? "$0" : "$10"}`);
// Output: Shipping cost: $0

// Example 4: Multi-line strings
const emailBody = `
  Hi Team,
  Please review the attached documents.
  Thanks!
`;
console.log(emailBody);
// Output prints exactly as formatted above, keeping the line breaks.

/* Assume this HTML exists on the page:
   <h1 id="main-title">Welcome</h1>
   <button class="btn-primary">Click Me</button>
*/

// Example 1: Selecting elements
const titleElement = document.querySelector("#main-title");
const buttonElement = document.querySelector(".btn-primary");
const buttonElement_2 = document.querySelector(".btn2-primary");
const originalStyles = {
  color: getComputedStyle(titleElement).color,
  background: getComputedStyle(titleElement).backgroundColor,
  fontStyle: getComputedStyle(titleElement).fontStyle,
  fontFamily: getComputedStyle(titleElement).fontFamily,
  fontSize: getComputedStyle(titleElement).fontSize,
}; // Example 2: Manipulating content
// This immediately changes the <h1> text on the screen
titleElement.innerHTML = "<h2>Welcome to JavaScript!</h2>";

// Example 3: Attaching an Event Listener
// When the button is clicked, this arrow function runs.
buttonElement.addEventListener("click", () => {
  console.log("The button was clicked!");
  titleElement.style.color = "green"; // Changes the title color to red
  titleElement.style.background = "yellow"; // Changes the title color to red
});

buttonElement_2.addEventListener("mouseenter", () => {
  titleElement.style.color = "green";
  titleElement.style.background = "yellow";
  titleElement.style.fontStyle = "italic";
  titleElement.style.fontFamily = "Arial";
  titleElement.style.fontSize = "40px";
});

buttonElement_2.addEventListener("mouseleave", () => {
  titleElement.style.color = originalStyles.color;
  titleElement.style.background = originalStyles.background;
  titleElement.style.fontStyle = originalStyles.fontStyle;
  titleElement.style.fontFamily = originalStyles.fontFamily;
  titleElement.style.fontSize = originalStyles.fontSize;
});

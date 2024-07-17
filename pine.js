// const welcomeNote = "Your are Welcome Mr";
// let firstName = "Chuks";

// alert(`${welcomeNote} ${firstName}`);

// Algorithm to welcome users
//1. Collect User names
//2. Prompt a welcome message to the user

// Logic to welcome users
// 1. Declare variables and constant values
// 2. Receive user input, using prompts
// 3. Store user input as a variable
// 4. Display welcome message, alongside the variable

// let userName = "";
// userName = prompt("What is your Name?");
// alert(`Welcome to our Page ${userName}`);

// let userAge = 0;
// let agePrompt = prompt("What's your current age?");
// let newAge = parseInt(agePrompt) + 5;
// alert(`Your Age in 5years would be ${newAge}`);

let userAge = 0;
let year = 0;
let agePrompt = prompt("What's your current age?");
let yearPrompt = prompt(
  "How many year(s) would you like to add to your current age"
);
let newAge = parseInt(agePrompt) + parseInt(yearPrompt);
alert(`Your Age in ${yearPrompt} years would be ${newAge}`);

// let heroText = document.getElementById("heroCaption");

// function addTwoNumbers() {
//   // let x = 5;
//   // let y = 6;
//   // console.log(x + y);
//   heroText.textContent = "To Build Your Website";
// }

// heroText.addEventListener("mouseover", addTwoNumbers);

// let x = 5;

// x -= 1;

// console.log(x);

// let x = "5";

// let y = x === 5;

// console.log(y);

// Objects are key value pairs
// Case Study: A Car (Has Properties, key-value pair)

// let TranieeOne = {
//   tire: "drive",
//   horn: "sound",
//   headLamp: 5,
//   color: "Blue",
//   brand: "Lexus",
// };

let User1 = {
  name: "Udeme",
  age: "30plus",
  gender: "Male",
  position: "manager",
};

let User2 = {
  name: "Lydia",
  name: "Nathaniel",
  age: 40,
  gender: "Female",
  position: "Cashier",
};

let User3 = ["Abas", 30, "Female", "CSR", "Abas"];
// console.log(User3[4]);

function addTwoNumbers(x, y) {
  let z = x + y;

  return z;
}

let note = alert(
  "Hi Good to Have you, We would love to add two numbers for you"
);
let numberOne = prompt("Provide the first Number");
let numberTwo = prompt("Provide the Second Number");

alert(`Your Final value is: ${value}`);

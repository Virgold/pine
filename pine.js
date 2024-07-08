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

// let userAge = 0;
// let year = 0;
// let agePrompt = prompt("What's your current age?");
// let yearPrompt = prompt(
//   "How many year(s) would you like to add to your current age"
// );
// let newAge = parseInt(agePrompt) + parseInt(yearPrompt);
// alert(`Your Age in ${yearPrompt} years would be ${newAge}`);

let heroText = document.getElementById("heroCaption");

function addTwoNumbers() {
  // let x = 5;
  // let y = 6;
  // console.log(x + y);
  heroText.textContent = "To Build Your Website";
}

heroText.addEventListener("mouseover", addTwoNumbers);

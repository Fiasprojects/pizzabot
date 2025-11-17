// Start here

// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

let firstName = prompt("What is your name?");
alert("Hi and welcome, " + firstName);

// Step 2 - Food choice
let foodChoice = prompt(
  "What would you like to order?\nEnter a number:\n 1 - Pizza\n 2 - Pasta\n 3 - Salad"
);
if (foodChoice == "1") {
  alert("You've chosen Pizza");
} else if (foodChoice == "2") {
  alert("You've chosen Pasta");
} else if (foodChoice == "3") {
  alert("You've chosen Salad");
} else {
  alert("Invalid number");
}

// Step 3 - Subtype choice
if (foodChoice == "1") {
  let pizzaType = prompt(
    "Select a Pizza type:\n1 - Pepperoni\n2 - Hawaii\n3 - Chicken BBQ"
  );

  if (pizzaType == "1") {
    alert("You've chosen Pepperoni Pizza!");
  } else if (pizzaType == "2") {
    alert("You've chosen Hawaii Pizza!");
  } else if (pizzaType == "3") {
    alert("You've chosen Chicken BBQ Pizza!");
  } else {
    alert("Invalid Pizza choice");
  }
} else if (foodChoice == "2") {
  let pastaType = prompt(
    "Select a Pasta type:\n1 - Carbonara\n2 - Alfredo\n3 - Bolognese"
  );

  if (pastaType == "1") {
    alert("You've chosen Carbonara!");
  } else if (pastaType == "2") {
    alert("You've chosen Alfredo!");
  } else if (pastaType == "3") {
    alert("You've chosen Bolognese!");
  } else {
    alert("Invalid Pasta choice");
  }
} else if (foodChoice == "3") {
  let saladType = prompt(
    "Select a salad type:\n1 - Greek salad\n2 - Cobb salad\n3 - Waldorf salad"
  );

  if (saladType == "1") {
    alert("You've chosen Greek salad!");
  } else if (saladType == "2") {
    alert("You've chosen Cobb salad!");
  } else if (saladType == "3") {
    alert("You've chosen Waldorf salad!");
  } else {
    alert("Invalid Salad choice");
  }
}

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here

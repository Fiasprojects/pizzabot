// Start here

// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

let firstName = prompt("What is your name?");
alert("Hi and welcome, " + firstName + "!😊");

// Step 2 - Food choice
let foodChoice = prompt(
  "What would you like to order?\nEnter a number:\n 1 - Pizza\n 2 - Pasta\n 3 - Salad"
);
let selectedFood = ""; // To store the main food type

if (foodChoice == "1") {
  selectedFood = "Pizza";
  alert("You've chosen Pizza!🍕");
} else if (foodChoice == "2") {
  selectedFood = "Pasta";
  alert("You've chosen Pasta!🍝");
} else if (foodChoice == "3") {
  selectedFood = "Salad";
  alert("You've chosen Salad!🥗");
} else {
  alert("Invalid number");
}

// Step 3 - Subtype choice
let subChoice = ""; // To store the subtype

if (foodChoice == "1") {
  let pizzaType = prompt(
    "Select a Pizza type:\n1 - Pepperoni\n2 - Hawaii\n3 - Chicken BBQ"
  );

  if (pizzaType == "1") {
    subChoice = "Pepperoni Pizza";
    alert("You've chosen Pepperoni Pizza!");
  } else if (pizzaType == "2") {
    subChoice = "Hawaii Pizza";
    alert("You've chosen Hawaii Pizza!");
  } else if (pizzaType == "3") {
    subChoice = "Chicken BBQ Pizza";
    alert("You've chosen Chicken BBQ Pizza!");
  } else {
    alert("Invalid Pizza choice");
  }
} else if (foodChoice == "2") {
  let pastaType = prompt(
    "Select a Pasta type:\n1 - Carbonara\n2 - Alfredo\n3 - Bolognese"
  );

  if (pastaType == "1") {
    subChoice = "Carbonara Pasta";
    alert("You've chosen Carbonara!");
  } else if (pastaType == "2") {
    subChoice = "Alfredo Pasta";
    alert("You've chosen Alfredo!");
  } else if (pastaType == "3") {
    subChoice = "Bolognese Pasta";
    alert("You've chosen Bolognese!");
  } else {
    alert("Invalid Pasta choice");
  }
} else if (foodChoice == "3") {
  let saladType = prompt(
    "Select a salad type:\n1 - Greek salad\n2 - Cobb salad\n3 - Waldorf salad"
  );

  if (saladType == "1") {
    subChoice = "Greek Salad";
    alert("You've chosen Greek salad!");
  } else if (saladType == "2") {
    subChoice = "Cobb Salad";
    alert("You've chosen Cobb salad!");
  } else if (saladType == "3") {
    subChoice = "Waldorf Salad";
    alert("You've chosen Waldorf salad!");
  } else {
    alert("Invalid Salad choice");
  }
}

// Step 4 - Age
let age = Number(prompt("Enter your age:"));

let size;

if (age < 18) {
  size = "child size";
} else {
  size = "adult size";
}

// Check age and alert message
alert("One " + size + " " + subChoice + " will be prepared.");

// Step 5 - Order confirmation
let confirmOrder = prompt("Do you want to confirm your order? (yes/no)");

if (confirmOrder.toLowerCase() === "yes") {
  alert(
    "Thank you " +
      firstName +
      "! Your " +
      size +
      " " +
      subChoice +
      " will be prepared shortly."
  );
} else {
  alert("No worries " + firstName + ", we hope to see you again soon!👋");
}

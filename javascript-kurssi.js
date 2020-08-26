 // Create a Variable: var - tehtävä

 var favoriteFood = "pizza";
 var numOfSlices = 8;
 console.log(favoriteFood);
 console.log(numOfSlices);

 // Create a Variable: let - tehtävä

 /*let price;
 console.log(price);  price is undefined */

 let changeMe = true;
 changeMe = false;
 console.log(changeMe);

 // Create a Variable: const - tehtävä

 const entree = "Enchiladas";
 console.log(entree);

 entree = 'Tacos' // TypeError: constant-muuttujaa ei voi uudelleen nimetä.

  // Mathematical Assignment Operators - tehtävä

 let levelUp = 10;
 let powerLevel = 9001;
 let multiplyMe = 32;
 let quarterMe = 1152;

 // Use the mathematical assignments in the space below:
 levelUp += 5;
 powerLevel -= 100;
 multiplyMe *= 11;
 quarterMe /= 4;


 // These console.log() statements below will help you check the values of the variables.
 // You do not need to edit these statements. 
 console.log('The value of levelUp:', levelUp); 
 console.log('The value of powerLevel:', powerLevel); 
 console.log('The value of multiplyMe:', multiplyMe); 
 console.log('The value of quarterMe:', quarterMe);

 //String Concatenation with Variables -tehtävä

 let favoriteAnimal = "dog";
 favoriteAnimal = "ANIMAL";
 console.log("My favorite animal: " + favoriteAnimal);

 // String Interpolation -tehtävä

 let myName = "Ramnus";
 let myCity = "Helsinki";

 console.log(`My name is ${myName}. My favorite city is ${myCity}`)

 // typeof operator -tehtävä

 let newVariable = 'Playing around with typeof.';

 console.log(typeof newVariable); // prints String
 newVariable = 1;
 console.log(typeof newVariable); // prints number

// Logical Operators - tehtävä

let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === "sleepy" && tirednessLevel > 8) {
  console.log("time to sleep");
} else {
  console.log("not bed time yet");
}

// Ternary Operator -tehtävä

let isNightTime = true;

if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}

   // = Ternary operator-muotoon käännettynä: isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

// The switch keyword -tehtävä

let groceryItem = 'papaya';

switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}

// Parameters and Arguments -tehtävä

function sayThanks(name) {
  console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}

sayThanks('Cole');

// Default Parameters -tehtävä

function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}

greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!

// Return -tehtävä

function rectangleArea(width, height) {
  if (width < 0 || height < 0) {
    return 'You need positive integers to calculate area!';
  }
  return width * height;
}

// ----- jatkuu alla toisella return-tehtävällä

function monitorCount(rows, columns) {
  return rows * columns;
}

const numOfMonitors = monitorCount(5, 4);

console.log(numOfMonitors);

// Helper Functions -tehtävä

function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);

console.log(totalCost);

//  -tehtävä



 
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
// 26.08. ---
//  Function Expressions-tehtävä 27.08. --->

    const plantNeedsWater = function(day) {
      if (day === "Wednesday") {
        return true;
      } else {
        return false;
      }
    };

    plantNeedsWater("Tuesday");

    console.log(plantNeedsWater("Tuesday")); // tulostaa false

// Arrow Functions-tehtävä

    const plantNeedsWater = function(day) {

    };
      //sama arrow funtiona:
    const plantNeedsWater = (day) => {

    };

// Concise Body Arrow Functions-tehtävä eli vieläkin yksinkertaistetumpi tapa

    const squareNum = (num) => {
      return num * num;
    };
    //---->
    const squareNum = num => num * num;
  
  // ja
      
    const plantNeedsWater = (day) => {
       return day === 'Wednesday' ? true : false;
    };
    //---->  
    const plantNeedsWater = day => day === 'Wednesday' ? true : false;

// Blocks and Scope-tehtävä

    const city = "New York City";
    function logCitySkyline() {
      let skyscraper = "Empire State Building";
      return "The stars over the " + skyscraper + " in " + city;
    };
    console.log(logCitySkyline());

// Global Scope-tehtävä

    const satellite = "The Moon";
    const galaxy = "The Milky Way";
    const stars = "North Star";

    function callMyNightSky() {
      return "Night Sky: " + satellite + ", " + stars + ", and " + galaxy;
    }

    console.log(callMyNightSky());

// Block Scope-tehtävä
 
    function logVisibleLightWaves() {
      const lightWaves = "Moonlight";
      console.log(lightWaves);
    }

    logVisibleLightWaves(); // Tulostaa "Moonlight"
    console.log(lightWaves); // Error koska lightWaves on blokin sisällä ja yritän kutsua sitä sen ulkopuolelta.

// Scope Pollution-tehtävä

    const satellite = 'The Moon'; // globaali
    const galaxy = 'The Milky Way'; // globaali
    let stars = 'North Star';   // globaali

    const callMyNightSky = () => {
      stars = "Sirius"; // muuttaa stars:in globaalisti "North Star":sta "Sirius":ksi. KÄYTÄ "let stars =", niin globaali stars ei muutu.
      return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
    };

    console.log(callMyNightSky());
    console.log(stars);

// Practice Good Scoping-tehtävä

    const logVisibleLightWaves = () => {
      let lightWaves = 'Moonlight';
      let region = 'The Arctic';
      // Add if statement here:
      if (region === "The Arctic") {
        let lightWaves = "Northern Lights";
        console.log(lightWaves);
      }
      console.log(lightWaves);
    };

    logVisibleLightWaves(); // Kutsuu logVisibleLightWaves -funktiota. Ilman tätä mitään ei tulostu.

// Arrays: Accessing Elements-tehtävä

    const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

    const listItem = famousSayings[0];

    console.log(famousSayings[2]);  // printtaa 'Where there is love there is life.'

    console.log(famousSayings[3]); // Ei printtaa mitään; "undefined".

// Update Elements-tehtävä

    let groceryList = ['bread', 'tomatoes', 'milk'];

    groceryList[1] = "avocados";  // "tomatoes" --> "avocados"

// Arrays with let and const-tehtävä

    let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

    const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

    condiments[0] = "Mayo";
    console.log(condiments); // Mayo + alkuperäiset kolme muuta

    condiments = ["Mayo"];

    utensils[3] = "Spoon";

    console.log(utensils); // Spork --> Spoon
    console.log(condiments); // pelkkä Mayo

// The .length property-tehtävä

    const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];

    console.log(objectives.length);

// The .push() Method

    const chores = ['wash dishes', 'do laundry', 'take out trash'];

    chores.push("learn code", "eat healthy");  // Lisää uudet iteemit listalle

    console.log(chores);

// The .pop() Method

    const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

    chores.pop(); // poistaa viimeisen iteemin listalta

    console.log(chores);

// More Array Methods

    const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

    groceryList.shift();  // poistaa ensimmäisen iteemin listalta
    console.log(groceryList);

    groceryList.unshift("popcorn"); // lisää listan alkuun iteemin
    console.log(groceryList);

    console.log(groceryList.slice(1, 4)); // valitsee listalta sarjan iteemejä indexin 1 ja 4 väliltä. i1 lasketaan mukaan, mutta i4 ei. Eli se valitsee listan iteemit 1,2,3.

    console.log(groceryList);

    const pastaIndex = groceryList.indexOf("pasta");
    console.log(pastaIndex);

// Arrays and Functions

    const concept = ['arrays', 'can', 'be', 'mutated'];

    function changeArr(arr){
      arr[3] = 'MUTATED';    // muuttaa jonkin listan i3:n "MUTATED":ksi
    }

    changeArr(concept);  // concept-lista syötetään changeArr-funktioon, joka muuttaa neljännen iteemin.

    console.log(concept);

    function removeElement(newArr){
      newArr.pop();                 // funktio, joka poistaa jonkin listan viimeisen iteemin.
    }

    removeElement(concept);  // concept-lista syötetään remove-Element-funktioon, joka poistaa listalta vikan iteemin.
    console.log(concept);

// Nested Arrays

    const numberClusters = [[1, 2], [3, 4], [5, 6]]; // kolme listaelementtiä, joissa jokaisessa kaksi listaelementtiä.
    const target = numberClusters[2][1]; // Näin pääsee käsiksi elmeenttiin "6", joka sijaitsee i2-listan kohdassa i1.

// --- 27.08. päättyy tähän. ---
// --- 28.08. Alkaa tästä. ---

// The For Loop

    for (let counter = 0; counter < 4; counter++) {
      console.log(counter);                         // Printtaa 0 1 2 3
    }

// Looping in Reverse

    for (let counter = 3; counter >= 0; counter--){
      console.log(counter);                 // Printtaa 3 2 1 0
    }

// Looping through Arrays

    const vacationSpots = ['Bali', 'Paris', 'Tulum'];

    // Write your code below
    for (let i = 0; i < vacationSpots.length; i++) {
      console.log("I would love to visit " + vacationSpots[i]);
    }

// Nested Loops

    const myArray = [6, 19, 20];
    const yourArray = [19, 81, 2];
    for (let i = 0; i < myArray.length; i++) {
      for (let j = 0; j < yourArray.length; j++) {
        if (myArray[i] === yourArray[j]) {
          console.log('Both loops have the number: ' + yourArray[j])
        }
      }
    };

    // ----

    const bobsFollowers = ["Pena", "Ykä", "Stiku", "Peku"];
    const tinasFollowers = ["Maikkis", "Peku", "Pena"];
    const mutualFollowers = [];

    for (let i = 0; i < bobsFollowers.length; i++) {
      for (let j = 0; j < tinasFollowers.length; j++) {
        if (bobsFollowers[i] === tinasFollowers[j]) {
          mutualFollowers.push(tinasFollowers[j]);
        }
      }
    }
    console.log(mutualFollowers);   // tulostaa ["Pena", "Peku"]

// The While Loop

    const cards = ['diamond', 'spade', 'heart', 'club'];
    let currentCard;
    // Write your code below

    while (currentCard != "spade") {
      currentCard = cards[Math.floor(Math.random()*4)]; // antaa satunnaisen numeron väliltä 0-3.
      console.log(currentCard);
    }

// Do...While Statements

    let cupsOfSugarNeeded = 0;
    let cupsAdded = 0;

    do {
      cupsAdded++;
    } while (cupsAdded < cupsOfSugarNeeded);

    console.log(cupsAdded); // printtaa 1, koska do...while suorittaa do:n alla olevan koodin ainakin kerran. Tässä tapauksessa kasvattaa cupsAddedia yhdellä.

// The break Keyword

    const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

    for (let i = 0; i < rapperArray.length; i++) {
      console.log(rapperArray[i]);
      if (rapperArray[i] === "Notorious B.I.G.") {  // MUISTA === eikä =
      break;
      }
    } 
    console.log("And if you don't know, now you know.");

// Functions as Data

    const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
      for(let i = 1; i <= 1000000; i++) {
        if ( (2 + 2) != 4) {
          console.log('Something has gone very wrong :( ');
        }
      }
    }
    const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
    is2p2(); // lyhyempi nimi, helpompi lukea
    
    console.log(is2p2.name);  // jos unohdat alkuperäisen nimen

// Functions as Parameters (ei jatkoon 1/5)

    const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
      for(let i = 1; i <= 1000000; i++) {
        if ( (2 + 2) != 4) {
          console.log('Something has gone very wrong :( ');
        }
      }
    };

    const addTwo = num => num + 2;

    const timeFuncRuntime = funcParameter => {
      let t1 = Date.now();
      funcParameter();
      let t2 = Date.now();
      return t2 - t1;
    };

    // Write your code below
    const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

    const checkConsistentOutput = (func, val) => {
      let firstTry = func(val);
      let secondTry = func(val);
      if (firstTry === secondTry) {
        return firstTry;
      } else {
        return "This function returned inconsistent results";
      }
    }

    checkConsistentOutput(addTwo, 2);

//



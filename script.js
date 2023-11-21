const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

//Check if all numbers are divisible by 5. Cache the result in a variable.
const divisible = (n1 % 5) + ( n2 % 5) + (n3 % 5) + (n4 % 5) == 0;
console.log(`All the numbers are divisible by 5: ${divisible}`);

//Check if the first number is larger than the last. Cache the result in a variable.
console.log(`The first number is lager than the last: ${n1 > n4}`);

/* Accomplish the following arithmetic chain:
Subtract the first number from the second number.
Multiply the result by the third number.
Find the remainder of dividing the result by the fourth number. */
const subtract = n2 - n1;
const numTwo = subtract * n3;
const remainder = numTwo % n4;

console.log(`The remainder of diving the result by the fourth number is: ${remainder}`);


const isUnder25 = n1 <= 25 || n2 <= 25 || n3 <= 25 || n4 <= 25;
console.log(`The numbers are under 25: ${isUnder25}`);


/* Part 2 
The distance of the trip, in total, is 1,500 miles.
Your car’s fuel efficiency is as follows:
- At 55 miles per hour, you get 30 miles per gallon.
- At 60 miles per hour, you get 28 miles per gallon.
- At 75 miles per hour, you get 23 miles per gallon.
- You have a fuel budget of $175.
- The average cost of fuel is $3 per gallon.
*/

const totalDistance = 1500;
const fuelBudget = 175;
const fuelCostPerGallon = 3;

//How many gallons of fuel will you need for the entire trip?
const gallonsOfFuelFor55mph = totalDistance / 30;
const gallonsOfFuelFor60mph = totalDistance / 28;
const gallonsOfFuelFor75mph = totalDistance / 23;

console.log(`Gallons of fuel needed for 55mph: ${gallonsOfFuelFor55mph}`);
console.log(`Gallons of fuel needed for 60mph: ${gallonsOfFuelFor60mph}`);
console.log(`Gallons of fuel needed for 75mph: ${gallonsOfFuelFor75mph}`);

//Will your budget be enough to cover the fuel expense?
const isBudgetEnoughFor55mph = (fuelCostPerGallon * gallonsOfFuelFor55mph) <= fuelBudget;
const isBudgetEnoughFor60mph = (fuelCostPerGallon * gallonsOfFuelFor60mph) <= fuelBudget;
const isBudgetEnoughFor75mph = (fuelCostPerGallon * gallonsOfFuelFor75mph) <= fuelBudget;

console.log(`Will your budget be enough to cover the fuel expense for 55mph? ${isBudgetEnoughFor55mph}`);
console.log(`Will your budget be enough to cover the fuel expense for 60mph? ${isBudgetEnoughFor60mph}`);
console.log(`Will your budget be enough to cover the fuel expense for 75mph? ${isBudgetEnoughFor75mph}`);


//How long will the trip take, in hours?
const tripTimeFor55mph = totalDistance / 55;
const tripTimeFor60mph = totalDistance / 60;
const tripTimeFor75mph = totalDistance / 75;

console.log(`How long will the trip take, in hours at 55mph? ${tripTimeFor55mph}`);
console.log(`How long will the trip take, in hours at 60mph? ${tripTimeFor60mph}`);
console.log(`How long will the trip take, in hours at 75mph? ${tripTimeFor75mph}`);

//Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?

console.log("60mph makes the most sense.")
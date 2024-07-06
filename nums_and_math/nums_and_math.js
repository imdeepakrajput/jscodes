const score = 500;
// console.log(score);


const balance = new Number(200);
// // console.log(balance);

// console.log(balance.toString().length);   // It gives a string value and it will count the characters aslo because we have length in it.
// console.log(balance.toFixed(2));          // It gives you the precision value after the point.
// console.log(balance.toFixed(1));          // same (precision value).

const otherNumber = 23.8966;
// console.log(otherNumber.toPrecision(3));  // checks the precise value and then gives you a round off value.


const hundreds = 10000000;
// console.log(hundreds.toLocaleString());          // It gives you commas in your value in usd standard.
// console.log(hundreds.toLocaleString('en-IN'));   // It gives you commas in your value in indian standard.


// _______________________________________MATHS___________________________________________________________


// console.log(Math);
// console.log(Math.abs(-5));                // It changes the negative into positive value.
// console.log(Math.abs(4));                 // Positive value will be remain same.
// console.log(Math.round(6.34));            // This will give you a round off value of a number.
// console.log(Math.round(6.78));            // same (This will give you a round off value of a number).
// console.log(Math.ceil(4.2));              // This will take the top value, if a number is more than in decimal.
// console.log(Math.floor(4.9));             // This will take the lowest value, if a number is more than in decimal. 
// console.log(Math.min(3,4,5,2,0));            // When you want to find the minimum value.
// console.log(Math.max(3,4,5,6,7));            // When you want to find the maximum value.


console.log(Math.random());                          // This will give you the random value between 0 and 1.
console.log((Math.random() * 10) + 1);               // From this you can create the other number values.
console.log(Math.floor(Math.random() * 10) + 1);     // From this you can get a floor value.


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1))+ min); 
console.log("deepak")

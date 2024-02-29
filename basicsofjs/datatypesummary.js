// # primitive data type

// we have 7 primitve data types : 

/* 

1. String
2. Number
3. Boolean
4. Null
5. Undefine
6. Symble
7. Bigint

 */

const score = 100
const scoreValue = 103

const isLoggedIn = false
const outSideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 128764835843834n

console.log(typeof bigNumber);

// Reference type or non-primitive data type :

/* 

1. Array
2. Object
3. Functions

*/


// Example of arrays, objects, and functions


const heros = ["shaktiman", "spiderman", "ironman"];

let objects = {
                name : "Hulalal",
                age : 22,
}

const myFunction = function(){
    console.log("Hello Me");
}


console.log(typeof myFunction);

// Go to this link and learn =>  https://262.ecma-international.org/5.1/#sec-11.4.3
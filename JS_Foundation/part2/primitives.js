// let score = 100;
// console.log(typeof score); // number

// let newScore = new Number(120);
// console.log(newScore); // [Number: 120]
// console.log(typeof newScore); // object
// console.log(newScore.valueOf()); // 120

// // null and undefined

// let firstName;
// let middleName = undefined;
// let lastName = null;

// console.table({firstName: firstName, middleName: middleName, lastName: lastName}); //undefined, undefined, null



// // Strings
// let str1 = "hello"; // valid declaration
// let str2 = 'hello'; // valid declaration
// let user = "John Doe";
// let greetMessage1 = str1 + " sam"; // str1 + " " + "sam"
// console.log(greetMessage1); // hello sam

// // using ``
// let greetMessage2 = `${str1} ${user}`;
// console.log(greetMessage2); // hello John Doe

let marks1 = 50;
let marks2 = 70;
let marks3 = 90;

let marks = `Your percentage is ${((marks1 + marks2 + marks3)*100)/ 300}`;
console.log(marks); // your percentage is 70


// Symbol
let sym1 = Symbol("google");
let sym2 = Symbol("google");
console.log(sym1 == sym2); // false

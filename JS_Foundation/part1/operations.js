// Arithmetic operations

// using refernce to variables
let score = 95;
let bonus = 35;
let totalScore = score + bonus;
console.log(totalScore); //130

// direct operations
let add = 23 + 34; //57
let sub = 77 - 29; //48
let prod = 6 * 15; //90
let div = 54 / 4; // 13.5
let remainder = 25 % 4; //1

console.table({add: add, sub: sub, prod: prod, div: div, remainder: remainder});


// increment decrement
let num1 = 45;
console.log(num1++); //45

let num2 = 56;
console.log(++num2); //57

let num3 = 67;
console.log(num3--); //67

let num4 = 243;
console.log(--num4); //242


// Comparison operations
let marks1 = 89;
let marks2 = 77;
let marks3 = 89;
let marks4 = 91;

let name = "sam";

console.log(marks1 == marks3); //true
console.log(marks1 <= marks2); // false
console.log(marks4 > marks3); //true
console.log(marks1 === name); //type check => false, marks1 is number and name a string, hence false

// Logical operations => "&&", "||", "!"

let isLoggedIn = true;
let isSubscriber = false;

if(isLoggedIn && isSubscriber){  // this block gets executed if and only if both the conditions are true
    console.log("Eligible for course deadline extention");
}
else { // this block of code gets executed is one or both conditions are false
    console.log("Not eligible for course extension");
    
}


let phoneLogin = false;
let emailLogin = false;

if(phoneLogin || emailLogin){ //executed if any one or both conditions are true
    console.log("take me to the home page");
}
else{ //executed if both conditions are false
    console.log("use phone or email to login");
    
}

// Assignment operations

temp = 5;

// temp = temp + 5;
temp += 5;
console.log(temp); // 10

// 1. Check which number is greater

    let num1 = 9;
    let num2 = 1;

    if(num1 > num2){
        console.log("num1 is greater than num2");   // this gets printed 
    } else {
        console.log("num2 is greater than num1");
        
    }

// 2. check if variable is number or not using conditions

    let age = 32;
    if(typeof age === "number"){
        console.log("given variable is a number");        
    }   else {
        console.log("variable is not a number");        
    }

// 3. check given variable is a "String" or not.

    let score = 97;
    if(typeof score === "string"){
        console.log("variable is a string");        
    } else{
        console.log("variable is not a string");        
    }

// 4. check if a given variable is array or not

    let arr = [];
    if (typeof arr === "object") {
      console.log("variable is a array");
    } else {
      console.log("variable is not a array");
    }

// 4. check array is empty or not

    let container = [];
    if(container.length == 0){
        console.log("array is empty");        
    }   else{
        console.log("array is not empty");        
    }

// 5. check boolean or not

    let isLoggedIn = false;
    if(isLoggedIn){
        console.log("user is logged in");
    } else{
        console.log("user is not logged in");
    }
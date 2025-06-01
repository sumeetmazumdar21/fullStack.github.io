 /* 
    1. Write a 'while' loop that calculates the sum of all numbers from 1 tp 5 and stores the result in a variable named 'sum'.
*/

    let num = 1;
    let sum = 0;
    while(num <= 5){
        sum += num;
        num++;
    }
    console.log(sum);    // 15

/* 
    2. Write a 'while' loop that counts down from 5 to 1 and stores the numbers in an array named 'countdown'.
*/

    let num1 = 5;
    let countdown = new Array();

    while(num1 >= 1){
        countdown.push(num1);
        num1--;
    }

    console.log(countdown); // [ 5, 4, 3, 2, 1 ]
    

/* 
    3. Write a `do while` loop that prompts a user to enter their favorite city until they enter "stop". Store each city in an array named "favoriteCities".
*/

// As `prompt` is not supported by node, we run the following piece of code in browser console, using inspect.
    
    let favoriteCities = [];
    let city;

    do {
        city = prompt(`Enter your favourite city (type "stop" to finish)`);
        if(city !== "stop"){
            favoriteCities.push(city);
        }
    } while (city !== "stop");

    console.log(favoriteCities); // ['bengaluru', 'new delhi', 'kolkata', 'mumbai', 'pune']
    
/* 
    4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.
*/

    let num2 = 1;
    let total = 0;

    do {
        total += num2;
        num2++;
    } while (num2 < 4);

    console.log(total);
    

/* 
    5. Write a `for` loop that multiplies each element in the array `[2, 4, 6]` by 2 and stores the results in a new array `productArray`.
*/

    let arr = [2, 4, 6];
    let productArray = [];
    let prod;
    for(let i = 0; i < arr.length; i++){
        // prod = arr[i] * 2;
           //   productArray.push(prod);

        productArray.push(arr[i] * 2);
    }

//    for (let j = 0; j < productArray.length; j++) {
//         console.log(productArray[j]);            
//    }  // 4 8 12
        console.log(productArray); // [4, 8, 12]
        
/* 
    6. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`.
*/

    let cities = ["Paris", "New York", "Tokyo", "London"];
    let cityList = [];

    for (let i = 0; i < cities.length; i++) {
        cityList.push(cities[i]);        
    }

    console.log(cityList); //  [ 'Paris', 'New York', 'Tokyo', 'London' ]
    

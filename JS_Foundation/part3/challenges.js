/* 
    1. Write a `for` loop that loops through the array `["delhi", "gaya", "vizag", "stop", "shillong"]` and stops the loop when encounters "stop".
    Store all citites before "stop" in a new array named "selectedCity".
*/

        let city = ["delhi", "gaya", "vizag", "stop", "shillong"];
        let selectedCity = [];

        for (let i = 0; i < city.length; i++) {
        if (city[i] === "stop") {
            break;
        }
        selectedCity.push(city[i]);
        }

        console.log(selectedCity); // [ 'delhi', 'gaya', 'vizag' ]

/* 
    2. Write a `for` loop that loops through the array `["pizza", "pasta", "burger", "noodles", "hotdog", "biryani"]` and skips "noodles". Store the rest elements in a new array named "availableDishes".
*/

        let dish = ["pizza", "pasta", "burger", "noodles", "hotdog", "biryani"];
        let availableDishes = [];

        for (let i = 0; i < dish.length; i++) {
        if (dish[i] === "noodles") {
            continue;
        }
        availableDishes.push(dish[i]);
        }
        console.log(availableDishes); // [ 'pizza', 'pasta', 'burger', 'hotdog', 'biryani' ]

/* 
    3. Use a `for-of` loop to iterate through the array '[1, 2, 3, 4, 5]' and stop on reaching `4`. Store the numbers upto `4` in another array `stopAtFour`.
*/

        let numbers = [1, 2, 3, 4, 5, 6, 7];
        let stopAtFour = [];
        for (let num of numbers) {
        if (num === 4) {
            continue;
        }
        stopAtFour.push(num);
        }
        console.log(stopAtFour); // [ 1, 2, 3 ]

/* 
    4. Use a `for-of` loop to iterate through the array '[1, 2, 3, 4, 5]' and skip on reaching `4`. Store the numbers except `4` in another array `skipFour`.
*/

        let numbers = [1, 2, 3, 4, 5, 6, 7, 4, 8, 9, 4, 15];
        let skipFour = [];
        for (let num of numbers) {
        if (num === 4) {
            continue;
        }
        skipFour.push(num);
        }
        console.log(skipFour); // [
        //     1, 2, 3,  5, 6,
        //     7, 8, 9, 15
        //   ]

/* 
    5. Use a `for-in` loop to loop through an object containing city populations.
         Stop the loop when the population of "Berlin" is found and store all previous cities' populatin in a new object named `updatedPopulationList`.
         
            let cityPopulation = {
                "London" : 8900000,
                "New York" : 87654000,
                "Paris" : 45987658,
                "Berlin": 239880402
            };
*/

            let cityPopulation = {
            London: 8900000,
            "New York": 87654000,
            Paris: 45987658,
            Berlin: 239880402,
            };

            let updatedPopulationList = {};

            for (city in cityPopulation) {
            if (city === "Berlin") {
                break;
            }
            // key : value
            updatedPopulationList[city] = cityPopulation[city];
            }

            console.log(updatedPopulationList); // { London: 8900000, 'New York': 87654000, Paris: 45987658 }

/* 
    6. Use a `for-in` loop to loop through an object containing city populations. Skip any city with a population below 3 million and store the rest in a new object named `metroCities`.
*/

            let cities = {
            London: 4500000,
            "New York": 17654000,
            Paris: 2348000,
            Berlin: 4000500,
            Sydney: 6070000,
            };

            let metroCities = {};

            for (const city in cities) {
            if (cities[city] < 3000000) {
                continue;
            }

            metroCities[city] = cities[city];
            }

            console.log(metroCities);
            // {
            //     London: 4500000,
            //     'New York': 17654000,
            //     Berlin: 4000500,
            //     Sydney: 6070000
            //   }

/* 
    7. Write a `forEach` loop that iterates through an array named `temperature` conatining elements `[10, 15, 20, 25, 30, 35]`. Stop the iteration when `30` is encountered and store all previous values in an array named 'winterTemp'.
*/

            let temperature = [10, 15, 20, 25, 30, 35];
            let winterTemp = [];

            temperature.forEach(function (temp) {
            if (temp >= 30) {
                return;
            }
            winterTemp.push(temp);
            });

            console.log(winterTemp); // [ 10, 15, 20, 25 ]

/* 
    8. Write a `forEach` loop that iterates through the array `["Berlin", "Sydney", "Tokyo", "Istanbul", "London"]` and skips "Istanbul", storing the rest cities in a new array named `globalCitites`.
*/

            let cities = ["Berlin", "Sydney", "Tokyo", "Istanbul", "London"];
            let globalCitites = [];

            cities.forEach((city) => {
            if (city === "Istanbul") {
                return;
            }
            globalCitites.push(city);
            });

            console.log(globalCitites); // [ 'Berlin', 'Sydney', 'Tokyo', 'London' ]

/* 
    9. Write a `forEach` loop that iterates through the array `[2, 5, 7, 9, 11, 7, 13, 7, 23]` and skips the value `7` and multiply the rest by 2. Store the result in a new array named `doubledPrimes`.
*/
            let primes = [2, 3, 5, 7, 9, 11, 7, 13, 7, 17, 7, 19, 23];
            let doubledPrimes = [];

            primes.forEach((primeNo) => {
            if (primeNo === 7) {
                return;
            }
            doubledPrimes.push(primeNo * 2);
            });

            console.log(doubledPrimes); // [4, 6, 10, 18, 22, 26, 34, 38, 46]

/*     
    10. Use a `for-of` loop to iterate through the array `["John", "Sam", "Samuel", "Johny", "Marie", "Martha", "Bob", "Kat"]`. Skip when the length of a name is greater than 4 letters and store the rest in a new array named `shortNames`.
*/
            let names = ["John", "Sam", "Samuel", "Johny", "Marie", "Martha", "Bob", "Kat"];

            let shortNames = [];
            let bigNames = [];

            function longNames(n) {
            bigNames.push(n);
            }

            for (const name of names) {
            if (name.length > 4) {
                longNames(name);
                continue;
            }
            shortNames.push(name);
            }

            console.log(shortNames); // [ 'John', 'Sam', 'Bob', 'Kat' ]
            console.log(bigNames); // [ 'Samuel', 'Johny', 'Marie', 'Martha' ]

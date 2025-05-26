/* 
    1. Declare an array named `subjects` that contains subjects like `english`, `hindi`, `maths`, `science`, `computer`.
    Access the first Element of the array and store it in a variable named `primarySubject`.
 */

    let subjects = [`english`, `hindi`, `science`, `maths`, `computer`];
    let primarySubject = subjects[0];
    console.log(primarySubject);
 
/* 
    2. Declare an array named `cities` that contains cities named `london`, `delhi`, `sydney`, `amsterdam`, `bengaluru`.
    Change the third entry to `washington-dc`.
 */

    let cities = new Array("london", "delhi", "sydney", "amsterdam", "bengaluru");
    cities[2] = "washington-dc"
    console.log(cities);
    
/* 
    3. Declare an array named `citiesVisited` that contains cities named `london`, `delhi`, `bengaluru`.
    Add "mumbai" to the array using the `push` method
 */
    let citiesVisited = [`london`, `delhi`, `bengaluru`];
    citiesVisited.push(`mumbai`);
    console.log(citiesVisited); // [ 'london', 'delhi', 'bengaluru', 'mumbai' ]
    console.log(citiesVisited.push(`mumbai`)); // 5
    console.log(citiesVisited); // [ 'london', 'delhi', 'bengaluru', 'mumbai', 'mumbai' ]


/* 
    4. Array named 'orders' containing `shorts`, `trousers`, `tshirt`, `sweater`, `jacket`.
    Remove the last element of the array using `pop` method and store it in a variable named `lastOrder`.
 */
    let orders = [`shorts`, `trousers`, `tshirt`, `sweater`, `jacket`];
    let lastOrder = orders.pop();
    console.log(lastOrder); // jacket 
    console.log(orders); // [ 'shorts', 'trousers', 'tshirt', 'sweater' ]
    
/*

*/
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
    5. Given array named `languages` containing elements namely `java`, `javascript`, `c++`. Create a `soft copy` of this array into an array named `softCopyLanguages`.
*/

    let languages = [`java`, `javascript`, `c++`];
    let softCopyLanguages = languages; // creates a  "soft-copy"
    console.log(languages); // [ 'java', 'javascript', 'c++' ]
    console.log(softCopyLanguages); // [ 'java', 'javascript', 'c++' ]
    languages.pop();
    console.log(languages); // [ 'java', 'javascript' ]
    console.log(softCopyLanguages); // [ 'java', 'javascript' ]

    /* Changes made to original array reflects in the duplicate array as well. This is called elements being "soft-copied" */
    
/* 
    6. Given array named `techCities` containing elements namely `hyderabad`, `bengaluru`, `chennai`. Create a `hard copy` of this array into an array named `hardCopyCities`.
 */

    let techCities = [`hyderabad`, `bengaluru`, `chennai`];
    let hardCopyCities = [...techCities]; // this creates a 'hard-copy' of the array
    // let hardCopyCities = techCities.slice(); // another way of creating "hard-copy"
    techCities.pop();
    console.log(techCities); //  [ 'hyderabad', 'bengaluru' ]
    console.log(hardCopyCities); // [ 'hyderabad', 'bengaluru', 'chennai' ]
    
/* 
    7. You have two arrays: "gravies" containing `tikka masala` and `butter masala` and "breads" containing elements `naan`, `kerala parota`.
    Merge these two arrays into a new array named "mainCourse". 
 */
    
    let gravies = ["tikka masala", "butter masala"];
    let breads = ["naan", "kerala-parota"];

    // let mainCourse = [gravies, breads]; // [ [ 'tikka masala', 'butter masala' ], [ 'naan', 'kerala-parota' ] ] => array within array

    // let mainCourse = gravies.concat(breads); // [ 'tikka masala', 'butter masala', 'naan', 'kerala-parota' ] => merges two arrays

    let mainCourse = [...gravies, ...breads]; // [ 'tikka masala', 'butter masala', 'naan', 'kerala-parota' ]  => merges two arrays
    console.log(mainCourse);
    
/* 
    8. You have an array named "stationery" containing elements `pen`, `pencil`, `eraser`, `sharpner`, `ruler`, `crayons`.
    Check if "crayons" is in the array and store the result in a variable named 'isCrayonsPresent'.
 */
    
    let stationery = [`pen`, `pencil`, `eraser`, `sharpner`, `ruler`, `crayons`];
    let isCrayonsPresent = stationery.includes("crayons");
    console.log(isCrayonsPresent); // true
    
    
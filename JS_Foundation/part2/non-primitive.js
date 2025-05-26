// Objects:
    
    const username = { 
        firstName: "sam",
        isLoggedIn: true,
        "pet name": "raj"
    }

    username.firstName = "sumeet";
    username.lastName = "mazumdar"; // lastName not declared in object declaration

    console.log(username); //{ firstName: 'sumeet', isLoggedIn: 'true', lastName: 'mazumdar' }
    console.log(typeof (username)); // object
    console.log(username.lastName); // mazumdar
    console.log(username['pet name']); // raj
    
    
// Arrays:

    let subjects = ["physics", "chemistry", "maths", "hindi", "english"];
    console.log(subjects[2]); // maths
    console.log(subjects.indexOf("english")); // 4
    
    
// type conversion

    console.log(1 + "2"); // 12
    console.log("1" + 2); // 12

    console.log(true + 1); // 2
    console.log(false + 1); // 1
     
    console.log(Number(true)); // 1
    console.log(Number(false)); // 0

    console.log(undefined + 1); // NaN     
    console.log(Number(undefined)); // NaN
    console.log(typeof Number(undefined)); // number
    console.log(typeof undefined); // undefined

    
    console.log(null + 1); // 1     
    console.log(Number(null)); // 0
    console.log(typeof Number(null)); // number
    console.log(typeof null); // object
    
    
    
    
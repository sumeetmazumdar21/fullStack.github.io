let computer = {cpu: 12};
let dell = {
            processor: "amd",
            __proto__: computer,
            };
let lenovo = {ram: 32};

console.log(`computer `, computer.__proto__); // computer  [Object: null prototype] {}
console.log(`dell `, dell.__proto__); // dell  { cpu: 12 }

/* =============================================================== */

let genericCar = { tyres: 4};

let tesla = {
    driver: "AI",
}

console.log(`tesla`, tesla); // tesla { driver: 'AI' }

// Use `Object.setPrototypeOf(injectedTo, injectedFrom)
Object.setPrototypeOf(tesla, genericCar);


console.log(`tesla`, genericCar); // tesla { tyres: 4 }
console.log(`tesla`, tesla.tyres); // tesla 4

// to get access of properties injected by setPrototype, use `Object.getPrototypeOf();
console.log(`tesla`, Object.getPrototypeOf(tesla)); // tesla { tyres: 4 }

console.log(`tesla `, tesla.hasOwnProperty('driver')); // tesla  true
console.log(`tesla `, tesla.hasOwnProperty('tyres')); // tesla  false
console.log(`genericCar `, genericCar.hasOwnProperty('driver')); // genericCar  false
console.log(`genericCar `, genericCar.hasOwnProperty('tyres')); // genericCar  true



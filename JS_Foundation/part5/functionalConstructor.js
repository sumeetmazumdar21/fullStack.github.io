function cookMe (dishName, taste){
    this.dishName = dishName;
    this.taste = taste;
    this.description = () => {
        return `${this.dishName} tastes ${this.taste}`;
    }
}

let noodles = new cookMe("ramen", "spicy");
// console.log(noodles); // 
    /* cookMe {
        dishName: 'ramen',
        taste: 'spicy',
        description: [Function (anonymous)]
    }*/
// console.log(noodles.description()); // ramen tastes spicy

// =================================================================

function Animal(species) {
    this.species = species;
}

Animal.prototype.type = function(foodHabit) {
    this.foodHabit = foodHabit;
    return `${this.species} is a ${this.foodHabit}`;
}

let dog = new Animal("dog");
// console.log(dog.type("omnivore")); // dog is a omnivore

let cow = new Animal("cow");
// console.log(cow.type("herbivore")); // cow is a herbivore

// =================================================================

function subway(name){

    // error block
    if(!new.target){
        throw new Error(`function must be called using the "new" keyword`);        
    }

    this.name = name;
}

let wraps = new subway("wraps");
let burger = subway("burger"); // Error: function must be called using the "new" keyword
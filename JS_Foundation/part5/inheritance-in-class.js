class Vehicle{
    constructor(company, model){
        this.company = company;
        this.model = model;
    }

    description (){
        return `${this.model} is manufactured by ${this.company}`;
    }
}

class Car extends Vehicle{
    details (type){
        this.type = type;
        return `${this.model} is a ${this.type}`
    }
}

class Truck extends Vehicle{
    details (type){
        this.type = type;
        return `${this.model} is a ${this.type} truck`;
    }
}

let innova = new Car("toyota", "innova");
console.log(innova.description()); // innova is manufactured by toyota
console.log(innova.details("suv")); // innova is a suv

let veero = new Truck("mahindra", "veero");
console.log(veero.description()); // veero is manufactured by mahindra
console.log(veero.details("commercial")); // veero is a commercial truck


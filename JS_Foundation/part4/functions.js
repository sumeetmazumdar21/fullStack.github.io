/* 
    1. Write a function named `makeFood` that takes one parameter, `foodType` and returns a string like "preparing noodles" when called with `noodles`.
    Store the result in a variable named `foodOrder`.
*/

        // function makeFood(foodType){
        //     return `preparing ${foodType}`;
        // }

        // let foodOrder = makeFood('noodles'); // preparing noodles
        // console.log(foodOrder);

        // foodOrder = makeFood("pasta");
        // console.log(foodOrder); // preparing pasta
        
        
/* 
    2. Creaate a function named `orderFood` that takes one parameter `foodType`. Inside this function, create another function named    `confirmOrder` that returns a message like `"indian thali order confirmed"`.
    Call `confirmOrder` from within `orderFood` and return the result.
*/

    // function orderFood(foodType){
    //     function confirmOrder(foodName){
    //         return `${foodName} order confirmed.`
    //     }
    //      return confirmOrder(foodType);
    // }

    // let orderConfirmationMessage = orderFood("Indian Thali");
    // console.log(orderConfirmationMessage); // Indian Thali order confirmed.
    // orderConfirmationMessage = orderFood("Idli vada");
    // console.log(orderConfirmationMessage); // Idli vada order confirmed.

/* 
    3. Write an `arrow function` named `calculateTotal` that takes two parameters: `price` and `quantity`. The function should return the total cost by multiplying `price` and `quantity`.
    Store the result in a variable named `totalCost`.
*/  
    //  Arrow function: 
    //  const functionName = () => {}

    const calculateTotal = (price, quantity) => {
        return (price * quantity);
    }
    let totalCost = calculateTotal (499, 20);
    console.log(`Total cost : ${totalCost}`); // Total cost : 9980
    
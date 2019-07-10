// Write a program that has a shopper object. Include at least one property with each of the following data types as values to the properties:

// String
// Number
// Boolean
// Function (called a "method" when it's inside an object like this. Check out an example for help writing your own)
// In addition, you should add a groceryCart property to your object, which should be an Array of items that can commonly be found in a grocery cart.

var shopper = {
    name: "Jonathan",
    rewardPoints: 87,
    registered: true,
    addPoints: function(value) {
        this.rewardPoints += value
    },
    groceryCart: [
        "milk",
        "eggs",
        "cheese",
        "cereal"
    ]
}

console.log(shopper.name)
console.log(shopper.rewardPoints)
console.log(shopper.registered)
console.log(shopper.addPoints(9))
console.log(shopper.rewardPoints)
console.log(shopper.groceryCart)
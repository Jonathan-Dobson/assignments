var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop() //1
fruit.shift() //2
let indexOfOrange = fruit.findIndex(e=>e=='orange') //3
fruit.push(indexOfOrange) //4
let lengthOfVegetables = vegetables.length //5
vegetables.push(lengthOfVegetables) //6
let food = fruit.concat(vegetables) //7
food.splice(4,2) //8
food.reverse() //9
foodString = food.join(',') //10


// console.log([fruit,vegetables, food])
console.log(foodString)
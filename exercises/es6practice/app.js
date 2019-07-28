const {
    log
} = console

// green
// function collectAnimals(...arr) {
//     return arr
// }

// collectAnimals("dog", "cat", "mouse", "jackolope", "platypus")
// // ["dog", "cat", "mouse", "jackolope", "platypus"]

// function combineFruit(...arr) {
//     return {
//         fruits: arr[0],
//         sweets: arr[1],
//         vegetables: arr[2]
//     }
// }

// log(combineFruit(["apple", "pear"],
//     ["cake", "pie"],
//     ["carrit"]))


// const vacation = {
//     location: "Burly Idaho",
//     duration: "2 weeks"
// };

// function parseSentence(vac) {
//     let {location,duration}=vac
//     return `We're going to have a good time in ${location} for ${duration}`
// }

// log(parseSentence(vacation))

// function returnFirst(items){
//     const [firstItem,...rest] = items; /*change this line to be es6*/
//     return firstItem
// }


// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr){
//     [firstFav,secondFav,thirdFav,...rest] = arr
//     return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav
// }
// log(returnFavorites(favoriteActivities))

// function combineAnimals(...arr) {  
//     return [] = arr
// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// log(combineAnimals(...realAnimals, ...magicalAnimals, ...mysteriousAnimals))

// ["dog", "cat", "mouse", "jackolope", "platypus"]


// function product(...arr) {  
//     var numbers = [...arr];
  
//     return numbers.reduce(function(acc, number) {
//       return acc * number;
//     }, 1)
//   }

// console.log(product(1,2,3))

// function unshift(array, ...arr) {  
//     return [...arr, ...array];
//   }


// console.log(unshift([1,2,3],4,5,6,7,8,9))



// const populatePeople = names =>
//     names.map(name=>{
//         [firstName,lastName] = name.split(" ")
//         return { firstName, lastName }
//     })


// log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))

// [
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
// ]



// const people = ["Frank Peterson", "Suzy Degual", "Liza Jones"]
// const peopleArray = people.map(person => {
//        return `Person: ${person}`  
//     })
// console.log(peopleArray)
















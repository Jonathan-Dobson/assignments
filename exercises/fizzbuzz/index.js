




if(5 > 3){
    console.log('5 is greater than 3')
}

if("cat".length === 3){
    console.log('3 is the length of cat')
}

if("cat" === 'dog'){
    console.log('cat is a dog')
}
else{
    console.log('cat is not a dog')
    
}

var person = {
    name: "Bobby",
    age: 12
}

if(person.age >= 18){
    console.log(`${person.name} is allowed to go to the movie`)
}  
else if(person.age < 18){
    console.log(`${person.name} is NOT allowed to go to the movie. Must be 18 years old.`)
}
else{
    console.log('unknown age. Cannot tell if person is old enough')
}



if(person.name.startsWith('B')){
    console.log(`${person.name} is allowed to go to the movie because ${person.name} starts with B`)
}
else{
    console.log(`${person.name} is NOT allowed to go to the movie because ${person.name} does NOT start with B`)
}



if(typeof "dog" === 'string'){
    console.log('dog is a string')
}
else{
    console.log('dog is NOT a string')
}

if(typeof true === 'boolean'){
    console.log('true is a boolean')
}
else{
    console.log('true is NOT a boolean')
}

if(typeof cat === 'undefined'){
    console.log('cat is undefined')
}
else{
    console.log('cat is defined')
}

if("s" > 12){
    console.log('s is greater than 12')
}
else{
    console.log('s is not greater than 12')
}

var myNum = 6
console.log(myNum % 2 ? `${myNum} is odd` : `${myNum} is even`)
myNum = 5
console.log(myNum % 2 ? `${myNum} is odd` : `${myNum} is even`)
myNum = 1
console.log(myNum % 2 ? `${myNum} is odd` : `${myNum} is even`)




// let a = []
// for(let i = 0 ; i < 100 ; i++){
//         i % 3 === 0 ? a[i] = 'fizz' 

// }
// console.log(a)
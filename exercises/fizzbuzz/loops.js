var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var computerCount = 0;

for(var i = 0 ; i < officeItems.length ; i++){
    if (officeItems[i] === 'computer'){computerCount++}
}

console.log(`1. There are ${computerCount} computers in officeItems`)






var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 
var person;
for(var i =0 ; i < peopleWhoWantToSeeMadMaxFuryRoad.length ; i++){
    person = peopleWhoWantToSeeMadMaxFuryRoad[i]
    gender = person.gender === "male" ? 'He' : 'She'
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        console.log(`${person.name} may see the Mad Max. ${gender} is ${person.age}`)
    }
    else{
        console.log(`${person.name} is too young to see Mad Max. ${gender} is only ${person.age}`)
    }
}



function flipLight(a){
    var lightOn = false;
    
    for(i = 0 ; i < a.length ; i++ ){
        for(j = 0 ; j < a[i] ; j++ ){
            lightOn = !lightOn
        }
    }
    console.log(`The light is ${lightOn ? 'on' : 'off'}`)
}

flipLight([2, 5, 435, 4, 3]) // "The light is on"
flipLight([1, 1, 1, 1, 3])   // "The light is on"
flipLight([9, 3, 4, 2])      // "The light is off"
const readline = require('readline-sync')
const enemies = require('./enemies')
const encounter = require('./encounters')
const attact = require('./attack')
const player = require('./player')

let isAlive = true;
let hasWon = false;

while(isAlive && !hasWon){
    let question = readline.keyIn('Would you like to fly to the next planet? [y] to fly, [n] to end game ', {limit: 'yn'})
    if(question === 'y'){
       fly()
    }else if (question === 'n'){
        isAlive = false
    }
}

function fly (){
    let random = Math.floor(Math.random()*3)
    if(random > 0){
        console.log('You have arrived at the next planet')
    }else {
        encounter()
    }
}


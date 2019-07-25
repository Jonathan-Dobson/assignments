const attack = require('./attack')
const enemies = require('./enemies')
const readline = require('readline-sync')

function encounter(){
    let enemy = enemies[Math.floor(Math.random()*enemies.length)]
    console.log(`You have encountered a ${enemy.name}`)
    let action = readline.keyIn('Would you like to fly [f], or attack [a]? ', {limit: 'fa'})
    
    if(action === 'f'){
        console.log('you are flying away from ' + enemy.name)
    }else {
        attack(enemy)
    }
}

module.exports = encounter


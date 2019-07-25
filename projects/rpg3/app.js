const {
    question,
    keyInYN,
    keyInSelect,
    promptCLLoop
} = require('readline-sync'), {
    random
} = Math, {
    log
} = console
let isAlive = true,
    hasWon = false,
    accepted = false,
    ready = false,
    fuel = 50

// SETUP
function Fleet(name, defense, offense, tech) {
    this.name = name
    this.defense = defense
    this.offense = offense
    this.tech = tech
}

const enemy = [
    new Fleet('Corellian', 50, 40),
    new Fleet('Butuan', 30, 80),
    new Fleet('Tandag', 10, 90),
    new Fleet('Yaga Minor', 60, 60),
    new Fleet('Gorman', 30, 30)
]

// EVENTSoose a random attack power between a min and max
function encounter() {
    log('you have encountered enemy')
}

function mountAttack() {
    return true
}

function defendAttack() {
    return true
}

function escapeEnemy() {
    return true
}

function fly() {
    console.clear()
    log('Flying to next system...')
    log(random())
    if (random() * 10 > 4) {
        encounter()
    } else {
        log('You have arrived in the next system. There are no enemies here.')
    }
}

// // 1
// const name = question('What is your name? ')
// // 2
// accepted = keyInYN(`Congratulations ${name}. You have been appointed commander of the Imperial Dominators, the greatest starship fleet in the galaxy. 
// Will you accept the position of Commander? YN?`)
// if(!accepted){
//     log('You did not accept the role as Commander. Good Bye.')
// }else{
// // 3
//     ready = keyInYN(`Welcome Aboard the capital ship, the greatest ship in our fleet.
//     You are tasked with leading our fleet into the most epic battle to conquer the four remaining planetary systems in sector 2814 currently controlled by rebellion forces. [Y] Yes! Lets do this. [N] No way I can't.`)
//     if(!ready){
//         log('You have resigned. Good Bye.')
//     }
// }

name = 'jon'


// MAIN GAME LOOP
log('Enter your command. Type \'help\' for a list of commands')
promptCLLoop({
    help: function () {
        help()
    },
    fly: function () {
        fly()
    },
    fuel: function () {
        log(`Your fuel level is ${fuel}%`)
    },
    quit: function () {
        return true
    }
})
console.log('You have resigned. Game Over')



function help() {
    log(
        `help:
        Welcome Commander ${name}! Here is a list of commands you may order:

        attack - attack an enemy
        help - display this list of commands
        fly - fly to next system
        fuel - see fuel levels
        quit - resign and quit game
        
        `)
}
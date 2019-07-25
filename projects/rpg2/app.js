const { question, keyInYN, keyInSelect, promptCLLoop } = require('readline-sync'), { random } = Math, { log } = console
let isAlive = true, hasWon = false, accepted = false, ready = false, fuel = 50

// SETUP
function Fleet(name, defense, offense, tech){
    this.name = name
    this.defense = defense
    this.offense = offense
    this.tech = tech
}

const enemy = [
    new Fleet('Corellian',50,40),
    new Fleet('Butuan',30,80),
    new Fleet('Tandag',10,90),
    new Fleet('Yaga Minor',60,60),
    new Fleet('Gorman',30,30)
]

// EVENTS
function encounter(){
    return true
}

function mountAttack(){
    return true
}

function defendAttack(){
    return true
}

function escapeEnemy(){
    return true
}

function fly(){
    return true
}

// 1
const name = question('What is your name? ')
// 2
accepted = keyInYN(`Congratulations ${name}. You have been appointed commander of the Imperial Dominators, the greatest starship fleet in the galaxy. 
Will you accept the position of Commander? YN?`)
if(!accepted){
    log('You did not accept the role as Commander. Good Bye.')
}else{
// 3
    ready = keyInYN(`Welcome Aboard the capital ship, the greatest ship in our fleet.
    You are tasked with leading our fleet into the most epic battle to conquer the four remaining planetary systems in sector 2814 currently controlled by rebellion forces. [Y] Yes! Lets do this. [N] No way I can't.`)
    if(!ready){
        log('You have resigned. Good Bye.')
    }
}

// MAIN GAME LOOP
log('Enter your command. Type \'help\' for a list of commands' )
promptCLLoop({
    help: function() {
      help()
    },
    fuel: function() {
      log(`Your fuel level is ${fuel}%`)
    },
    quit: function() { return true }
  })
  console.log('You have resigned. Game Over')



function help(){
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









// while(isAlive && !hasWon && accepted && ready){

    // let question = readline.keyIn('Would you like to walk? [y] to walk, [n] to end game ', {limit: 'yn'})

    // if(question === 'y'){
    //    walk()
    // }else if (question === 'n'){
    //     isAlive = false
    // }
    // hasWon = true;

// }



// READLINE-SYNC
//   animals = ['Lion', 'Elephant', 'Crocodile', 'Giraffe', 'Hippo'],
//   index = keyInSelect(animals, 'Which animal?');
// console.log('Ok, ' + animals[index] + ' goes to your room.');


// function Enemy (name, hp, attack){
//     this.name = name;
//     this.hp = hp;
//     this.attack = attack;
// }

// let terminator = new Enemy('Terminator', 50, 10)
// let robocop = new Enemy('Robocop', 75, 5000)
// let cyborg = new Enemy('Cyborg', 1, 10000)

// const enemies = [terminator, robocop, cyborg]


// function Person (name, hp = 100){
//     this.name = name;
//     this.hp = hp;
//     this.attack = 30;
// }

// let name = question('What is your name? ')

// const player1 = new Person(name)

// console.log(`welcome to the game ${name}`)



// function walk (){
//     let random = Math.floor(Math.random()*3)
//     if(random > 0){
//         console.log('You just walked')
//     }else {
//         encounter()
//     }
// }

// function encounter(){
//     let enemy = enemies[Math.floor(Math.random()*enemies.length)]
//     console.log(`You have encountered ${enemy.name}`)
//     let action = readline.keyIn('Would you like to run [r], or attack [a]? ', {limit: 'ra'})
//     if(action === 'r'){
//         console.log('you ran away')
//     }else {
//         attack(enemy)
//     }
// }

// function attack (enemy){
//     while(player1.hp > 0 && enemy.hp > 0){
//         let enemyAttack = generateAttack(enemy)
//         let heroAttack = generateAttack(player1)
//         player1.hp -= enemyAttack;
//         console.log(`${enemy.name} attacked you!, your hp is now ${player1.hp}`);
//         enemy.hp -= heroAttack;
//         console.log(`You hit ${enemy.name}! ${enemy.name} now has an hp of ${enemy.hp}`);
//     }
//     if(player1.hp <= 0){
//         console.log('Game over, you dead')
//         isAlive = false;
//     }else {
//         console.log(`You killed ${enemy.name}`)
//         enemies.splice(enemies.indexOf(enemy), 1)
//         if(enemies.length === 0){
//             console.log('You won the game')
//             hasWon = true
//         }
//     }
// }

// function generateAttack (player){
//     return Math.floor(Math.random() * player.attack)
// }

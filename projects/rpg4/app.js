const readline = require('readline-sync')
const { log, clear } = console

let isAlive = true
let hasWon = false

function Enemy (name, hp, attack){
    this.name = name
    this.hp = hp
    this.attack = attack   
}

const enemies = [
    new Enemy('Terminator', 30, 50),
    new Enemy('Robocop', 40, 10),
    new Enemy('Cyborg', 10, 80),
    new Enemy('Googler', 50, 40)
]

function Person (name, hp = 100){
    this.name = name
    this.hp = hp
    this.attack = 100
    this.firstAid = 0
    this.armor = 0
    this.weapons = 0
}

let name = readline.question('What is your name? ')
const player = new Person(name)
clear() 
log(`welcome to the game ${name}`)

while(isAlive && !hasWon){
    let question = readline.keyIn('Would you like to walk? [w] to walk, [n] to end game, [c] to enter command. ', {limit: 'wnc'})
    if(question === 'w'){
       walk()
    }else if (question === 'n'){
        isAlive = false
    }else if (question === 'c'){
        clear() 
        log('Enter command or type exit to return to walking:')
        readline.promptCLLoop({
            print: function () {
                printStatus(player)
            },
            exit: function() { return true }
          });
          clear() 
          log('Exited command line.')

    }

}

function printStatus(player){
    clear() 
    log(`Hello, ${player.name}. 
    You have 
    ${player.hp} Health and 
    ${player.attack} attacking power.
    You have collected:
    ${player.armor} Armor,
    ${player.firstAid} First Aid Kits, and
    ${player.weapons} Advanced Enemy Weapons.`)
    log('Enter command or type exit to return to walking:')
}

function walk (){
    let random = Math.random()*100
    if(random > 30 ){
        player.hp += 1
        player.attack +=1
        log(`You just walked
        Your health is ${player.hp}
        Your attack power is ${player.attack}`)
    }else {
        encounter()
    }
}

function encounter(){
    let enemy = enemies[Math.floor(Math.random()*enemies.length)]
    clear() 
    log(`You have encountered the ${enemy.name}`)
    let action = readline.keyIn('Would you like to run [r], or attack [a]? ', {limit: 'ra'})
    if(action === 'r'){
        if(escaped()){
            clear() 
            log('you ran away')
        }
        else{
            clear() 
            log('You tried to escape, but the enemy has you cornered.')
            attack(enemy)
        }
    }else {
        attack(enemy)
    }
}

function escaped(){
    let rand = Math.random()*100
    return rand > 50 ? true : false
}

function attack (enemy){
    while(player.hp > 0 && enemy.hp > 0){
        let enemyAttack = generateAttack(enemy)
        let heroAttack = generateAttack(player)
        player.hp -= enemyAttack;
        player.attack -= 10;
        log(`${enemy.name} attacked you!
        Your health is now ${player.hp},
        Your attacking power is now ${player.attack}`);
        enemy.hp -= heroAttack;
        log(`You hit ${enemy.name}! ${enemy.name} now has an hp of ${enemy.hp}`);
    }
    if(player.hp <= 0){
        clear() 
        log('You are dead. Game Over.')
        isAlive = false;
    }else {
        log(`You killed the ${enemy.name}`)
        enemies.splice(enemies.indexOf(enemy), 1)
        reward(enemy.name)
        if(enemies.length === 0){
            log('You killed all the enemies! You won the game!!')
            hasWon = true
        }
    }
}

function reward (enemy) {
    let rand = Math.random()*5
    if ( rand > 3 ){
        log(`You took the dead ${enemy}'s first aid kit. You gained +20 hp`)
        player.hp += 20
        player.firstAid += 1
    }else if ( rand > 2 ){
        log(`You took the dead ${enemy}'s advanced weapons. You have +20 attacking power`)
        player.attack += 20
        player.weapons += 1
    }
    else {
        log(`You took the dead ${enemy}'s armor. You have +5 hp and +5 attacking power`)
        player.hp += 5
        player.attack +=5
        player.armor += 1
    }
}

function generateAttack (player){
    return Math.floor(Math.random() * player.attack)
}

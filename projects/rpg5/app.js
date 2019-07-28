const { keyInPause, keyIn, promptCLLoop, question } = require('readline-sync')
const { log, clear } = console
const { random, floor } = Math

let isAlive = true
let hasWon = false
let escaped = false

function Enemy (name, hp, attack){
    this.name = name
    this.hp = hp
    this.attack = attack   
}



const enemies = [
    new Enemy('Borg', floor(70 + random()*10), floor(60 + random()*10)),
    new Enemy('Klingon', floor(80 + random()*10), floor(70 + random()*10)),
    new Enemy('Terminator', floor(90 + random()*20), floor(60 + random()*20)),
    new Enemy('Punisher', floor(80 + random()*10), floor(70 + random()*10))
]

function Person (name, hp = 80){
    this.name = name
    this.hp = hp
    this.attack = 80
    this.firstAid = 0
    this.armor = 0
    this.weapons = 0
}
clear()
let name = question('What is your name? ')
name = (name.slice(0,1).toUpperCase()) + (name.slice(1))
const player = new Person(name)
clear() 
log(`Welcome to the game, ${name}. 
There are four dangerous enemies lurking. 
Your mission is to destroy all enemies.`)
keyInPause()

while(isAlive && !hasWon){
    let question = keyIn(`
    Currently, there are no enemies in sight, but
    there are still ${enemies.length} enemies lurking. Be careful.
    w - walk and search for enemies
    q - quit
    c - command prompt
    h - health stats
    : `, {limit: 'wqch'})
    if(question === 'w'){
        clear()
       walk()
    }else if (question === 'q'){
        isAlive = false
    }else if (question === 'c'){
        clear() 
        log('Enter command or type exit to return to walking:')
        promptCLLoop({
            print: function () {
                printStatus(player)
            },
            exit: function() { return true }
          });
          clear() 
          log('Exited command line.')
    }else if(question === 'h'){
        printStatus(player)
    }
}

function printStatus(player){
    clear() 
    log(`Hello, ${player.name}.
    You have collected:
    ${player.armor} Armor
    ${player.firstAid} First Aid Kits
    ${player.weapons} Advanced Enemy Weapons`)
    printStats(player)
    keyInPause()
}

function walk (){
    let random = Math.random()*7
    if(random > 2 ){
        player.hp += 1
        player.attack +=1
        log(`You just walked`)
        printStats(player)
    }else {
        encounter()
    }
}

function printStats(player){
    let you = player instanceof Person ? "You have:" : `${player.name} has:`
    let hp = player.hp > 0 ? floor(player.hp * 0.1) : 1
    let attack = player.attack > 0 ? floor(player.attack * 0.1) : 1

    log(`
    ${you}

    Health:
    ${"||".repeat(hp)}${"--".repeat(16-hp)} ${player.hp} 

    Weapon Power:
    ${"||".repeat(attack)}${"--".repeat(16-attack)} ${player.attack} 
    `)
}

function encounter(){
    let enemy = enemies[Math.floor(Math.random()*enemies.length)]
    clear() 
    log(`You have encountered the ${enemy.name}!`)

    printStats(player)
    printStats(enemy)

    let action = keyIn(`
    Would you like to
    r - run
    a - attack
    : `, {limit: 'ra'})
    clear()

    if(action === 'r'){
        if(runAway(50)){
            clear() 
            log('You ran and have escaped. You are safe for now. ')
            keyInPause()
            clear()
        }
        else{
            clear() 
            keyIn(`OH NO! 
            You have attempted to run away from the ${enemy.name}, 
            but the ${enemy.name} has you cornered.
            f - fight
            s - surrender
            : `, {limit: 'fs'})
            attack(enemy)
        }
    }else {
        attack(enemy)
    }
}

function runAway(chance){
    let rand = Math.random()*100
    return rand > chance ? false : true
}

function attack (enemy){
    while(player.hp > 0 && enemy.hp > 0 && !escaped){
        let enemyAttack = generateAttack(enemy)
        let heroAttack = generateAttack(player)
        player.hp -= enemyAttack;
        usedAttack = floor(random() * 20)
        player.attack -= usedAttack;
        log(`The ${enemy.name} is attacking you! 
        You used up ${usedAttack} of your weapon power to fight the ${enemy.name}
        The ${enemy.name} has hurt you. 
        You lost ${enemyAttack} HP`);
        printStats(player)
        printStats(enemy)
        let fight = keyIn(`
        f - fight
        s - surrender
        r - run away
        : `, {limit: 'fsr'})
        clear()
        if(fight==='f'){
            enemy.hp -= heroAttack;
            log(`You hit the ${enemy.name}! 
            The ${enemy.name} lost ${heroAttack} hp
            You lost ${enemyAttack} HP and ${usedAttack} of your weapon power`)
            printStats(player)
            printStats(enemy)
            keyInPause()
            clear()
        }
        if(fight==='s'){
            player.hp = 0
            keyIn(`You have surrendered.`)
            keyInPause()

            break
        }else if(fight==='r'){
            if(runAway(50)){
                escaped = true;
                log('You have escaped.')
                keyInPause()
                break
            }
            else{
                clear() 
                log('You tried to escape, but the enemy has you cornered.')
            }
        }

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
            log(`You killed all the enemies! You won the game!!
            Your score is ${player.attack+player.hp}`)
            hasWon = true
        }
    }
}

function reward (enemy) {
    let rand = Math.random()*5
    if ( rand > 3 ){
        log(`You took the ${enemy}'s first aid kit for +20 hp.`)
        player.hp += 20
        player.firstAid += 1
    }else if ( rand > 2 ){
        log(`You took the ${enemy}'s advanced weapons for +20 attacking power.`)
        player.attack += 20
        player.weapons += 1
    }
    else {
        log(`You took the ${enemy}'s armor for +5 hp and +5 attacking power.`)
        player.hp += 5
        player.attack +=5
        player.armor += 1
    }
    keyInPause()
    clear()
}

function generateAttack (player){
    return Math.floor((player.attack * 0.5)+(player.attack/10 * random()))
}

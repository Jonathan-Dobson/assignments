const player = require('./player')
const enemies = require('./enemies')

function attack (enemy){
    while(player.shield > 0 && enemy.shield > 0){
        let enemyAttack = generateAttack(enemy)
        let heroAttack = generateAttack(player)
        player.shield -= enemyAttack;
        console.log(`${enemy.name} attacked you!, your shield is now ${player.shield}`);
        enemy.shield -= heroAttack;
        console.log(`You hit ${enemy.name}! ${enemy.name} now has a shield of ${enemy.shield}`);
    }
    if(player.shield <= 0){
        console.log('Game over, you dead')
        isAlive = false;
    }else {
        console.log(`You killed ${enemy.name}`)
        enemies.splice(enemies.indexOf(enemy), 1)
        if(enemies.length === 0){
            console.log('You won the game')
            hasWon = true
        }
    }
}

function generateAttack (player){
    return Math.floor(Math.random() * player.attack)
}

module.exports = attack
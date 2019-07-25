const readline = require('readline-sync')

function Player (name, shield, laser){
    this.name = name;
    this.shield = shield;
    this.laser = laser;
}

let name = readline.question('Name your figher ship: ')
const player = new Player(name)

module.exports = player
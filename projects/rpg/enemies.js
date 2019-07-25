function Enemy (name, shield, laser){
    this.name = name;
    this.shield = shield;
    this.laser = laser;
}

const enemies = [
    new Enemy('Clingon', 11, 90),
    new Enemy('Borg', 20, 60),
    new Enemy('Romulon', 60, 20),
    new Enemy('Gluon', 40, 40)
] 

module.exports = enemies
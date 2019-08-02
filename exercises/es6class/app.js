class Player {
    constructor(){
        this.name = String()
        this.totalCoins = Number()
        this.status = 'Small'
        this.hasStar = Boolean()
        this.gameActive = Boolean(true)
    }

    setName(namePicked){
        this.name = namePicked
    }

    gotHit(){ // when player is hit by enemy, set status
        // (Statuses go from "Powered Up" to "Big" to "Small" to "Dead".)
        this.status = this.status==='Powered Up'?'Big':this.status==='Big'?'Small':'Dead'
        if(this.status==='Dead'){
            this.gameActive = false
        }
    }

    gotPowerup(){
        // Statuses go from "Small" to "Big" to "Powered Up". 
        if(this.status==='Powered Up'){this.hasStar=true}
        this.status = this.status==='Powered Up'?this.status:this.status==='Big'?'Powered Up':'Big'
    }

    addCoin(){
        // adds a coin to totalCoins
        this.totalCoins++
    }

    print(){
        // prints to the console the name, totalCoins, status, and star properties
        console.log(`
        Name: ${this.name}
        Status: ${this.status}
        Coins: ${this.totalCoins}
        ${this.hasStar?'Star Acquired':''}`)
    }
}

function random(){
    return Math.floor(Math.random()*3)
}


const player = new Player()
player.setName('Mario')

let interval = setInterval(function(){
    switch(random()){
        case 0: 
            player.gotHit()
            break
        case 1:
            player.gotPowerup()
            break
        case 2:
            player.addCoin()
            break
    }
    if(player.gameActive===false){clearInterval(interval)}
    player.print()
},1000)


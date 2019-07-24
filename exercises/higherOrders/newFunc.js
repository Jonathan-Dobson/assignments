console.log("hi there")

function makeAllLow(str){
    return str.toLowerCase()
}

function makeAllHigh(str){
    return str.toUpperCase()
}

let stringOfLetters = "aBCdeFgHIJKlmnopqrsTuvWxYz"

function stringLooper(str){
    for(let i = 0 ; i < str.length ; i++){
        console.log(str[i])
    }
}

stringLooper(stringOfLetters)

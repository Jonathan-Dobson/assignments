const removeLetters = (arr,str) => {
    return arr.indexOf(str[0])
    
}


console.log(removeLetters(["s", "t", "r", "i", "n", "g", "w"], "string") === ["w"])

console.log(removeLetters(["b", "b", "l", "l", "g", "n", "o", "a", "w"], "balloon") === ["b", "g", "w"])

console.log(removeLetters(["d", "b", "t", "e", "a", "i"], "edabit") === [])


console.log(removeLetters(["s", "t", "r", "i", "n", "g", "w"], "string") )

console.log(removeLetters(["b", "b", "l", "l", "g", "n", "o", "a", "w"], "balloon") )

console.log(removeLetters(["d", "b", "t", "e", "a", "i"], "edabit") )
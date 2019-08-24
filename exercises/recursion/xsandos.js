const XO = (str) =>{
    let x=0
    let o=0;
    for(let i = 0 ; i < str.length ; i++ ){
        x += str[i].toUpperCase() === 'X' ? 1 : 0
        o += str[i].toUpperCase() === 'O' ? 1 : 0
    }
    return x===o
}


console.log(XO("ooxx")) //➞ true

console.log(XO("xooxx")) //➞ false

console.log(XO("ooxXm")) //➞ true
// Case insensitive.

console.log(XO("zpzpzpp")) //➞ true
// Returns true if no x and o.

console.log(XO("zzoo")) //➞ false
var isNumber = function(s) {
    s=s.trim()
    return s.length === 0 
            ? false 
            : s[0] === " "
                ? false
                : !isNaN(Number(s))
};

console.log(isNumber("0" )===true)//=> true
console.log(isNumber(" 0.1 " )===true)//=> true
console.log(isNumber("abc" )===false)//=> false
console.log(isNumber("1 a" )===false)//=> false
console.log(isNumber("2e10" )===true)//=> true
console.log(isNumber(" -90e3   " )===true)//=> true
console.log(isNumber(" 1e" )===false)//=> false
console.log(isNumber("e3" )===false)//=> false
console.log(isNumber(" 6e-1" )===true)//=> true
console.log(isNumber(" 99e2.5 " )===false)//=> false
console.log(isNumber("53.5e93" )===true)//=> true
console.log(isNumber(" --6 " )===false)//=> false
console.log(isNumber("-+3" )===false)//=> false
console.log(isNumber("95a54e53" )===false)//=> false
console.log(isNumber("" )===false)//=> false

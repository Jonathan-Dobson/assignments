const phrase = 'slimy smelly solution';

arrayIndex = (str) => {
let result = {}
let key
for (let i=0 ; i < str.length ; i++){
    key = str[i]
    result[key] = result[key]===undefined?1:result[key]+1
}

return result
}

console.log(arrayIndex(phrase));

//Output: { s: 3, l: 4, i: 2, m: 2, y: 2, ' ': 2, e: 1, o: 2, u: 1, t: 1, n: 1 }

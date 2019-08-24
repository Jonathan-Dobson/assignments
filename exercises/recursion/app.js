// const length=(str)=>str.length > 0 ? 1 + length(str.slice(1)) : 0 

const length = (str) => {
    return [...str]

}

console.log(length('sam'))
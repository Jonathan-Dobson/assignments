function antiCaps(text){
    let upper
    let lower
    let result = ""
    
    for(i=0 ; i < text.length ; i++){
        upper = text[i].toUpperCase()
        lower = text[i].toLowerCase()
        result = result + (text[i]===upper ? lower : upper)
    }
    return result;
}

console.log(antiCaps('Hello wORLD'))
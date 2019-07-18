function forception(people, alphabet){
    let result = []
    for(i=0;i<people.length;i++){
        result.push( people[i] + ":" )
        for(j=0;j<alphabet.length;j++){
            result.push(alphabet[j].toUpperCase())
        }
    }

    return result;
}

var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

console.log(forception(people,alphabet))
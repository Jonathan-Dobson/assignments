var input = "bookkeeper larry";
var acc = ""
// Output: "bokepr lay"

for(let i= 0 ; i < input.length ; i++){
    if(acc.indexOf(input[i])===-1){
        acc = acc + input[i]
    }
}
// console.log(acc)

String.prototype.randomRemove = function(){
    let random = parseInt(Math.random()*this.length+0.99)
    // console.log(this.valueOf()[random])
    this.
}

input.randomRemove()

function largestSwap(num){
    let a = parseInt(num/10);
    return a >= num-(a*10)
}


console.log(
    [
        largestSwap(14), //➞ false
        largestSwap(53), //➞ true
        largestSwap(99), //➞ true
        largestSwap(43), //➞ true
        largestSwap(27) //➞ false
    ]
)

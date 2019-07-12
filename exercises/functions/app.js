function sum(num1, num2){
    return num1 + num2
}
// console.log(sum(5,2))

function largest(n1,n2,n3){
    return Math.max(n1,n2,n3)
}
// console.log(largest(4,1,-4))

function evenOrOdd(num){
    return num % 2 ? 'odd' : 'even'
}
// console.log(evenOrOdd(4))
// console.log(evenOrOdd(7))

function shortString(str){
    return str.length <= 20 ? str + str : str.slice(0,str.length/2)
}
// console.log(shortString("hello world. Welcome Everyone.")) // longer
// console.log(shortString("hello world.")) // shorter

function fibSum(n){
    let prev = 0
    let now = 1
    let next = 1
    let sum = 1
    for(i=1 ; i<n ; i++){
        console.log(next)
        next = prev + now
        sum += next
        prev = now
        now = next
    }
    console.log(`The sum is ${sum}.`)
}

// fibSum(1)
// fibSum(2)
// fibSum(3)
// fibSum(4)
// fibSum(6)


function mostLetter(str){
    return str.split('').reduce((a,v)=>{
        c = [...str.matchAll(v)].length
        return c > a[0] ? [c,v] : a
    },[0,''])[1]
}

// console.log(mostLetter("supercalifragalisticexxpialodoshus"))


function quadratic(a,b,c){
    let sqrt = Math.sqrt((b*b)-(4*a*c))
    let plus = ((b*-1)+sqrt)/(2*a)
    let minus = ((b*-1)-sqrt)/(2*a)

    return [plus,minus]
}

console.log(quadratic(2,-4,-3))


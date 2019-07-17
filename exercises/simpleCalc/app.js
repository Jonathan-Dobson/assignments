let submitAdd = document.getElementById('form-add')
let addResult = document.getElementById('add-result')

submitAdd.addEventListener('submit',e=>{
    e.preventDefault()
    let num1 = parseInt(e.target.num1.value)
    let num2 = parseInt(e.target.num2.value)
    let numAdd = num1 + num2
    addResult.textContent = numAdd
})


let submitSubtract = document.getElementById('form-subtract')
let subtractResult = document.getElementById('subtractResult')


submitSubtract.addEventListener('submit',e=>{
    e.preventDefault()
    let num3 = (e.target.num3.value)
    let num4 = (e.target.num4.value)
    let numSub = num3-num4
    subtractResult.innerText = numSub
})



let submitMultiply = document.getElementById('form-multiply')
let multiplyResult = document.getElementById('multiplyResult')


submitMultiply.addEventListener('submit',e=>{
    e.preventDefault()
    let num5 = (e.target.num5.value)
    let num6 = (e.target.num6.value)
    let numSub = num5 * num6
    multiplyResult.innerText = numSub
})
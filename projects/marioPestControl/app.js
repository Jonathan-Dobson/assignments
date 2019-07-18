let total = document.getElementById('total')
let result = document.getElementById('total')
let baddies = document.forms
let baddieBoxes = document.getElementsByClassName('baddie-container')
let box1 = document.getElementById('item1')
let box2 = document.getElementById('item2')
let box3 = document.getElementById('item3')

function updateTotal(update){
    total.textContent = `Total Invoice: ${update} coins`
    
    let item1 = document.getElementById('item1')
    if(forms.goomba.value==0 | forms.goomba.value==""){
        item1.className = item1.className + " noprint"
    }
    else{
        item1.className = "baddie-container"
    }
    let item2 = document.getElementById('item2')
    if(forms.cheepcheep.value==0 | forms.cheepcheep.value==""){
        item2.className = item2.className + " noprint"
    }
    else{
        item2.className = "baddie-container"
    }
    let item3 = document.getElementById('item3')
    if(forms.bombomb.value==0 | forms.bombomb.value==""){
        item3.className = item3.className + " noprint"
    }
    else{
        item3.className = "baddie-container"
    }

    
}


baddies.addEventListener('keyup',e=>{

    let goomba = forms.goomba.value * 5
    let cheepcheep = forms.cheepcheep.value * 7
    let bombomb = forms.bombomb.value * 11
    updateTotal(goomba+cheepcheep+bombomb)
})
baddies.addEventListener('change',e=>{
    let goomba = forms.goomba.value * 5
    let cheepcheep = forms.cheepcheep.value * 7
    let bombomb = forms.bombomb.value * 11
    updateTotal(goomba+cheepcheep+bombomb)
})
box1.addEventListener('click',e=>{
    let b1 = box1.getElementsByTagName('input')[0]
    b1.focus()
})
box2.addEventListener('click',e=>{
    let b2 = box2.getElementsByTagName('input')[0]
    b2.focus()
})
box3.addEventListener('click',e=>{
    let b3 = box3.getElementsByTagName('input')[0]
    b3.focus()
})

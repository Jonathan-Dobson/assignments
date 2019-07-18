let form = document.travel
let modal = document.getElementById('modal')
console.log(modal.children[1])
form.addEventListener('submit', e => {
    e.preventDefault()

    let fname = form.firstName.value
    let lname = form.lastName.value
    let age = form.age.value
    let gender = form.gender.value
    let destination = form.destination.value
    let veg = form.veg.checked ? 'Vegetarian, ' : ''
    let kos = form.kos.checked ? 'Kosher, ' : ''
    let lac = form.lac.checked ? 'Lactose Free, ' : ''
    let diet = (veg+kos+lac).length===0 ? "None" : (veg + kos + lac).slice(0, this.length - 2)   

    // alert(`First name: ${fname}\n` +
    //     `Last name: ${lname}\n` +
    //     `Age: ${age}\n` +
    //     `Gender: ${gender}\n` +
    //     `Location: ${destination}\n` +
    //     `Dietary Restrictions: ${diet}\n`)

    let result = (`First name: ${fname}\n` +
        `Last name: ${lname}\n` +
        `Age: ${age}\n` +
        `Gender: ${gender}\n` +
        `Location: ${destination}\n` +
        `Dietary Restrictions: ${diet}\n`)

    modal.children[1].textContent = result
    modal.style.display = 'block'
})

modal.addEventListener('click',e=>{
    modal.style.display = 'none'
})
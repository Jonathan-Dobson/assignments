// make the box disapear when the user clicks it
let box = document.getElementById('red-box')

box.addEventListener('click',function(e){
    e.target.className = "hide"
})

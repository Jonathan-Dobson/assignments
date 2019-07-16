let box = document.getElementById("red-box")
let x = document.getElementById('x')
let y = document.getElementById('y')

box.addEventListener('mousemove',e=>{
    y.textContent = e.offsetY
    x.textContent = e.offsetX
})


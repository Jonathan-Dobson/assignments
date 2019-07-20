// let bgtop = document.images[0].style
let bg = document.getElementById('background').style

let maxScroll = 805

window.addEventListener('scroll',e=>{
    let bgState = window.scrollY / 6
    bg.top = bgState < maxScroll ? `-${bgState}px` : `-${maxScroll}px`
})
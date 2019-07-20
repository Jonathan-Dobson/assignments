let bg = document.getElementById('background').style
let bgState = 0;
// let maxScroll = 805

window.addEventListener('scroll',e=>{
    // bg.top = bgState < maxScroll ? `-${bgState}px` : `-${maxScroll}px`
    
    if(bgState < 0 && bgState > 250){}
    else{bgState = window.scrollY * 4}
    
    
    
    bg.top = `-${bgState}px`
    console.log(bg.top)
})

function clrInterval(){
    window.clearInterval()
}

window.onload = function(){
    let d=3
    let i=0
    let max = 370
    let myScroll = setInterval(function(){
        window.scrollTo(0,i)
        d = i>max-100 ? d*0.96 : d+0.5
        i = parseInt(i+d)
        if(i>max){window.clearInterval(myScroll)}
    },1)
    myScroll
}
function battleOutcome(n) {
    let s=n.toString(),r="",lf,rt
    for(let i=0;i<s.length;i=i+2){
        [lf,rt]=[s.charAt(i),s.charAt(i+1)]
        r+=lf>rt?lf:lf===rt?'':rt
    }
    return +r
}


console.log(battleOutcome(223456))
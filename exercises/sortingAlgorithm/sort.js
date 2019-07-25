let arr = [1, 3, 4, 2, 5]

callback = (a, b) => a - b

// console.log(arr.sort(callback))


Array.prototype.mySort = function (cb) {
    let i = 0, compare, goback
    let arr = []
    if(!compare){
        compare = this[i]
        i++
    }

    while(i<this.length){
        //check compare with i target
        console.log([compare,this[i]])

        if(goback){

        }else{
            if(cb(this[i],compare)>0){
                arr[i-1] = compare
                arr[i] = this[i]
            }else{
                console.log('go back')
                goback = true
    
            }

        }

        compare = this[i]
        i++

    }
    console.log(arr)

}



console.log(arr.mySort(callback))
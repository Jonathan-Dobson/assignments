let arr = [1, 3, 4, 2, 5]

callback = (a, b) => a - b

// console.log(arr.sort(callback))


Array.prototype.mySort = function (cb) {
    let i = 0,
        compare, goback, move

    if (!compare) {
        compare = this[i]
        i++
    }

    while (i < this.length) {
        console.log([compare, this[i]])

        if (cb(this[i], compare) > 0) {
            console.log('forward')

            this[i - 1] = compare
            this[i] = this[i]
        } else {
            console.log('go back')
            goback = true

        }

        compare = this[i]
        i++

    }
    console.log(arr)

}



console.log(arr.mySort(callback))
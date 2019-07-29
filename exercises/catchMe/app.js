
const {log} = console

let tests = []
function test(message){
    let msg = `TEST ${tests.length+1}: ${message}`
    tests.push(msg)
}

function sum(x, y) {
    try {
        if (typeof y === 'number' && typeof x === 'number') {
            return x + y
        } else {
            throw "Both arguments must be a number"
        }
    } catch (e) {
        throw new Error ("login fail")
    }
}

// test(sum('4', 1))
// test(sum([4],8))
// test(sum(4, 4))


function login(username, password) {
    try {
        if (username === 'jon' && password === '123') {
            return ('login successful!')
        } else if (username !== 'jon') {
            throw "user name is incorrect"
        } else if (password !== '123') {
            throw "password is incorrect"
        } else {
            throw "login failed"
        }
    } catch (e) {
        throw new Error('Login Failed.')
    }
}

test(login('hi', '321'))
test(login('jon', 123))
test(login('jon', '123'))



try {
    log(login('jon', '123'))
} catch (e) {
    log('error' + e)
}

// try {
//     login('jon', 111)

// } catch (e) {
//     log('error' + e)
// }





// log(tests)
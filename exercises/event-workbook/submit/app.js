// The "submit" event refreshes your brower by default
// use "e.preventDefault" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function


let form = document.getElementById('submit-me')

form.addEventListener('submit',function(e){
    e.preventDefault()
})
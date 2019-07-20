var form = document.getElementById("airline-form");
var submit = document.getElementById("submit");
// var query = document.querySelector;


function formAlert(){

    var firstName = form.elements["firstname"].value;
    var lastName = form.elements["lastname"].value;
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["travel-location"].value;
    var diet = [];
    if (form.elements['vegan'].checked) {
        diet.pop(document.getElementById("vegan").value);
    }
    if (form.elements['gluten'].checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (form.elements['paleo'].checked) {
        diet.push(document.getElementById('paleo').value);
    }

    alert("First Name: " 
    + firstName 
    + "\nLast Name: " 
    + lastName 
    + "\nAge: " 
    + age 
    + "\nGender: " 
    + gender 
    + "\nTravel Location: " 
    + location 
    + "\nDiet: " 
    + diet 
    + "\nAwesome, now if you die, it won't be an accident..");
}
form.addEventListener("submit", formAlert);
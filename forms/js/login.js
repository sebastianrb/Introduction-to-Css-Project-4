var form = document.getElementsByTagName("form")[0];
var submitButton = document.getElementById("submit");
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var streetAddress = document.getElementById("streetAddress");
var city = document.getElementById("city");
var country = document.getElementById("country");
var username = document.getElementById("username");
var password = document.getElementById("password");
var destination = document.getElementById("destination");


function nameOK(value, minLength) {
    if(!validator.isEmpty(value) && validator.isOfLength(value, minLength)) {
        return true;
    } else {
        return false;
    }
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    // validate login form
    var usernameValue = username.value;
    var passwordValue = password.value;
    var destinationValue = destination.selectedIndex;
    if(nameOK(usernameValue, 2) && nameOK(passwordValue, 8) && destinationValue !== 0) {
        form.className = "valid";
    } else {
        form.className = "invalid";
    }
    console.log(form.classList);
});








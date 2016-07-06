var form = document.getElementsByTagName("form")[0];
var submitButton = document.getElementById("submit");
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var DOB = document.getElementById("DOB");
var password = document.getElementById("password");

function nameOK(value, minLength) {
    if(!validator.isEmpty(value) && validator.isOfLength(value, minLength)) {
        return true;
    } else {
        return false;
    }
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    //validate address form
    var firstNameValue = firstName.value;
    var lastNameValue = lastName.value;
    var emailValue = email.value;
    var DOBValue = DOB.value;
    var passwordValue = password.value;

    if(nameOK(firstNameValue, 2) && nameOK(lastNameValue, 2) && validator.isEmailAddress(emailValue) && validator.isDate(DOBValue) && validator.isBeforeToday(DOBValue) && nameOK(passwordValue, 8)) {
        form.className = "valid";
    } else {
         form.className = "invalid";
    }
    console.log(form.classList);
});

var form = document.getElementsByTagName("form")[0];
var submitButton = document.getElementById("submit");
var theDate = document.getElementById("date");
var time = document.getElementById("time");
var timezone = document.getElementById("timezone");
var message = document.getElementById("message");
var phone = document.getElementById("phone");
var email = document.getElementById("email");

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
    var dateValue = theDate.value;
    var timeValue = time.value;
    var timezoneValue = timezone.selectedIndex;
    var messageValue = message.value;
    var phoneValue = phone.value;
    var emailValue = email.value;

    if(validator.isAfterToday(dateValue) && validator.isDate(dateValue) && !validator.isEmpty(timeValue) && timezoneValue !== 0 && nameOK(messageValue, 1) && validator.isPhoneNumber(phoneValue) && validator.isEmailAddress(emailValue)) {
        form.className = "valid";
    } else {
         form.className = "invalid";
    }
    console.log(form.classList);
});



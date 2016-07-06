var form = document.getElementsByTagName("form")[0];
var submitButton = document.getElementById("submit");
var flavorRadioButtons = document.getElementsByName("scotchFlavor");



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
    var radioChecked = false;
    var i;
    for(i = 0; i < flavorRadioButtons.length; i++) {
        if(flavorRadioButtons[i].checked) {
            radioChecked = true;
        }
    }
    if(radioChecked) {
        form.className = "valid";
    } else {
         form.className = "invalid";
    }
    console.log(form.classList);
});


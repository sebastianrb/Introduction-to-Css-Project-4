
var form = document.getElementsByTagName("form")[0];
var submitButton = document.getElementById("submit");
var fullName = document.getElementById("fullName");
var cardNumber = document.getElementById("cardNumber");
var csv = document.getElementById("csv");
var expirationMonth = document.getElementById("expirationMonth");
var expirationYear = document.getElementById("expirationYear");



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
    var fullNameValue = fullName.value;
    var cardNumberValue = cardNumber.value;
    var csvValue = csv.value;
    var expirationMonthValue = expirationMonth.selectedIndex;
    var expirationYearValue = expirationYear.selectedIndex;

    if(nameOK(fullNameValue, 3) && validator.isCreditCard(cardNumberValue) && nameOK(csvValue, 3) && expirationMonthValue !== 0 && expirationYearValue !== 0) {
        form.className = "valid";
    } else {
         form.className = "invalid";
    }
    console.log(form.classList);
});

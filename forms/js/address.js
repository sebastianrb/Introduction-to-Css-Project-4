 // (function(window){
    // var errorObject = {
    //         alert: "Error: ",
    //         explain: function(message) {
    //             var result = this.alert + message;
    //             console.log(result);
    //             return result;
    //         }
    //     };

        //validator object
        // validator.isEmailAddress("derp@gmail.com");
        // validator.isPhoneNumber(9099099);
        // validator.withoutSymbols("Hello #mr derp!");
        // validator.isDate("May 2");
        // validator.isBeforeDate("October 12, 2012", "May 2, 1990");
        //validator.isAfterDate("October 12, 1985", "May 2, 1990");
        //validator.isBeforeToday("October 15, 2020");
        // validator.isAfterToday("October 15, 2012");
        // validator.isEmpty("Derp");
        // validator.contains("Hello there, mr derp!", ["mr", "lep"]);
        // validator.lacks("Hello there, mr derp!", ["mre", "lep"]);
        // validator.contains("Hello there, mr derp!", ["mr", "lep"]);
        // validator.isComposedOf();
        // validator.isLength("Hello mr derp", 10);
        // validator.isOfLength("Hello mr derp", 10);
        // console.log(validator.countWords("Hello-there mr man!    Derrrrp"));
        // validator.lessWordsThan("Hello der lerp", 2);
        // validator.moreWordsThan("Hello der lerp", 2);
        // validator.isBetween(4, 2, 5);
        // validator.isAlphanumeric("Hello 123 !@*");
        // validator.isCreditCard("1234567891010008");
        // validator.isHex("#111111");
        // validator.isRGB("rgb(112, 250, 255)");
        // validator.isHSL("hsl(360, 1, 0)");
        // validator.isColor("rgb(255, 200, 100)");
        // validator.isTrimmed("Herro Plox");

    //form scripts
//     //address form
// window.validator = validator;
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
    //validate address form
    var firstNameValue = firstName.value;
    var lastNameValue = lastName.value;
    var streetAddressValue = streetAddress.value;
    var cityValue = city.value;
    var countryValue = country.selectedIndex;
    if(nameOK(firstNameValue, 2) && nameOK(lastNameValue, 2) && nameOK(streetAddressValue, 3) && nameOK(cityValue, 2) && countryValue !== 0) {
        form.className = "valid";
    } else {
         form.className = "invalid";
    }
    console.log(form.classList);
});

// })(window);

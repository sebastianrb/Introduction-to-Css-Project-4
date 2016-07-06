var form = document.getElementsByTagName("form")[0];
var submitButton = document.getElementById("submit");
var search = document.getElementById("search");
var category = document.getElementById("category");

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
    var searchValue = search.value;
    var categoryValue = category.selectedIndex;

    if(nameOK(searchValue, 2) && categoryValue !== 0) {
        form.className = "valid";
    } else {
         form.className = "invalid";
    }
    console.log(form.classList);
});


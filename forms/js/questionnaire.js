 (function(window){
    var errorObject = {
            alert: "Error: ",
            explain: function(message) {
                var result = this.alert + message;
                console.log(result);
                return result;
            }
        };

        //validator object
        var validator = {
            //email validot
            isEmailAddress: function(input) {
                input = input.toString();
                var indexAt = input.indexOf("@");
                if(indexAt > 0 && indexAt < input.length - 1) {
                    var beforeAt = input.substr(0, indexAt);
                    var afterAt = input.substr(indexAt + 1);
                    // console.log(beforeAt);
                    // console.log(afterAt);
                    if(typeof beforeAt === "string" && typeof afterAt === "string") {
                        // console.log("It's good");
                        return true;
                    }
                } else {
                    errorObject.explain("the information provided is not a valid email address");
                    return false;
                }
            },
            //phone number validator
            isPhoneNumber: function(input) {
                if(typeof input === "number") {
                    var numString = input.toString();
                    var numberLength = numString.length;
                    if(numberLength == 7) {
                        // console.log("It's good");
                        return true;
                    } else {
                        errorObject.explain("The information entered is not a valid phone number");
                        return false;
                    }
                } else {
                    errorObject.explain("The information entered is not a valid phone number");
                    return false;//code
                }
            },
            //remove symbols
            withoutSymbols: function(input) {
                var result = "";
                var counter;
                input = input.toString();
                var inputCharacters = input.split("");
                var symbols = ["/","!", "@", "#","$","%","^","&","*","(",")","_","+","=","-","`","~",";","<",">",".","?","[","]","{","}", "?", "\\", ","];
                //loop through inputCharacters, adding them to the string if not in the symbols array
                var i;
                for(i = 0; i < inputCharacters.length; i++) {
                    counter = 0;
                    var j;
                    for(j = 0; j < symbols.length; j++) {
                        if(inputCharacters[i] === symbols[j]) {
                            counter ++;
                        }
                    }
                    if(counter == 0) {
                            result += inputCharacters[i];
                    }
                }
                console.log(result);
                return result;
            },
            //checks whether the input is a valid date
            isDate: function(input) {
                var date = new Date(input);
                // console.log(date);
                if(date != "Invalid Date") {
                    console.log("Valid date string");
                    return true;
                } else {
                    errorObject.explain("the information entered is not a valid date")
                    return false;
                }
            },
            //before date validator
            isBeforeDate: function(input, reference) {
                //make the input and reference date objects
                if(typeof input === "string") {
                    var date = new Date(input);
                    if(date == "Invalid Date") {
                        errorObject.explain("the information entered is not a valid date");
                        throw "Invalid date entered as input";
                    }
                } else if(typeof input === "date") {
                    var date = input;
                } else {
                    errorObject.explain("the information entered is not a valid date");
                    throw "Invalid date entered as input";
                }
                if(typeof reference === "string") {
                    var dateReference = new Date(reference);
                    if(dateReference == "Invalid Date") {
                        errorObject.explain("the information entered is not a valid date");
                        throw "Invalid date entered as input";
                    }
                } else if(typeof reference === "date") {
                    var dateReference = reference;
                } else {
                    errorObject.explain("the information entered is not a valid date");
                    throw "Invalid date entered as reference";
                }
                //convert both dates to milliseconds
                var dateMil = date.getTime();
                var dateReferenceMil = dateReference.getTime();
                //calculate difference
                console.log(dateMil, dateReferenceMil);
                var difference = dateMil - dateReferenceMil;
                //if difference is greater than 0, return true. Else return false
                console.log(difference);
                if(difference > 0) {
                    console.log("It's after");
                    return true;
                } else {
                    console.log("It's not after");
                    return false;
                }
            },
            //isAfterDate
            isAfterDate: function(input, reference) {
                if(typeof input === "string") {
                    var date = new Date(input);
                    if(date == "Invalid Date") {
                        errorObject.explain("the information entered is not a valid date");
                        throw "Invalid date entered as input";
                    }
                } else if(typeof input === "date") {
                    var date = input;
                } else {
                    errorObject.explain("the information entered is not a valid date");
                    throw "Invalid date entered as input";
                }
                if(typeof reference === "string") {
                    var dateReference = new Date(reference);
                    if(dateReference == "Invalid Date") {
                        errorObject.explain("the information entered is not a valid date");
                        throw "Invalid date entered as input";
                    }
                } else if(typeof reference === "date") {
                    var dateReference = reference;
                } else {
                    errorObject.explain("the information entered is not a valid date");
                    throw "Invalid date entered as reference";
                }
                //convert both dates to milliseconds
                var dateMil = date.getTime();
                var dateReferenceMil = dateReference.getTime();
                //calculate difference
                console.log(dateMil, dateReferenceMil);
                var difference = dateMil - dateReferenceMil;
                //if difference is greater than 0, return true. Else return false
                console.log(difference);
                if(difference < 0) {
                    console.log("It's before");
                    return true;
                } else {
                    console.log("It's not before");
                    return false;
                }
            },
            //before today check
            isBeforeToday: function(input) {
                var today = new Date();
                if(typeof input == "string") {
                    if(this.isDate(input)) {
                        // console.log("It's a good date string!");
                        var date = new Date(input);
                    } else {
                        errorObject.explain("The information entered is not a valid date");
                        throw "The information enteered is not a valid date";
                    }
                } else if(typeof input == "date") {
                    var date = input;
                } else {
                    errorObject.explain("the information entered is not a valid date");
                    throw "Invalid date entered as input";
                }
                //convert to milliseconds;
                var dateMil = date.getTime();
                var todayMil = today.getTime();
                //get difference
                var difference = dateMil - todayMil;
                //logic
                if(difference < 0) {
                    console.log("It's before today");
                    return true;
                } else {
                    console.log("It's not before today");
                    return false;
                }
            },
            //isAfterToday
            isAfterToday: function(input) {
                var today = new Date();
                if(typeof input == "string") {
                    if(this.isDate(input)) {
                        // console.log("It's a good date string!");
                        var date = new Date(input);
                    } else {
                        errorObject.explain("The information entered is not a valid date");
                        throw "The information enteered is not a valid date";
                    }
                } else if(typeof input == "date") {
                    var date = input;
                } else {
                    errorObject.explain("the information entered is not a valid date");
                    throw "Invalid date entered as input";
                }
                //convert to milliseconds;
                var dateMil = date.getTime();
                var todayMil = today.getTime();
                //get difference
                var difference = dateMil - todayMil;
                //logic
                if(difference > 0) {
                    console.log("It's after today");
                    return true;
                } else {
                    console.log("It's not after today");
                    return false;
                }
            },
            //checks for empty input
            isEmpty: function(input) {
                var empty;
                if(typeof input != "string") {
                    console.log("The information entered is not an empty string");
                    return false;
                } else {
                    var inputCharacters = input.split("");
                    console.log(inputCharacters);
                    var i;
                    for(i = inputCharacters.length - 1; i >= 0; i--) {
                        if(inputCharacters[i] === " ") {
                            inputCharacters.splice(i, 1);
                        }
                    }
                }
                var newString = inputCharacters.join("");
                console.log(newString);
                if(newString === "") {
                    console.log("It's an emptry string");
                    empty = true;
                } else {
                    console.log("It's not an emptry string");
                    empty = false;
                }
                console.log(empty);
                return empty;
            },
            //check for words
            contains: function(input, words) {
                var isFound = false;
                var noSymbols = this.withoutSymbols(input);
                var searchArray = noSymbols.split(" ");
                // console.log(searchArray);
                searchArray.forEach(function(item) {
                    var i;
                    for(i = 0; i < words.length; i++) {
                        if(item == words[i]) {
                            isFound = true;
                        }
                    }
                });
                console.log(isFound);
                return isFound;
            },
            //lacks
            lacks: function(input, words) {
                var isLacking = true;
                var noSymbols = this.withoutSymbols(input);
                var searchArray = noSymbols.split(" ");
                // console.log(searchArray);
                searchArray.forEach(function(item) {
                    var i;
                    for(i = 0; i < words.length; i++) {
                        if(item == words[i]) {
                            isLacking = false;
                        }
                    }
                });
                console.log(isLacking);
                return isLacking;
            },
            // isComposedOf: function(input, strings) {
            //     var result = "";
            //     var stringsArray = strings;
            //     strings.forEach(function(item) {
            //         if() {
            //             //code
            //         } else {
            //             //code
            //         }
            //     });
            // },
            isLength: function(input, n) {
                var result;
                var inputString = input.toString();
                if(inputString.length <= n) {
                    result = true;
                } else {
                    result = false;
                }
                console.log(result);
                return result;
            },
            isOfLength: function(input, n) {
                var result;
                var inputString = input.toString();
                if(inputString.length >= n) {
                    result = true;
                } else {
                    result = false;
                }
                console.log(result);
                return result;
            },
            countWords: function(input) {
                var newString,
                newArray,
                i,
                k,
                j;
                var symbols = ["/","!", "@", "#","$","%","^","&","*","(",")","_","+","=","-","`","~",";","<",">",".","?","[","]","{","}", "?", "\\", ","];
                var characters = input.split("");
                // console.log(characters);
                characters.forEach(function(item, index) {
                    for(i = 0; i < symbols.length; i++) {
                        if(item == symbols[i]) {
                            characters[index] = " ";
                        }
                    }
                });
                // console.log(characters);
                for(j = characters.length - 1; j >= 0; j--) {
                    if(characters[0] === " ") {
                        characters.splice(0, 1);
                    } else if(characters[characters.length - 1] === " ") {
                        characters.splice(characters.length - 1, 1);
                    }
                }
                newString = characters.join("");
                newArray = newString.split(" ");
                var k;
                for(k = newArray.length - 1; k >= 0; k--) {
                    if(!newArray[k]) {
                        newArray.splice(k, 1);
                    }
                }
                wordCount = newArray.length;
                return wordCount;
            },
            //less words
            lessWordsThan: function(input, n) {
                var lessThan;
                var wordCount = this.countWords(input);
                if(wordCount <= n) {
                    lessThan = true;
                } else {
                    lessThan = false;
                }
                console.log(lessThan);
                return lessThan;
            },
            //more words
            moreWordsThan: function(input, n) {
                var lessThan;
                var wordCount = this.countWords(input);
                if(wordCount >= n) {
                    lessThan = true;
                } else {
                    lessThan = false;
                }
                console.log(lessThan);
                return lessThan;
            },
            isBetween: function(input, floor, ceil) {
                var between;
                if(input <= ceil && input >= floor ) {
                    between = true;
                } else {
                    between = false;
                }
                console.log(between);
                return between;
            },
            isAlphanumeric: function(input) {
                var alphanumeric = true;
                var symbols = ["\'", "\"", "/","!", "@", "#","$","%","^","&","*","(",")","_","+","=","-","`","~",";",":", "<",">",".","?","[","]","{","}","?", "\\", ","];
                var characterArray = input.split("");
                // console.log(characterArray);
                var i;
                for(i = 0; i < characterArray.length; i++) {
                    var j;
                    for(j = 0; j < symbols.length; j++) {
                        if(characterArray[i] == symbols[j]) {
                            alphanumeric = false;
                        }
                    }
                }
                console.log(alphanumeric);
                return alphanumeric;
            },
            isCreditCard: function(input) {
                var isCredit = true;
                var characterArray = input.split("");
                if(characterArray.length === 19) {
                    if(characterArray[4] != "-" || characterArray[9] != "-" || characterArray[14] != "-") {
                        isCredit = false;
                    }
                    var firstFour = characterArray.slice(0, 4);
                    var secondFour = characterArray.slice(5, 9);
                    var thirdFour = characterArray.slice(10, 14);
                    var fourthFour = characterArray.slice(15, 20);
                    var i;
                    for(i = 0; i < firstFour.length; i++) {
                        if(!this.isAlphanumeric(firstFour[i])) {
                            isCredit = false;
                        }
                    }
                    for(i = 0; i < secondFour.length; i++) {
                        if(!this.isAlphanumeric(secondFour[i])) {
                            isCredit = false;
                        }
                    }
                    for(i = 0; i < thirdFour.length; i++) {
                        if(!this.isAlphanumeric(thirdFour[i])) {
                            isCredit = false;
                        }
                    }
                    for(i = 0; i < fourthFour.length; i++) {
                        if(!this.isAlphanumeric(fourthFour[i])) {
                            isCredit = false;
                        }
                    }
                } else if(characterArray.length === 16) {
                    var i;
                    for(i = 0; i < characterArray.length; i++) {
                        if(!this.isAlphanumeric(characterArray[i])) {
                            isCredit = false;
                        }
                    }
                } else {
                    isCredit = false;
                }
                console.log(characterArray);
                console.log(isCredit);
                return isCredit;
            },
            isHex: function(input) {
                var hex = true;
                input = input.toLowerCase();
                var acceptedCharacters = ["a", "b", "c", "d", "e", "f", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
                var characterArray = input.split("");
                if(characterArray[0] != "#") {
                    hex = false;
                }
                if(characterArray.length === 7 || characterArray.length === 4) {
                    var afterHash = characterArray.slice(1);
                    var i;
                    for(i = 0; i < afterHash.length; i++) {
                       if(acceptedCharacters.indexOf(afterHash[i]) < 0) {
                           hex = false;
                       }
                    }
                } else {
                    hex = false;
                }
                // console.log(hex);
                return hex;
            },
            isRGB: function(input) {
                var rgb = true;
                var count = 0;
                var firstNumberArray, secondNumberArray, thirdNumberArray,firstNumber, secondNumber, thirdNumber;
                var commaLocations = [];
                input = input.toLowerCase();
                var characterArray = input.split("");
                var i;
                for(i = characterArray.length - 1; i >= 0; i--) {
                    if(characterArray[i] == " ") {
                        characterArray.splice(i, 1);
                    }
                }
                var len = characterArray.length;
                var newString = characterArray.join("");
                // console.log(characterArray);
                if(characterArray[0] != "r" || characterArray[1] != "g" || characterArray[2] != "b" || characterArray[3] != "(" || characterArray[len - 1] != ")") {
                    rgb = false;
                }
                // console.log(characterArray);
                // console.log(rgb);
                //check commas
                for(i = 0; i < characterArray.length; i++) {
                    if(characterArray[i] == ",") {
                        count++;
                        commaLocations.push(i);
                    }
                }
                if(count != 2) {
                    rgb = false;
                }
                //make new array of characters between ( and first comma
                //make new array of characters between first command and second comma
                //make new array of characters between second comma and )
                firstNumberArray = characterArray.slice(4, commaLocations[0]);
                secondNumberArray = characterArray.slice(commaLocations[0] + 1, commaLocations[1]);
                thirdNumberArray = characterArray.slice(commaLocations[1] + 1, len - 1);
                // console.log(characterArray);
                firstNumber = +firstNumberArray.join("");
                secondNumber = +secondNumberArray.join("");
                thirdNumber = +thirdNumberArray.join("");
                // console.log(firstNumber, secondNumber, thirdNumber);
                if(!(firstNumber >= 0 && firstNumber <= 255)) {
                    rgb = false;
                } else if(!(secondNumber >= 0 && secondNumber <= 255)) {
                    rgb = false;
                } else if(!(thirdNumber >= 0 && thirdNumber <= 255)) {
                    rgb = false;
                }
                // console.log(rgb);
                return rgb;
            },
            isHSL: function(input) {
                var hsl = true;
                var count = 0;
                var firstNumberArray, secondNumberArray, thirdNumberArray,firstNumber, secondNumber, thirdNumber;
                var commaLocations = [];
                input = input.toLowerCase();
                var characterArray = input.split("");
                var i;
                for(i = characterArray.length - 1; i >= 0; i--) {
                    if(characterArray[i] == " ") {
                        characterArray.splice(i, 1);
                    }
                }
                var len = characterArray.length;
                var newString = characterArray.join("");
                // console.log(characterArray);
                if(characterArray[0] != "h" || characterArray[1] != "s" || characterArray[2] != "l" || characterArray[3] != "(" || characterArray[len - 1] != ")") {
                    hsl = false;
                }
                // console.log(characterArray);
                // console.log(hsl);
                //check commas
                for(i = 0; i < characterArray.length; i++) {
                    if(characterArray[i] == ",") {
                        count++;
                        commaLocations.push(i);
                    }
                }
                if(count != 2) {
                    hsl = false;
                }
                //make new array of characters between ( and first comma
                //make new array of characters between first command and second comma
                //make new array of characters between second comma and )
                firstNumberArray = characterArray.slice(4, commaLocations[0]);
                secondNumberArray = characterArray.slice(commaLocations[0] + 1, commaLocations[1]);
                thirdNumberArray = characterArray.slice(commaLocations[1] + 1, len - 1);
                // console.log(characterArray);
                firstNumber = +firstNumberArray.join("");
                secondNumber = +secondNumberArray.join("");
                thirdNumber = +thirdNumberArray.join("");
                // console.log(firstNumber, secondNumber, thirdNumber);
                if(!(firstNumber >= 0 && firstNumber <= 360)) {
                    hsl = false;
                } else if(!(secondNumber >= 0 && secondNumber <= 1)) {
                    hsl = false;
                } else if(!(thirdNumber >= 0 && thirdNumber <= 1)) {
                    hsl = false;
                }
                // console.log(hsl);
                return hsl;
            },
            isColor: function(input) {
                input = input.toString();
                var color;
                if(this.isHex(input) || this.isRGB(input) || this.isHSL(input)) {
                    color = true;
                } else {
                    color = false;
                }
                console.log(color);
                return color;
            },
            isTrimmed: function(input) {
                input = input.toString();
                var trimmed = true;
                var characterArray = input.split("");
                var len = characterArray.length;
                var spacePositions = [];
                //check spaces at start and end
                if(characterArray[0] === " " || characterArray[len - 1] === " ") {
                    trimmed = false;
                }
                // console.log(trimmed);
                //check spaces positions
                var i;
                for(i = 0; i < len; i++) {
                    if(characterArray[i] === " ") {
                        spacePositions.push(i);
                    }
                }
                // console.log(spacePositions);
                for(i = 0; i < spacePositions.length; i++) {
                    if(characterArray[spacePositions[i] - 1] === " " || characterArray[spacePositions[i] + 1] === " ") {
                        trimmed = false;
                    }
                }
                console.log(trimmed);
            }
        };
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
    //address form
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
    });

})(window);

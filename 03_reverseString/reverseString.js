const reverseString = function(stringToReverse) {
    let reversedString = "";
    for(i = stringToReverse.length - 1; i >= 0; i--){
        reversedString+= stringToReverse.charAt(i);
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;

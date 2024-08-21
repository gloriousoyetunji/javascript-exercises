const repeatString = function(string, repeatNumber) {
    let repeatedString = "";
    if(repeatNumber >= 0){
        for(i = 0 ; i < repeatNumber ; i++){
            repeatedString += string;
        }
     }

     else{
        repeatedString = "ERROR"
     }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;

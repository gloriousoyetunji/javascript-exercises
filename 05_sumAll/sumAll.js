const sumAll = function(number1, number2) {
    var sum= 0;
    if(testValidArgument(number1, number2)){
        if(number1 < number2){
            for(i = number1; i <= number2; i++){
                sum+= i;
            }
        }
        
        else{
            for(i = number2; i <= number1; i++){
                sum+= i;
            }
        }
        return sum;
    }

    else{
        return "ERROR";
    }

};

function testValidArgument(number1, number2){
    valid = true;
    if (number1 < 0 || number2 < 0){
        valid = false;
    }

    if ((typeof number1) != "number" || (typeof number2) != "number"){
        valid = false;
    }    
    
    if (!Number.isInteger(number1) || !Number.isInteger(number2)){
        valid = false;
    }



    return valid
}

x = 3.4;
console.log(typeof 3.4);

// Do not edit below this line
module.exports = sumAll;

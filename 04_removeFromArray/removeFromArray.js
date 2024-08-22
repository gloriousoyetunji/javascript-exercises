const removeFromArray = function(array) {
 var baseArray = arguments[0];
 var args = Array.from(arguments).slice(1);
 var newArray;

 for(i = baseArray.length - 1; i >= 0; i--){
 for (j = 0; j < args.length ; j++){
        if(baseArray[i] === args[j]){
            baseArray.splice(i,1);
        }
    }
 }

 return baseArray;
};

console.log(removeFromArray([1,2,3,4], 3));


// Do not edit below this line
module.exports = removeFromArray;

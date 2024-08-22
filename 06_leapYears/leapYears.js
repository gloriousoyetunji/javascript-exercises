const leapYears = function(year) {
    var isleapYear = false;

    if(((year % 4) == 0) && (((year % 100) != 0) || ((year % 400) == 0)) ){
        isleapYear = true;
    }

    return isleapYear;
};

// Do not edit below this line
module.exports = leapYears;

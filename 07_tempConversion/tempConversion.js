const convertToCelsius = function(temperatureInFarenheit) {
  // return ((temperatureInFarenheit - 32) * (5/9));
  return Math.round(((temperatureInFarenheit - 32) * (5/9)) * 10) / 10 
};

const convertToFahrenheit = function(temperatureInCelcius) {
  // return ((temperatureInCelcius * (9/5)) + 32);
  return Math.round(((temperatureInCelcius * (9/5)) + 32) * 10) / 10 ;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

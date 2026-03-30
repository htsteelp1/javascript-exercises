const convertToFahrenheit = function(temp) {
  return Math.round(10*(((temp)*9/5)+32))/10;
};

const convertToCelsius = function(temp) {
  return Math.round(10*(temp-32)*5/9)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

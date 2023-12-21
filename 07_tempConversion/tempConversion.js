const convertToCelsius = function(Fahrenheit) {
  //F to C is (x-32)* 5/9 
  return Math.round((((Fahrenheit-32)*5/9)*10))/10;

};

const convertToFahrenheit = function(Celsius) {
    // C to F x*9/5+32 
  return Math.round(((Celsius*9/5+32)*10))/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

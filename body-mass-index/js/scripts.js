var bmi = function(weight, conFactor, height){
  return weight * conFactor / (height * height);
};

var weight = parseInt(prompt("Enter your Weight in lbs"));
var height = parseInt(prompt("Enter your Height in inches"));
var conFactor = parseInt(703);
var result = bmi(weight, conFactor, height);
alert(result);

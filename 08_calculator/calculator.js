const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function() {
	let result = 0;
  for(let i=0; i<arguments[0].length; i++){
    result += Number(arguments[0][i]);
  }
  return Number(result);
};

const multiply = function() {
  let result = 1;
  for(let i=0; i<arguments.length; i++){
    result *= Number(arguments[i]);
  }
  return Number(result);
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
	function fact(a){
    if(a<1) {return 1;}
    else return a*fact(a-1);
  }

  return fact(a);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

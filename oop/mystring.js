function upperCase(s){
  return s.toUpperCase();
}

function stringToArray(s){
  return s.split(' ');
}

function convertToNumber(s){
  return parseInt(s);
}

//module.exports =upperCase;
/*module.exports = {
  uc:upperCase,
  sta: stringToArray
};*/


//es6
module.exports = {
upperCase, stringToArray, convertToNumber
};

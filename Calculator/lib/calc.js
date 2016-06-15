function Calc(){
}

Calc.factorial = function(x){
  if (x < 1) return 1;
  let total = 1;
  for (let i =1; i <= x; i++)
  {
    total *= i;
  }
  return total;
}

Calc.sum = function(a,b){
  return a + b;
}

Calc.distance = function(point1,point2){
  xDist = point1.x - point2.x;
  yDist = point1.y - point2.y;
  return Math.sqrt((xDist * xDist) + (yDist * yDist));
}

Calc.fib = function fibonacci(n) {
   if (n <= 1 ){
     return 0;
   }else if (n <= 2) {
     return 1;
   }
   else{
     return fibonacci(n-2) + fibonacci(n-1);
   }
}

Calc.factor = function(number){
  let factorArray = [];
  for (i = 1; i <= number; i++){
    if (number % i == 0){
        factorArray.push(i)
    };
  }
  return factorArray;
}

Calc.isPrime = function(number){

  let resultArray = Calc.factor(number);
  return resultArray.length == 2;

}

Calc.max = function(numArray){
  currentMax = numArray[0];
  for(currNum of numArray){
    if (currNum > currentMax){
      currentMax = currNum;
    }
  }
  return currentMax;
}

Calc.palindrome = function(value){
  return value === value.split('').reverse().join('');
}

Calc.piglatin = function(string){
  let stringArray = string.split(' ');
  let translatedStrings = [];
  for(word of stringArray){
    let firstChar = word.charAt(0);
    //other stuff here...
  }
}

module.exports = Calc;

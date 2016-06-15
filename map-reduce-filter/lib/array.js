//const output = [1, 2, 3].myMap(n , i => n * n);
//fn is a function which we are passing from array.spec.js.  n=> n * n as an ex
//we have arr as an paramter but er are not passing it then js will ignore it
Array.prototype.myMap = function(fn){
  const input = this;
  let output = [];

  input.forEach((val, idx, arr) => {
    let transformed = fn(val, idx, arr);
    output.push(transformed);
  });

  return output;
};

Array.prototype.myFilter = function(fn){
  const input = this;
  let output = [];

  input.forEach((val, idx, arr) => {
    if (fn(val, idx, arr)){
      output.push(val);
    }
  });

  return output;
};


//second solution
// Array.prototype.myReduce = function(fn, init){
//   const input = this;
//   let output;
//
//   if (init) {   //if we use just init and if 0 is passed , it will fail as 0 converts to false in js
//     output = init;
//   } else {
//     output = 0;
//   }
//
//   input.forEach((val, idx, arr) => {
//     output += fn(val, 0)
//   });
//
//   return output;
// };




// first solution
// Array.prototype.myReduce = function(fn, init){
//   const input = this;
//   let output = 0;
//
//   if (init) {
//     input.forEach((val, idx, arr) => {
//       output  +=  fn(val, 0);
//     });
//     output += init;
//   } else {
//     input.forEach((val, idx, arr) => {
//       output  +=  fn(val, 0);
//     });
//   };
//
//   return output;
// };


// Instructor solution
Array.prototype.myReduce = function(fn, accumulator){
  const array = this;
  let start = 0;

  if(accumulator === undefined){
    accumulator = array[0];
    start = 1;
  }

for (let i = start; i< array.length; i++){
  accumulator = fn(accumulator, array[i], i, array);
}

  return accumulator;
};

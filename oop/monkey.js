function Monkey(name,color,age){
  this.name = name;
  this.color = color;
  this.age = age;
  this.foods = [];
  /*this.getFood = function(){
      return this.foods;
  };*/
}
let arrMonkey= [];
const arrColor = ['Red','Black', 'White', 'Orange', 'Green'];
for (let i = 0 ; i < 20; i++){
let randomName = `monkey - ${i}`;//'Monkey' + i;
let randomColor = arrColor[Math.floor(Math.random() * 5)];
let randomAge = Math.floor((Math.random() * 10) + 1);
let newMonkey = new Monkey (randomName,randomColor,randomAge);
  arrMonkey.push(newMonkey);
}


Monkey.prototype.getFood = function(){
  return this.foods;
}

Monkey.prototype.addFood = function(food){
  this.foods.push(food);
}

let m1 = new Monkey('coco','black',2);
m1.addFood('bananas');
console.log("m1:", m1,"f:",m1.getFood());


//console.log('Monkeys List', arrMonkey);
// for(curMonkey of arrMonkey){
// console.log('Current Monkey Name',curMonkey.name);
// console.log('Current Monkey color',curMonkey.color);
// console.log('Current Monkey age',curMonkey.age);
// }


//1. 오브젝트 만드는 법
//object = {key : value};
const obj1={};
const obj2=new Object();

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: "ellie", age: 4 };
print(ellie);

ellie.hasJob = true;
console.log(ellie.hasJob);

delete ellie.hasJob;
console.log(ellie.hasJob);


//2.computed 프로퍼티 접근방법
console.log(ellie.name); //일반적인 방법
console.log(ellie['name']); //key는 string 타입으로 해야함
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj,key){
  console.log(obj[key]);
}

printValue(ellie,'name');
printValue(ellie,'age');




//3.property value shorthand
const person1 = {name:'bob', age:2};
const person2 = {name:'steve', age:3};
const person3 = {name:'dave', age:4};
const person4 =  new Person('ellie',30);
console.log(person4);


//4. Constructor function
function Person(name,age){
    this.name = name;
    this.age = age;
  };




  //5.in operator
  console.log('name' in ellie);
  console.log('age' in ellie);
  console.log('random' in ellie);
  console.log(ellie.random);




  //6.for..in  vs  for..of
  //for (key in obj)
  console.clear();
  for (key in ellie){
    console.log(key);
  }

  //for (value of iterable)
  const array = [1,2,3,4];
  for(value of array){
    console.log(value);
  }
  for(let i =0; i<array.length;i++){
    console.log(array[i]);
  }
//두개가 같은것.


  //7.cloning
  console.clear();
  const user = {name:'ellie', age:'20'};
  const user2 = user;
  user2.name = 'coder';
  console.log(user);
// old way
const user3 = {};
for(key in user){
  user3[key] = user[key];
}
console.log(user3);
  //new way
  const user4 = Object.assign({}, user);
  console.log(user4);

//assign example
const fruit = {color: 'red'};
const fruit2 = {color: 'blue', size:'big'};
const mixed = Object.assign({},fruit,fruit2);
console.log(mixed.color, mixed.size);

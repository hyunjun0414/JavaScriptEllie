'use strict';


// 1. 클래스 선언
class Person{
  //생성자
  constructor(name, age){
    //fields
    this.name = name;
    this.age = age;
  }
  //메소드
  speak(){
    console.log(`${this.name}:hello!`);
  }
}

//오브젝트 생성
const ellie = new Person('ellie',20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();



//2.Getter and setter
class User{
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get age(){
    return this._age;
  }
  set age(value){
    this._age = value<0?0:value;
  }
}

const user1 = new User('steve','job',-1);
console.log(user1.age);



//3.public private( 최근 추가된 기능이라 아직은 알아만 두기)
class Experiment{
  publicField = 2;
  #privateFiled = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);



//4.static
class Article{
  static publisher = 'Dream Coding';
  constructor(articleNumber){
    this.articleNumber = articleNumber;
  }
  static printPublisher(){
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();



//5.상속과 다형성
class Shape{
  constructor(width,height,color){
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw (){
   console.log(`drawing ${this.color} color!`);
    }

  getArea = () => this.width * this.height;
}

class Rectangle extends Shape{}
class Triangle extends Shape{

  toString=()=>`내색깔은 ${this.color}}`;
  draw(){
   super.draw();
   console.log('나 빨강!!')
}

  getArea = () => (this.width*this.height) / 2
  
}

const rg = new Rectangle(20,20,'blue');
rg.draw();
console.log(rg.getArea());

const tg = new Triangle(20,20,'red');
tg.draw();
console.log(tg.getArea());
// 중요 화살표함수로 정의 했으면 오버라이딩 할때도 화살표함수로 해야한다. 
// 단, 화살표함수는 super를 지원하지 않는다.



//6. Class Checking : instanceOf
console.log(rg instanceof Rectangle);
console.log(tg instanceof Rectangle);
console.log(tg instanceof Triangle);
console.log(tg instanceof Shape);
console.log(tg instanceof Object);
console.log(Triangle instanceof Object);
console.log(tg.toString());
console.error('dmd');

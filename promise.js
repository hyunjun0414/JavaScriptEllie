"use strict";
//Promise
//비동기를 간편하게 처리할수 있도록 도와주는 오브젝트
//callback함수대신 유용하게 쓸수있다.
//state: pending> fulfilled or rejected
//producer vs consumer

//1.Producer
//만드는 순간 바로 실행(executor) 때문에 사용자가 요구하지 않았는데도 바로 나타날수
//있기 때문에 유의
const promise = new Promise((resolve, reject) => {
  //heavy work(network, read files)
  console.log("doing something......");
  setTimeout(() => {
    resolve("ellie");
    // reject(new Error("에러 이유를 명시"));
  }, 2000);
});

//2. promise 이용 (Consumers): then, catch, finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

//3.promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1), 1000;
  });
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

//4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("닭"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen}=> 달걀`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 후라이`), 1000);
  });

getHen() //
  .then(getEgg)
  .catch(error=>{
    return '빵';
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);

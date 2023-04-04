'use strict';

//1. 배열 선언
const arr1 = new Array();
const arr2 = [1,2];

//배열은 인덱스 기준으로 저장되기 떄문에 인덱스 활용을 잘해야한다


//2.인덱스를 통한 접근
const fruits = ['사과','바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);

console.clear();
//3.배열안에 값들 다 불러오기
for(let i=0; i<fruits.length; i++){
  console.log(fruits[i]);
}

for(let fruit of fruits){
  console.log(fruit);
}

fruits.forEach((fruit) => console.log(fruit));



//4.더하고 뺴고 복사
//배열 가장뒤 추가 : push
fruits.push('딸기','복숭아');
console.log(fruits);
//배열 가장뒤 제거 : pop
fruits.pop();
fruits.pop();
console.log(fruits);

//앞에서 추가 : unshift
fruits.unshift('딸기','레몬');
console.log(fruits);
//앞에서 제거
fruits.shift();
console.log(fruits);

//shift함수들은 push,pop보다 느리다 : 전체 데이터가 움직여야해서 반복적으로 인덱스를 전부 변경해야하기 떄문에

//지정된 자리 추가제거 : splice
fruits.push('응가','응애');
console.log(fruits);
fruits.splice(3,2,'춘식','곽철');
console.clear();
console.log(fruits);

// 두가지 배열 묶기 : concat
const fruits2 = ['메론','키위'];
const combinedFruits = fruits.concat(fruits2);
console.log(combinedFruits);




// //5.검색 find the index : index of, includes, lastIndexOf
// console.clear();
// console.log(fruits);
// console.log(fruits.indexOf('사과'));
// console.log(fruits.includes('춘식'));

// //lastIndexOf
// console.clear();
// fruits.push('사과');
// console.log(fruits);
// console.log(fruits.indexOf('사과'));
// console.log(fruits.lastIndexOf('사과'));


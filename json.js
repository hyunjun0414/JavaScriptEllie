// //1. 오브젝트를 json으로 변환
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json);

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthday: new Date(),
  jump: function () {
    console.log(`${this.name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name", "color"]);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key:${key}, value:${value}`);
  return value;
});

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`ket:${key}, value:${value}`);
  return key === "name" ? "ellie" : value;
});
console.log(json);

//2. json을 오브젝트로 변화
//parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
  console.log(`ket:${key}, value:${value}`);
  return key === "birthday" ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump(); //오브젝트를 json으로 변환할때 함수는 변환되지않았기 떄문에 다시
//json을 오브젝트로 변환할떄도 함수는 포함되어있지않다.

console.log(rabbit.birthday.getDate());
console.log(obj.birthday.getDate()); //birthday는 오브젝트자체이고
//json으로 만들때 string형식으로 왔기때문에 사용불가

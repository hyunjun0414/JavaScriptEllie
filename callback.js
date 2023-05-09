"use strict";

// //javascript는 동기적이다 (synchronous)
// //hoisting 이후부터 차례로 실행된다
// //hoistiong: var나 함수선언들이 자동적으로 제일 위로 올라가는것
// console.log("1");
// //call back함수란 전달해준 함수를 나중에 불러줘: 특정이벤트에 의해 호출되는 함수
// setTimeout(() => console.log("2"), 1000);
// console.log("3");

// //synchronous callback 동기적
// function printIMMediately(print) {
//   print();
// }
// printIMMediately(() => console.log("hello"));

// //asynchronous callback 비동기적
// function printWithDelay(print, timeout) {
//   setTimeout(print, timeout);
// }

// printWithDelay(() => console.log("async callBack"), 2000);

//callBack Hell Example
class UserSrorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 1000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else if (user === "coder") {
        onSuccess({ name: "coder", role: "study" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userSrorage = new UserSrorage();
const id = prompt("enter your id");
const password = prompt("enter your password");

userSrorage.loginUser(
  id,
  password,
  (user) => {
    userSrorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `'hello ${userWithRole.name},you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);

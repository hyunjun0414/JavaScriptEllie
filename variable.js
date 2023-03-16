'use strict';
// let globalName = 'global name';

// {
//   let name = 'ellie';
// console.log(name);
// name = 'hello';
// console.log(name);

// }
// console.log(globalName);


//// const는 안전성이 좋다.
// const count = 17;
// const size = 1.7;
// console.log(`value: ${count}, type: ${typeof count}`);
// console.log(`value: ${size}, type: ${typeof size}`);


//
// const infinity = 1 / 0;
// const negativeInfinity = -1 / 0;
// const nAn = 'not a number' / 2;
// console.log(infinity);
// console.log(negativeInfinity);
// console.log(nAn);


// // 새롭게 생겼지만 아직 사용은 잘 안함.
// const bigInt = 12412476841236498124346263546236498172369283746n;
// console.log(`value: ${bigInt}, type: ${typeof bigInt}`);



// //String
// const char = 'c';
// const ddd = 'dddd';
// const ddfsdfksdf = 'hello' + ddd;
// console.log(`value: ${ddfsdfksdf}, type: ${typeof ddfsdfksdf}`);
// const hellobob = `hi ${ddd}!`;
// console.log(`value: ${hellobob}, type: ${typeof hellobob}`);


// //Null
// let nothing = null;
// console.log(`value:${nothing}, type:${typeof nothing}`);
// // Undefined
// let x;
// console.log(`value:${x}, type:${typeof x}`);


// //고유한 식별자를 만들때 사용
// //바로 출력하지 말고 description을 이용해서 문자로 바꿔서 사용
// const symbol1 = Symbol('id');
// const symbol2 = Symbol('id');
// console.log(symbol1 === symbol2);
// const gsymbol1 = Symbol.for('id');
// const gsymbol2 = Symbol.for('id');
// console.log(gsymbol1 === gsymbol2);
// console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);


// //object
// const ellie = {name:'ellie', age:20};
// ellie.age = 21;
// console.log(ellie.age);



// // Dynamic typing
// let text = 'hello';
// console.log(text.charAt(0));
// console.log(`value: ${text}, type: ${typeof text}`);
// text = 1;
// console.log(`value: ${text}, type: ${typeof text}`);
// text = '7' + 5;
// console.log(`value: ${text}, type: ${typeof text}`);
// text = '8' / '2';
// console.log(`value: ${text}, type: ${typeof text}`);


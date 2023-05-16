//Promise를 좀더 간결하게하고 동기적으로 실행되는것처럼 보이게 한다.
//무조건적으로 Promise를 대신해 쓰는것은 아니다.


//1. 사용법
async function fetchUser(){//함수안 코드블록이 자동으로 promise로 변환됨
    return 'ellie';
  }


const user = fetchUser();
user.then(console.log);
console.log(user);


//2. await
function delay(ms){
  return new Promise(resolve=>setTimeout(resolve,ms))
}

async function getApple(){
  await delay(2000);
  return '사과';
}

async function getBanana(){
  await delay(1000);
  return '바나나';
}

//promise chaining으로 하면
function pickFruits(){
  return getApple().then(apple=>{
    return getBanana().then(banana=>`${apple} + ${banana}`);
  });
}

  pickFruits().then(console.log);

  //async await이용하면
console.clear();
async function pickFruits(){
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);



//3. 유용한 Promise API
function pickAllFruits(){
  //Promise 배열이 전부 병렬적으로 모아진다
  return Promise.all([getApple(),getBanana()])
  .then(fruits => fruits.join(' + '));
}
pickFruits().then(console.log);


function pickOnlyOne(){
  //가장 먼저 값을 리턴하는것만 전달됨
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log)

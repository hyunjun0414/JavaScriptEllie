//1. 배열을 string으로 만들기
{
  const fruits = ['apple','banana','orange'];
  result = fruits.join();
  console.log(result);
  result = fruits.join(' and ');
  console.log(result);
}
//2. string을 배열로 만들기
{
  const fruits = 'apple,banana,orange';
  result = fruits.split(',');
  console.log(result);
  result = fruits.split(',',2);
  console.log(result);
}
//3 배열순서를 거꾸로 뒤집기
{
  const array = [1,2,3,4,5];
  result = array.reverse();
  console.log(result);
  console.log(array);
}
//4.주어진 배열에서 첫번쨰 두번쨰 삭제해서 새로운 배열 생성
//splice는 배열 자체를 수정 slice는 배열에서 원하는 부분만 수정
{
  const array = [1,2,3,4,5];
  result = array.slice(2,5); // 마지막 인덱스는 배제
  console.log(result);
  console.log(array);
}

console.clear();
class Student{ //클래스 생성
  constructor(name, age, enrolled, score){
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const student = [// 객체 생성
  new Student('a',20,true,45),
  new Student('b',22,false,90),
  new Student('c',23,true,20),
  new Student('d',25,false,50),
  new Student('e',28,true,66)
]


//5.90점인 학생을 찾아라
{
  const result = student.find((student) => student.score === 90)
  console.log(result);
}

//6.등록한 학생들만 골라서 배열생성
{
  const result = student.filter((student)=> student.enrolled)
  console.log(result);
//그 중에서 이름을 뽑아오는 방법은 map사용
  const result2 = student.filter((student)=> student.enrolled)
  .map(student => student.name)
  
  console.log(result2);
  
}

//7.학생 점수만 뽑아와서 새로운 배열만들기
{
  const result = student.map((student)=> student.score);
  console.log(result);
}

//8. 점수가 50점보다 낮은학생이 있는지
{
  //한명이라도 조건이 충족되면 true
  const result = student.some((student) => student.score < 50);
  console.log(result);

  //전체가 조건이 충족되어야 true
  const result2 = student.every((student) => student.score < 50);
  console.log(result2);
}

//9. 학생들의 평균점수 구하기
{
  //reduce함수는 이전값과 현재값을 누적해서 리턴 
  //prev이전에 함수에서 리턴된값이 전달되고 curr은 배열의 아이템을 순차적으로 
  //전달받는다.
  const result = student.reduce((prev,curr) =>{
    console.log('---------');
    console.log(prev);
    console.log(curr);
    return prev + curr.score;
  }, 0); //최초값을 0으로 설정
  console.log(result / student.length);
}

//10. 학생점수를 string으로 변환 '45,90,20,50,66'
{
  const result = student
  .map((student)=> student.score) // map을 이용하여 점수들만 있는 배열을 생성
  .filter((score) => score >= 50) // 점수가 50점 이상인 아이들만 출력
  .join() // string으로 변환
  console.log(result);
}


//11. 학생들의 점수를 낮은순으로 정렬하기
{
  const result = student
  .map((student)=>student.score)
  .sort((a,b)=>a - b)
  .join();
  console.log(result);
}

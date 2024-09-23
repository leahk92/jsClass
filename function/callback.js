// 콜백 함수
// callback : 나중에 호출한다
// 함수의 파라미터로 들어가는 함수

// 용도 :
// 순차적으로 실행하고 싶을 때
// 함수의 실행순서를 제어한다.

// function foo() {}

// function zoo() {
//   return 1;
// }

// foo함수를 호출하여 zoo함수 결과값인 1을 출력하고 싶다
function foo(action) {
  action();
}

function zoo() {
  return 1;
}
foo(zoo);
// 신기하다

// setTimeout : 일정시간 후에 한번만 실행
// setInterval : 일정시간 간격으로 반복실행

// setTimeout( , 2000); //2초 후
// setTimeout(() => {
//   console.log("2초 후 한번만 실행"); //콜백함수 - 순서 제어
// }, 2000);

// let intervalId = setInterval(() => {
//   console.log("1초마다 반복 실행");
// }, 1000);

// setTimeout(() => {
//   clearInterval(intervalId); //5초 후 반복 중지
// }, 5000);

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

function calculator(a, b, action) {
  if (a < 0 || b < 0) {
    return;
  }
  let result = action(a, b);
  console.log(result);
  return result;
}
calculator(1, 1, add);
calculator(2, 3, multiply);
calculator(-2, 3, multiply); //실행x

// 함수 : 독립적으로 정의된 거
// 메서드 : 객체 안에 속성으로 정의된 거 -> 객체를 통해 접근 가능

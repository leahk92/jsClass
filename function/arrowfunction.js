console.log(add(1, 2)); //호이스팅 가능

// 함수선언문
function add(a, b) {
  return a + b;
}
// 함수표현식으로 변환
const sum = function (a, b) {
  return a + b;
};

// 함수선언문 : 호이스팅 가능, 함수이름 반드시 포함
// 함수표현식 : 호이스팅 불가, 무명함수 사용

// 화살표 함수로 변환
const add = (a, b) => {
  //파라미터(인수)만 남기고 중괄호
  //표현식을 줄인 거라서 호이스팅 불가
  return a + b;
};

// 더 간략화
// 하는 일이 단순히 반환하는 일밖에 없어서 가능
const add = (a, b) => a + b;

// 매개변수가 하나일 경우
function square(x) {
  return x * x;
}
// 표현식으로 변환
const square = function (x) {
  return x * x;
};

const square = (x) => x * x; //return도 생략
//매개변수 하나라서 괄호도 생략가능 - Prettier가 자동으로 생기게해서 안써짐

// 매개변수가 없는 경우
function greet() {
  return "Hello!";
}
const greet = () => {
  return "Hello!";
};
const greet = () => "Hello!";

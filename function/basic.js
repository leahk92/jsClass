// 특정한 일을 수행하는 코드의 집합
// 재사용 가능, 유지보수성, 높은 가독성

// 함수 단위로 작은 일을 묶는다.
// 수행하는데 일을 잘 나타낼 수 있는 이름 짓기
// 매개변수 이름도 의미있게 작성
// 함수도 객체다

// 함수 선언문
function add(a, b) {
  return a + b;
}
console.log(add(1, 2));

// 함수의 표현식
// 무명함수 - 이름이 없는 함수
let sum = function (a, b) {
  return a + b;
};
console.log(sum(2, 3));

///////////////////////////////

let width1 = 10;
let height1 = 20;
let area1 = width1 * height1;
console.log(area1);

console.log(getArea(10, 20)); // 호이스팅

function getArea(width, height) {
  return width * height;
}

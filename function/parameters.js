// 매개변수의 기본값은 undefined
function add(a, b) {
  console.log(a);
  console.log(b);
  return a + b;
}
add();

// Rest parameters : 나머지 매개변수
// 제일 마지막에 위치, 배열로 값을 받는다.
function sum(a, b, ...numbers) {
  console.log(a);
  console.log(b);
  console.log(numbers);
}
sum(1, 2, 3, 4, 5, 6, 7);

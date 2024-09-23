// 비교연산자
// 세 개의 숫자를 받아, 가장 큰 수를 반환하는 함수

// function getMax(a, b, c) {
//   return Math.max(a, b, c);
// }
// console.log(getMax(5, 10, 3));

////////////////////////////////
function getMax(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}
console.log(getMax(5, 10, 3));
console.log(getMax(5, 10, 11));

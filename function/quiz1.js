// factorial 팩토리얼
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5));

// 재귀함수 Recursive Function
// 자기자신을 호출하는 함수
// 설계할 때 무한루프 조심 : 특정 조건에서 종료가 되게끔 설계

function factorial2(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial2(n - 1);
}
console.log(factorial2(5));

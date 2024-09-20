// 논리연산자
// && 그리고
// || 또는
// != 부정
// !! 불리언 값으로 변환

let num = 8;
if (num >= 0 || num > 20) {
  console.log("최고");
}

if (num != 9) {
  console.log("진짜?");
}
console.log(true && true); //true
console.log(true && false); //false

console.log(false || false); //false
console.log(true || false); //true

console.log(!"text"); //false
console.log(!!"text"); //true

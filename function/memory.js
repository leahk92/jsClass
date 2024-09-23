function sum(a, b) {
  return a + b;
}

const add = sum; //메모리 주소

console.log(sum(2, 3));
console.log(add(2, 3));
// 결과는 같다.

console.log(add()); //Not a Number
console.log(add(5)); //Not a Number

// 인수를 전달하지 않으면 기본적으로 undefined
// undefined + undefined = NaN

// 동등 비교 관계 연산자
// == !=
// === !== 값과 타입을 같이 비교

console.log(2 == 2); //true
console.log(2 != 2); //false
console.log(2 == 3); //false
console.log(2 == "2"); //true : 값이 같다 - 문자2를 숫자2로 변환해서 비교함
console.log(2 === "2"); //false
console.log(true == 1); //true
console.log(true === 1); //false

/////////////////////////
const obj1 = {
  name: "JS",
};
const obj2 = {
  name: "JS",
};
console.log(obj1 == obj2); //false
console.log(obj1 === obj2); //false
console.log(obj1.name == obj2.name); //true

let obj3 = obj2;
console.log(obj2 == obj3); //true
console.log(obj2 === obj3); //true

// 배열
const numbers = [1, 2, 3, 4, 5];
const fruits = ["apple", "banana", "cherry"];
const mixed = [1, "hello", { name: "leah" }, [2, 3]];

// console.log(mixed);
// console.log(fruits.length);
// console.log(fruits[0]);
// console.log(fruits[2]);

// 배열 끝에 요소 추가 push, 끝 요소 삭제는 pop
fruits.push("melon");

// 특정 위치에 요소 추가/삭제
fruits.splice(1, 2); //인덱스 1부터 2개 요소 삭제
console.log(fruits);

// Math 객체(내장 객체 : Math.메서드())
// 난수 생성
console.log(Math.random(4.9));
console.log(Math.random(4.1));
console.log(Math.random(-4.9));

// 1 ~ 10 사이의 난수 발생
const randomInt = Math.floor(Math.random() * 10) + 1;
console.log(randomInt);

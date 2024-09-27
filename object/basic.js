// Object
// { key : value }

// key - 문자, 숫자, 문자열
// value - 원시값, 객체(함수)

let apple = {
  name: "apple",
  "heelo-bye": " 안녕",
  0: 1,
};

// 객체에 접근하는 법

// 마침표 표기법(dot notation)
apple.name;
console.log(apple.name);

// 대괄호 표기법(bracket notation)
apple["hello-bye"];
console.log(apple["hello-bye"]); //undefined

apple["name"];
console.log(apple["name"]);

// 속성 추가
apple.color = "red";
console.log(apple);

//속성 삭제
delete applec.color;
console.log(apple);

///////////////////////////
const person = {
  name: "leah",
  age: 31,
};
// person객체가 메모리 힙 영역에 들어가있고
// 메모리 시작부분 주소 값을 가지고 있는 것

// 속성 접근
console.log(person.name);
console.log(person.age);

// 속성 수정
person.age = 40;
console.log(person.age);

// 속성 추가 city
person.city = "Busan";
console.log(person.city);

// 속성 삭제
delete person.age;
console.log(person);

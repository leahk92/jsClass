// 객체 속성에 접근하는 특별한 상황

// 변수를 사용하여 동적으로
const key = "age";
const person = {
  name: "sunggon",
  age: 30,
};
console.log(person[key]);

// 속성 이름에 공백 또는 특수문자
const person2 = {
  "first name": "sunggon", //firstName
  "age-group": 30, //ageGroup
};
console.log(person2["first name"]);
console.log(person2["age-group"]);
// '동적' 의미 : 속성이름을 미리정하지않고 상황에 따라 결정

// let은 재할당 가능
let a = 1;
a = 2;

// const 한번 선언하면 재할당 불가능
const text = "hello";
// text = "hi";

const apple = {
  name: "apple",
  color: "red",
};
apple.name = "orange";
apple.weight = "150g";
console.log(apple);
// 간접참조로 된 object는 재할당 가능

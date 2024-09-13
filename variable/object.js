// let name = "apple";
// let color = "red";
// let display = "사과";

// let apple = {
//   name: "apple",
//   color: "red",
//   display: "사과",
// };
// console.log(apple);
// console.log(apple.color);
// console.log(apple.name);

let orange = {
  color: "yellow",
  type: "fruit",
  weight: "150g",
  //메서드 - 쓰는법 옛날 방식
  eat: function () {
    console.log("배고파");
  },
  //ES6 이후
  slice() {
    console.log("...");
  },
};
console.log(orange);
orange.color = "red";
console.log(orange);

let blueberry = orange;
// 블루베리 내용 수정하면 오렌지 내용 바뀜

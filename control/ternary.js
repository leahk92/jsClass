// 삼항연산자
// ternary operator

// let emoji = fruit === "apple" ? "사과" : "오렌지";
// 조건식 ? 참 : 거짓

let fruit = "apple";
if (fruit === "apple") {
  console.log("사과");
} else {
  console.log("사과아님");
}

fruit === "apple" ? console.log("사과") : console.log("사과아님");

let emoji = fruit == "apple" ? "사과" : "사과아님";
console.log(emoji);

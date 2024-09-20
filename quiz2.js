// 삼항연산자
// 숫자를 매개변수로 받아서, 양수이면 positive · 음수면 negative 출력

function checkNum(num) {
  let number = num > 0 ? "positive" : "negative";
  return console.log(number);
}
checkNum(3);

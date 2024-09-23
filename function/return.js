function add(a, b) {
  //   return a + b;
}
console.log(add(1, 2)); //undefined
// return undefined
// return을 명시적으로 하지 않으면 자동으로 undefined 반환

// return을 함수 중간에 하면 함수가 종료됨.
// 함수가 무슨 일을 하기 전에 인자가 유효한지 아닌지 점검!!
function print(num) {
  if (num < 0) {
    return;
  }
  console.log(num);
}
print(12);
print(-12); //안나옴

// return 반드시 사용해야 하나?
// 값을 반환받을 필요가 없을땐 return 사용 안해도 됨
function print2(text) {
  console.log(text);
}
print("text");

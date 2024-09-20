// for(변수선언문;  조건식; 증감식){}
// 조건식이 거짓이 될 때까지 반복

for (let i = 0; i < 5; i++) {
  console.log(i);
}
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}

// 무한루프 : 절대 조심
// for (;;) {
//   console.log("무한반복 조심");
// }

// for (let i = 0; i < 10; ) {}
// {
//   console.log(i);
// }

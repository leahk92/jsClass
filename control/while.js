// while(조건){}
// 조건이 거짓이 될 때까지 {} 반복 실행
let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}

let isActive = true;
let i = 0;
while (isActive) {
  console.log("나는 살아있다.");
  if (i == 100) {
    break;
  }
  i++;
}

isActive = false;
do {
  console.log("나는 한번은 살아있다");
} while (isActive);

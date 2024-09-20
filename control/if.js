// 조건문
// if(조건) {}
// if(조건) {} else{}
// if(조건1) {} else if(조건2) {} ...else{}
let score = 85;
if (score > 90) {
  console.log("A");
} else if (score > 80) {
  console.log("B");
} else {
  console.log("C");
}

// 불리언 값 비교
let isAvailable = true;
let userLogIn = true;
if (isAvailable && userLogIn) {
  console.log("Access!!!");
}

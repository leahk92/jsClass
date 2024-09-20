let num = 10;
if (num > 5) {
  console.log("num은 5보다 큽니다.");
}

// for문
for (let i = 0; i < 10; i++) {
  let num = 10;
}
if (num > 5) {
  console.log("num은 5보다 큽니다.");
}

// for (let i = 0; i < 10; i++) {
//   if (i == 5) {
//     break;
//   }
//   console.log(i);
// }
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}

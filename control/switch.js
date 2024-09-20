// 하나의 변수 또는 표현식(숫자로 나타낼 수 있는 값)에 대한 값을 비교할 때
let fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("This is apple");
    break;
  case "banana":
    console.log("This is banana");
    break;
  case "strawberry":
    console.log("This is strawberry");
    break;
  default:
    console.log("unknown fruit");
}

// 정수 기반 비교
let num = 3;
switch (fruit) {
  case 1:
    console.log("This is apple");
    break;
  case 2:
    console.log("This is banana");
    break;
  case 3:
    console.log("This is strawberry");
    break;
  case 4:
    console.log("unknown fruit");
}

// 여러 케이스가 같은 동작을 해야할 때
let day = 2;
switch (day) {
  case 1:
  case 2:
  case 3:
    console.log("Weekday");
    break;
  case 4:
  case 5:
    console.log("Almost weekend");
    break;
  default:
    console.log("Weekend");
}

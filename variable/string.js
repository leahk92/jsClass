let string = "hello";
string = "안녕";
string = "안녕! \n리아\t\t내 이름은"; //이스케이프 표현
console.log(string);

// 템플릿 리터럴
let id = "leah";
let greeting = "안녕" + id + "즐거운 하루";
console.log(greeting);
greeting = `안녕 ${id}즐거운 하루`; //벡틱
console.log(greeting);

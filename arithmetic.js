// 산술연산자
// + - * / % **

console.log(5 + 2);
console.log(5 - 2);
console.log(5 * 2);
console.log(5 / 2);
console.log(5 % 2);
console.log(5 ** 2); //ES7 이후
console.log(Math.pow(5, 3)); //옛날

// 주의점
let text = "두개의" + "문자열을 더함";
console.log(text);
text = "1" + 1; //문자 + 숫자 => 문자열
console.log(text);
console.log(typeof text);
text = "1" + 2; //문자 + 숫자 => 문자열
console.log(text);
console.log(typeof text);

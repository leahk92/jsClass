// 단항연산자
// + 양, - 음, ! 부정

let a = 5;
a = -a;
console.log(a); //-1*5
a = a + a;
console.log(a); //10

let boolean = true;
console.log(boolean); //true
console.log(!boolean); //false
console.log(!!boolean); //true

// 숫자가 아닌 type을 숫자로 변환
console.log(+false); //0
console.log(+null); //0
console.log(+undefined); //NaN
console.log(+""); //0
console.log(+true); //1
console.log(+"text"); //NaN

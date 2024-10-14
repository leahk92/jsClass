// 클래스 : 객체를 손쉽게 만들수 있는 템플릿(틀)
// 1. 생성자 함수(고전적인 방법)
// 2. 클래스 ⭐⭐

// 생성자 함수
// function Person(name, age) {
//   this.name = name;
//   this.age = age;

// * sayHello라는 메서드를 객체에 추가 *
//   this.sayHello = function () {
//     console.log(`${this.name}가 인사합니다`);
//   };
// }

// 클래스
class Person {
  // 생성자 : new 키워드로 객체를 생성할 때 호출하는 함수
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // instance method
  sayHello() {
    console.log(`${this.name}가 인사합니다`);
    // 위의 문자열 출력 후 함수 자체에 return문이 없기 때문에 호출 결과 undefined
  }
  //   sayHello = () => {
  //     console.log(`${this.name}가 인사합니다`);
  //   };

  //   function name(params) {
  //   } : 에러 발생
}

// 생성자 함수와 클래스는 객체 만드는 방법은 동일
// sunggon은 Person 클래스의 **인스턴스**이다.
const sunggon = new Person("성곤", "30"); // Person { name: '성곤', age: '30' }
const leah = new Person("리아", "31"); // Person { name: '리아', age: '31' }

console.log(sunggon);
console.log(leah);
console.log(leah.name);
leah.sayHello();
// console.log(leah.sayHello()); //리아가 인사합니다 <br> undefined

// obj는 그냥 **객체**이고, 그 어떤 클래스의 인스턴스가 아니다.
// const obj = { name: "sunggon" };

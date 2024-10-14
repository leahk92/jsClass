// 접근제어자 : 클래스의 속성이나 메서드에 접근할 수 있는 범위를 제어
// 캡슐화로 숨김
// private, public, protected
// public : 기본적인 개념, 클래스 외부에서 자유롭게 접근
// private : 비공개, 외부에서 접근할 수 없음. 자바스크립트에서는 # 사용
// prodtected 아직 지원 x

class Person {
  // private field
  #name;
  #age;
  #gender = "female"; //인자 받지 않고 고정 - 데이터 미리 초기화

  // 생성자를 통해 private field 초기화
  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  // private method
  #sayHello = function () {
    console.log(`${this.#name}가 인사합니다`);
  };

  // getter 메서드 추가
  getSayHi = function () {
    return `${this.#name} says Hi.`;
  };
  getAge() {
    return this.#age;
  }
}

const leah = new Person("리아", "31");
console.log(leah); //Person {}
console.log(leah.age); //undefined
// console.log(leah.#age); //외부에서 접근 불가

console.log(leah.getSayHi()); //리아 says Hi.
// leah.getSayHi(); // X
console.log(leah.getAge());

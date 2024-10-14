// 정적 프로퍼티, 메서드
class Person {
  // static property (정적 속성)
  static MAX_NUMBER = 4;

  // 생성자
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // instance method
  sayHello() {
    console.log(`${this.name} says "Hello".`);
  }

  // static method (정적 메서드)
  static makePerson() {
    return new Person("Felicity", "30");
  }
}

///

// @static property - 클래스 자체에 저장(객체 인스턴스X)
console.log(Person.MAX_NUMBER); //4
// Person.MAX_NUMBER 으로 접근 가능
// 개별 Person 객체에서 접근 불가

// @instance method
const arrow = new Person("Oliver Queen", 33);
arrow.sayHello(); //개별 객체에서 호출
// sayHello()는 각 객체 인스턴스가 사용할 수 있는 메서드

// @static method - 클래스 자체에 속하는 메서드
// 개별 객체 인스턴스와 독립적으로 작동
const overwatch = Person.makePerson(); //클래스에서 직접 호출
console.log(overwatch);
console.log(overwatch.name);
console.log(overwatch.age);
//makePerson 메서드가 Person클래스의 새로운 인스턴스를 생성하여 반환

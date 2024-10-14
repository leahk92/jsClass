// 속성 접근자 : getter / setter
// 메서드인데 속성처럼 접근이 가능하게 해주는 특수한 메서드
// 외부에서 보면 메서드가 아닌 속성처럼 보임

let user = {
  name: "Matt",
  surname: "Damon",

  //   getter
  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  //   setter
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
};
console.log(user.fullName);
user.fullName = "KANG LEAH";
console.log(user.fullName);

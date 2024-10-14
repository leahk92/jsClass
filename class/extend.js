class Animal {
  constructor(feature) {
    this.feature = feature;
  }
  eat() {
    console.log("먹기");
  }
  sleep() {
    console.log("자기");
  }
  hunt() {
    console.log("사냥하기");
  }
}

class Tiger extends Animal {}
const tiger = new Tiger("줄무늬");
// console.log(tiger); //Tiger { feature: '줄무늬' }
// tiger.sleep();

class HighlandCattle extends Animal {
  constructor(feature, owner) {
    super(feature);
    this.owner = owner;
  }
  what() {
    console.log("highland에 사는 소");
  }

  //오버라이딩 overriding
  eat() {
    super.eat();
    console.log("highland cattle eating");
  }
}

const highlandCattle = new HighlandCattle("뿔과 앞머리", "LEAH");
console.log(highlandCattle);
highlandCattle.sleep();
highlandCattle.hunt();
highlandCattle.eat();
highlandCattle.what();

let user = {
  name: "leah",
  gender: "female",
};

let changeName = function (user, newName) {
  return {
    name: newName,
    gender: user.gender,
  };
};

let user2 = changeName(user, "Thea");

if (user !== user2) {
  console.log("유저 정보가 변경 되었습니다.");
}
console.log(user.name, user2.name);
console.log(user === user2);

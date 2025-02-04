//分割代入
const myProfile_1 = {
  name: "主田",
  age : 24
};

const {name, age} = myProfile_1;
const message_1 = `私の名前は${name}です。年齢は${age}歳です。`
console.log(message_1);

const {name: newName, age: newAge} = myProfile_1;
const message_2 = `私の名前は${newName}です。年齢は${newAge}歳です`
console.log(message_2);

//配列の分割代入
const myProfile_2 = ["山田", 24];

const[name_2, age_2] = myProfile_2;
const  message_3 = `私の名前は${name_2}です。${age_2}歳です。`
console.log(message_3);

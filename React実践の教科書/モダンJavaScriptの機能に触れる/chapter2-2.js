const name = "主田";
const age  = 24;

const message = `私の名前は${name}です。${age}歳です`;
console.log(message);

function sayHello() {
  return "こんにちは!";
}

const month = 1;
const message = `皆さん${sayHello()}。今日から${month*2}月です。`;
console.log(message);
//デフォルト値の設定
const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
sayHello();
sayHello("主田");

//分割代入時にデフォルト値の設定
const myProfile = {
  age: 24,
}

const {name_3 = "ゲスト"} = myProfile;
const message = `こんにちは${name_3}さん`;
console.log(message);

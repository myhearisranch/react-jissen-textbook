//変数の上書き
let val2 = "let変数";
console.log(val2);

val2 = "変数の上書き";
console.log(val2);

//再宣言の実行
let val2 = "let変数";
console.log(val2);

let val2 = "再宣言";
console.log(val2)

//Uncaught SyntaxError: Identifier 'val2' has already been declaredというエラーが発生

//constでの変数宣言
const val3 = "const変数";
console.log(val3);

//const変数は上書き不可能
val3 = "上書き";
console.log(v3);
//Uncaught TypeError: Assignment to constant variable.

//再宣言も不可能
const val3 = "const変数";
console.log(val3);

const val3 = "再宣言";
console.log(val3);
//Identifier 'val3' has already been declared

//オブジェクトのプロパティを変更, 追加する例
//オブジェクトを定義
const obj1 = {
  name: "主田",
  age : 24
};

console.log(obj1);

//プロパティ値の変更
obj1.name = "Nushida";
console.log(obj1);

//プロパティの追加
obj1.address = "Tokyo";
console.log(obj1);

//配列の値を変更、追加する例
const arr1 = ["dog", "cat"];
console.log(arr1);

arr1[0] = "bird";
console.log(arr1);

arr1.push("monkey");
console.log(arr1);
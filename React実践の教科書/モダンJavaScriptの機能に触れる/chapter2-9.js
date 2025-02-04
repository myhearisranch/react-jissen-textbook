//三項演算子
// 条件式 ? 条件がtrueの処理 : 条件がfalseのときの処理

//?と:を使った例
const val1 = 1 > 0 ? "trueです" : "falseです"
console.log(val1);

//入力値に対するメッセージを出す
const printFormattedNum = (num) => {
  const formattedNum = typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
  console.log(formattedNum);
}

printFormattedNum(1300);
printFormattedNum("abc");

//関数のreturn部で三項演算子を用いる
//2つの引数の合計が100を超えているか判定する関数
const checkSum100 = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
}

console.log(checkSum100(78, 21));
console.log(checkSum100(657, 768));
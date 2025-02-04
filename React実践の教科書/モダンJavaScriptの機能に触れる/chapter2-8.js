//map関数

//配列を定義
const nameArr  = ["後藤", "田中", "前田"];
const nameArr2 = nameArr.map((name) => {
  return name;
});

console.log(nameArr2);

const nameArr_index  = nameArr.map((name => {
  console.log(name);
}))

//filter関数
//returnの後に条件式を書いて一致するものに返却させる
const numberArr = [1, 2, 3, 4, 5];
const newNumArr = numberArr.filter((num) => {
  return num % 2 == 1;
});

console.log(newNumArr);

//map関数の引数で要素順で取り出す
nameArr.map((name, index) => {
  console.log(`${index+1}番目は${name}です。`)
});

//map関数を用いたサンプル
//後藤, 田中, 前田の名前が格納された配列がある。
//後藤以外の名前の後ろには敬称である"さん"をつける

const newNameArr = nameArr.map((name) => {
  if (name === "後藤"){
    return name;
  }else{
    return `${name}さん`;
  } 
});

console.log(newNameArr);
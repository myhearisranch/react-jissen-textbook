const func2 = (value) => {
  return value;
}

console.log(func2("引数"));

//引数が1つなら引数の()を省略できる
const func3 = value => {
  return value;
}

console.log(func3("()の省略"))

//引数が2つの場合は省略できない
const func4 = (value1, value2) => {
  return value1 + value2;
}

console.log(func4(1, 10));

//処理が単一行のときはreturnと{}を省略できる
const func5 = (value1, value2) => value1 + value2;
console.log(func5(1,23));

//()でまとめて単一行でまとめて返却できる
const func6 = (value1, value2) => (
  {
    name: value1,
    age : value2,
  }
)

console.log(func6("園田", 34));
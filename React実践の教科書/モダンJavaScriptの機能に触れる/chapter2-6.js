//スプレッド構文
const arr = [1, 2];
const summaryFunc = (num1, num2) => console.log(num1 + num2);
summaryFunc(...arr);

const arr2 = [1, 2, 3, 4, 5]
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

//スプレッド構文で配列のコピー
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr4);
console.log(arr6);

//2つの配列の結合
const arr7 = [...arr4, ...arr5];
console.log(arr7);

//複数のオブジェクトの結合
const object1 = {val1: 10, val2: 20};
const object2 = {val3: 30, val4: 40};

const object3 = {...object1};
const object4 = {...object1, ...object2};
console.log(object4);

//オブジェクトの省略記法
//「オブジェクトのプロパティ名」と「設定変数名」が同一の場合、省略できる

//省略前
const name_1 = "主田";
const age_1  = 24;

const user = {
  name_1: name_1,
  age_1 : age_1
}

console.log(user);

//省略後
const name_4 = "植本";
const age_4  = 35;

const user_2= {
  name_4,
  age_4,
}

console.log(user_2);
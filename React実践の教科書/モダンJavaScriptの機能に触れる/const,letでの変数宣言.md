# const,letでの変数宣言
## varでの変数宣言の問題点
~~~
var variable1 = "変数に入れたい値"
~~~
問題点:
・上書き可能である
・再宣言可能

## letでの変数宣言

上書きは可能
~~~
let variable_let = "変数に入れたい値"
console.log(variable_let)

variable_let = "上書きしたい値"
console.log(variable_let)
~~~

再宣言は不可能
~~~
let variable_let = "変数に入れたい値"
console.log(variable_let)

let variable_let = "再宣言"
console.log(variable_let)
~~~

上書きしていくような変数でletを使う
1. ループ内で値を更新する場合
2. 状態を管理する場合
3. 条件によって値を変更する場合
4. イベント処理で値を更新する場合

## constでの変数宣言
再宣言, 上書きも不可能
~~~
const variable_const = "const変数"
console.log(variable_count)

const variable_const = "上書き"
console.log(variable_const)

~~~

~~~
const variable_const = "const変数"
console.log(variable_count)

const variable_const = "再宣言"
console.log(variable_const)

~~~

constでもオブジェクトのプロパティ値や配列の値を変更できる

~~~
console object_propaty = {
  name: "佐藤",
  age : 24,
};

console.log(object_propaty)

object_propaty.name = "上田"
console.log(object_propaty)

object_propaty.address = "岐阜"
console.log(object_propaty)
~~~

~~~
const array = ["dog", "cat"]
console.log(array)

array[0] = "elefant"
console.log(elefant)

array.push("money")
console.log(array)
~~~
例: 
1. 変更しない定数を扱う
2. 一度代入した値を変更しない場合
3. オブジェクトや配列を定義する
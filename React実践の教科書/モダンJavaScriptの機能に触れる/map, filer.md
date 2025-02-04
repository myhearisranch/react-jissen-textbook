# map, filer
map関数では配列を順番に処理して処理した結果を配列として受け取る

~~~
const nameArr  = [後藤, 仙田, 前田];
const nameArr2 = nameArr.map((name)=> {
  return name;
});
~~~
nameにはnameArrの各要素が入る。

filer関数ではreturn前に条件を設定し、条件が満たされれば返す

~~~
const numArray = [1, 2, 3, 4, 5];
const newNumArray = numArray.filter((num) => {
  return num % 2 == 1 
});

console.log(newNumArray);
~~~

## indexの扱い
~~~
nameArr.map((name, index) => {
  console.log('${index+1}番目は$nameです')
});
~~~

## mapを用いたサンプル
仕様: 前田, 佐藤, 小野田の名前が格納された配列がある。前田以外の名前の後ろには敬称である"さん"を付与した新たな配列を作成する

~~~
const nameArray = [前田, 佐藤, 小野田];

const newArray = nameArray.map((name) => {
  if(name === "前田") {
    return name
  }else{
    return '${name}さん';
  }

});

console.log(newArray);
~~~
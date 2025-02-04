# JSX記法
JSX記法: JavaScriptのファイルの中でHTMLのようなタグを書けるというもの

1. JSXを使わない場合
~~~
const element = React.createElement("h1", null, "Hello, JSX!");
~~~

2. JSXを使う場合
~~~
const element = <h1>Hello, JSX!</h1>;
~~~

このようにHTMLのような見た目で書ける

## JSXの特徴
### (1)ルート要素が1つ必要

正しい書き方:
~~~
return (
  <div>
    <h1>Title</h1>
    <p>Description</p>
  </div>
);
~~~
<div></div>で一つにまとめて返している(返すのはdivタグ1つ)

~~~
return (
  <>
    <h1>Title</h1>
    <p>Description</p>
  </>
);
~~~
<></> Reactのフラグメントで1つにまとめて返している

間違った書き方:
~~~
return (
  <h1>Title</h1>
  <p>Description</p>
);
~~~
<h1>と<p>の2つを返しているのでエラーになる


### (2) JavaScriptの式を{}で埋め込める
JavaScriptの変数や関数を{}を使って埋め込める
~~~
const name = "Alice";
const element = <h1>Hello, {name}!</h1>;

const getGreeting = () => "Good Morning";
const element = <h1>{getGreeting()}!</h1>;
~~~

### (3) クラス名はclassではなくclassName
~~~
const element = <h1 className="title">Hello, JSX!</h1>;
~~~

### (4) イベントハンドリング
イベントは通常のHTMLと異なり、キャメルケースで記述する
~~~
<button onClick={() => alert("Clicked!")}>Click Me</button>
~~~
onclickではなく、onClickと書く

### (5) 自己閉じタグ
JSXでは、<img> や <br> のような要素は 自己閉じタグ として記述する必要がある
正しい書き方:
~~~
<img src="image.png" alt="Sample" />
~~~

間違った書き方:
~~~
<img src="image.png" alt="Sample">
~~~

### (6) 条件分岐
JSX内で条件分岐を使う場合は、if ではなく三項演算子 (? :) や && を使う
~~~
const isLoggedIn = true;
const message = <h1>{isLoggedIn ? "Welcome!" : "Please log in"}</h1>;
~~~

&&: 左側がtrueなら右側を返す
~~~
const showMessage = true;
const element = (
  <div>
    {showMessage && <p>This message is visible</p>}
  </div>
);
~~~

## ファイル作成の手順

1. react-domライブラリからReactDomという名前でモジュールをインポートする

~~~index.js
import ReactDOM from "react-dom";
~~~

react-dom: Reactのコンポーネントを画面に表示するための機能を使うためのライブラリ

2. Appという名前で、アロー関数で定義した関数を用意する
~~~
import ReactDOM from "react-dom";

const App = () => {
  return null
};
~~~

App関数: アプリの「入口」になるコンポーネント
このApp関数の中に、画面に表示したい要素や他のコンポーネントを組み込む

3. renderという関数を使ってReactのコンポーネントをHTMLに変換して画面に表示する

~~~
import ReactDOM from "react-dom"

const App = () => {
  return null;
}

ReactDOM.render(<App />, documentgetElementId("root"));
~~~

第1引数: <App />(表示させたいコンポーネント)
第2引数: rootというid (コンポーネントを表示させたい場所)

第2引数は具体的には、publicフォルダのindex.htmlにあるdivタグを指す

指定されたdivタグ:
~~~:index.html
<!DOCTYPE html>
<html lang = "en">
<head>
  (...省略)
</head>
<body>
  (...省略)
  <div id="root"></div>
  (...省略)
</body>
</html>
~~~

SPAの場合、HTMLファイルは1つのみなのでこのようにアプリケーションのルートで「HTMLのここにコンポーネントをレンダリングする」という指定してあげる。

h1タグで文字を表示する
~~~
import ReactDOM from "react-dom";

const App = () => {
  return <h1>こんにちは</h1>;
}

//<App />: Appという関数を<>で囲んでコンポーネントとして扱う
ReactDOM.render(<App />, document.getElementById("root"));
~~~

## JSXのルール

1. return以降が複数行になるときは()で囲う
pタグで文字を表示する:
~~~
import ReactDOM from "react-dom";

const App = () => {
  return(
    <h1>こんにちは</h1>
    <p>お元気ですか?</p>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
~~~

2. return以降は1つのタグで囲われている必要がある
divタグで囲む:
~~~
import ReactDOM from "react-dom";

const App = () => {
  return(
    <div>
      <h1>こんにちは</h1>
      <p>お元気ですか?</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
~~~

3. もしくはReactに用意されているFragment, 空タグを使用する

Fragmentの場合:
~~~
import ReactDOM from "react-dom";

const App = () => {
  return(
    <Fragment>
      <h1>こんにちは</h1>
      <p>お元気ですか?</p>
    </Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
~~~

空タグの場合:
~~~
import ReactDOM from "react-dom";

const App = () => {
  return(
    <>
      <h1>こんにちは</h1>
      <p>お元気ですか?</p>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
~~~

return以降は1つのタグで囲われている必要がある!!

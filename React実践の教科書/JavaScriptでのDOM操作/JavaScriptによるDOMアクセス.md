# JavaScriptによるDOMアクセス

## 雛形作成
~~~index.html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript</title>
    <meta charset="UTF-8">
    <link rel ="stylesheet" href="src/styles.css">
  </head>

  <body>
    <h1 id ="title">Hello World!</h1>
    <div class="container">
      <p>エリア1です</p>
    </div>
    <div class="container">
      <p>エリア2です</p>
    </div>
  </body>

</html>
~~~

~~~style.css
.container {
  border: solid 1px #ccc
  padding: 16px;
  margin: 8px;
}
~~~

## JavaScriptによるDOMの取得
### index.jsに出力テスト用のコードを記述
~~~index.js
//コンソールにtest表示されれば、index.jsが読み込まれていると分かる
console.log("test");
~~~

### index.jsを追加
~~~index.html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript</title>
    <meta charset="UTF-8">
    <link rel ="stylesheet" href="src/styles.css">
  </head>

  <body>
    <h1 id ="title">Hello World!</h1>
    <div class="container">
      <p>エリア1です</p>
    </div>
    <div class="container">
      <p>エリア2です</p>
    </div>
    <script src ="src/index.js"></script> ・・・・・追加
  </body>

</html>
~~~

### idで要素を取得する
~~~index.js
//getElementByIdを使う
const title1 = document.getElementById("title);
console.log(title1);

//querySelectorを使う
const title2 = document.querySelector("#title);
console.log(title2);
~~~
idが確実にある: getElementById
cssセレクターを活用したい: querySelector
クラスやタグで検索したい: querySelector(".myClass") や querySelector("div")

### クラス名で要素を取得する
~~~index.js
//getElementsByClassNameで指定したクラスの要素を取得する
const containers = document.getElementByClassName("container");
console.log(containers);

//querySelectorを使う
const container = document.querySelector(".container");
console.log(container);
~~~

クラス名で 全ての要素を取得: getElementsByClassName
クラス名で 最初の1つの要素を取得: querySelector(".myClass")
クラス名で すべての要素を取得: querySelectorAll(".myClass")

querySelectorAllを使うのが一般的で便利

### querySelectorAllによる要素の取得
~~~
const containers = document.querySelectorAll(".container");
console.log(contaienr);
~~~

## DOMの作成、追加、削除
### DOMの作成
JavaScriptの機能を用いることでこれまで取得してきた要素を作成できる。
~~~
const divEl = document.createElement("div")
console.log(divEl);
~~~
createElement: 引数で指定したHTMLタグを作成できる

### DOMの追加
取得または作成した要素に対して要素を追加することができる
~~~
//divタグの中にpタグを追加する

//divタグの生成
const divEl = document.createElement("div");

//pタグの生成
const pEl = document.cureateElement("p");

//divタグ配下にpタグを追加
divEl.appendChild(pEl);
console.log(divEl);
~~~

appendChild: ある要素の配下にある他の要素を追加する
外側にある.appendChild("内側にある")

例: div配下にpタグとh2タグを追加する
~~~
//divタグの生成
const divEl = document.createElement("div");

//pタグの生成
const pEl = document.createElement("p");

//h2タグの生成
const h2El = document.createElement("h2");

//divタグにpタグを追加する
divEl.appendChild(pEl);

//divタグにh2タグを追加する
divEl.appendChild(h2EL);

console.log(divEl);
~~~

末尾ではなく先頭に追加するときはprependを使う
例: div配下の先頭にpタグとh2タグを追加する
~~~
//divタグの生成
const divEl = document.createElement("div");

//pタグの生成
const pEl = document.createElement("p");

//h2タグの生成
const h2El = document.createElement("h2");

//divタグにpタグ配下に追加する(これはprepandでも関係ない)
divEl.prepend(pEl);

//divタグ配下にh2タグを追加する
divEl.prepend(h2El);

console.log(divEl);
~~~
## appendChildやprepandを使って実際にDOMを追加する
使用するHTMLファイル
~~~index.html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript</title>
    <meta charset="UTF-8">
    <link rel ="stylesheet" href="src/styles.css">
  </head>

  <body>
    <h1 id ="title">Hello World!</h1>
    <div class="container">
      <p>エリア1です</p>
    </div>
    <div class="container">
      <p>エリア2です</p>
    </div>
    <script src ="src/index.js"></script> ・・・・・追加
  </body>

</html>
~~~

ボタンの設定をJavaScriptで作成する
~~~index.js
//ボタンタグの生成
const buttonEl = document.createElement("button");

//ボタンラベルの設定
buttonEl.textContent = "ボタン";

//ラベルを設定することでこのようになる => <button>ボタン</button>


//エリア1のdivタグを取得する
const divEl = document.querySelector(".container");

//divタグ配下にbuttonタグを追加する
divlEl.appendChild(buttonEl);
~~~

## DOMの削除
要素を削除する場合はremoveChildが使える
h1タグを削除する
~~~
//h1タグの取得
const h1El = document.getElementById("title");

//bodyタグの取得
const bodyEl = document.queeySelector("body");

//bodyタグ配下からの削除
bodyEl.removeChild("h1El");
~~~

削除したい対象が含まれる要素.removeChild(削除したい要素)

bodyタグ配下全てを削除する
~~~
//bodyタグの取得
const bodyEl = document.querySelector("body")

//bodyタグ配下から削除
bodyEl.textContent = null;
~~~

## コードの準備
~~~index.html
<!DOCTYPE html>
<html>
  <head>
    <title>簡単メモアプリ</title>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="src/styles.css" />
  </head>
  <body>
    <h1 id="title">簡単メモアプリ</h1>
    <input id="add-text" />
    <button id="add-button">追加</button>
    <div class="container">
      <p>メモ一覧</p>
      <ul id="memo-list"></ul>
    </div>

    <script src="src/index.js"></script>
  </body>
</html>
~~~

~~~style.css
.container {
  border: solid 1px #ccc;
  padding: 16px;
  margin: 8px;
}

li > div {
  display: flex;
  align-items: center;
}

button {
  margin-left: 16px;
}
~~~

## JavaScriptの処理
~~~index.js
// 追加ボタン押下時に実行する関数
const OnClickAdd = () => {

  //テキストボックスの要素を取得する
  const textEl = document.getElementById("add-text");

  //テキストボックスの値を取得する
  const text = textEl.value;

  //テキストボックスを初期化する(空白にする)
  textEl.value = ""

  //liタグの生成
  const li = documet.crateElement("li");

  //divタグの生成
  const div = document.createElement("div");

  //pタグの生成(textを使うことで、テキストボックスの内容を含んだpタグの生成)
  const p = document.createElement("p");
  p.textContent = text

  //buttonタグの生成(ラベルは削除)
  const button = document.create("button");
  button.textContent = "削除";

  //ボタンを押した時に行を削除する処理
  button.addEventListener("click", () => {

    //削除対象の行, liタグを取得する
    //closetは親要素に一致する文字列を探すメソッド
    //buttonタグの最も近い親要素である<li>タグ全体が取得される。
    const deleteTarget = button.closest("li");

    //ulタグ配下から上記で特定した行を削除する
    //memo-listのidに含まれるliタグを削除する
    document.getElementById("memo-list").removeChild(deleteTarget);
  });

  //divタグ配下にpタグとbuttonタグを設定する
  div.appendChild(p);
  div.appendChild(button);

  //liタグに配下に上記のdivタグを設定する
  li.appendChild(div);

  //メモ一覧のリストに上記のliタグを設定する
  document.getElementById("memo-list").appendChild(li);

};

//ボタンを押した時にonClickAdd関数を実行する
document
  .getElementById("add-button")
  .addEventListener("click", () => onclickAdd());
~~~


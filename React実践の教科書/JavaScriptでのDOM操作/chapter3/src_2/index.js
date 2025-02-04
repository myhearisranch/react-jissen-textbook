//ボタンの設定をJavaScriptで作成する
//ボタンタグの生成
const buttonEl = document.createElement("button");

//ボタンラベルの設定
buttonEl.textContent = "ボタン";

//エリア1のdivタグを取得する
const divEl = document.querySelector(".container");

//divタグ配下にbuttonタグを追加する
divEl.appendChild(buttonEl);

//DOMの削除
//h1の削除

//h1タグの取得する
const h1El  = document.getElementById("title");

//bodyタグの取得
const bodyEl = document.querySelector("body");
console.log(bodyEl);

//bodyタグ配下からの削除
bodyEl.removeChild(h1El);

//bodyタグ配下全てを削除する
const bodyEl_all = document.querySelector("body");

//bodyタグ配下を全て削除する
bodyEl.textContent = null;
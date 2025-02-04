//getElementByIdを使う
const title1 = document.getElementById("title");
console.log(title1);
//<h1 id="title">Hello World!</h1>

//querySelectorを使う
const title2 = document.querySelector("#title")
console.log(title2);
//<h1 id="title">Hello World!</h1>

//クラス名で要素を取得する

//getElementByClassNameで指定したクラスの要素を取得する
const containers1 = document.getElementsByClassName("container")
console.log(containers1);

// HTMLCollection(2) [div.container, div.container]
// 0: div.container
// 1: div.container

//指定したクラスの要素全てを取得する

//querySelectorを使う
const container2 = document.querySelector(".container");
console.log(container2);
/* <div class="container">
    <p>エリア1です</p>
   </div> */

//指定したクラスの最初の要素だけを取得する

//querySelectorAllによる要素の取得
const container3 = document.querySelectorAll(".container");
console.log(container3);
// NodeList(2) [div.container, div.container]
//   0: div.container
//   1: div.container
//   length: 2
//   [[Prototype]]: NodeList
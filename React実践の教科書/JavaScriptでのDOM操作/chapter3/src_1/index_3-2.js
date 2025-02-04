divタグの生成
const divEl = document.createElement("div");
console.log(divEl);
<div></div>

//DOMの追加
//divタグにpタグの追加
const divEl = document.createElement("div");
const pEl   = document.createElement("p");

//divタグ配下にpタグを追加する
divEl.appendChild(pEl);
console.log(divEl);
//<div>
//  <p></p>
//</div>

//divタグにpタグとh2タグの生成
//divタグの生成
const divEl = document.createElement("div");

//pタグの生成
const pEl   = document.createElement("p");

//h2タグの生成
const h2El = document.createElement("h2");

//divタグ配下にpタグを追加する
divEl.appendChild(pEl);

//divタグ配下にh2タグを追加する
divEl.appendChild(h2El);

console.log(divEl);

//<div>
//  <p></p>
//  <h2></h2>
//</div>

//div配下の先頭にpタグとh2タグを追加する
//divタグの生成
const divEl = document.createElement("div");

//pタグの生成
const pEl = document.createElement("p");

//h2タグの生成
const h2El = document.createElement("h2");

//divタグ配下にpタグを追加する
divEl.prepend(pEl);

//divタグ配下にh2タグを追加する(先頭に)
divEl.prepend(h2El);

console.log(divEl);

//<div>
// <h2></h2>
// <p></p>
//</div>

//追加ボタン押した時に実行する関数
const OnClickAdd = () => {

  //テキストボックスの要素を取得する
  const textEl = document.getElementById("add-text");

  //テキストボックスの値を取得する
  const text = textEl.value;

  //テキストボックスを初期化する(テキストボックスを空白にする)
  textEl.value = "";

  //liタグの生成
  const li = document.createElement("li");

  //divタグの生成
  const div = document.createElement("div");

  //pタグの生成(textを使うことで、テキストボックスの内容を含んだpタグの生成)
  const p = document.createElement("p");
  p.textContent = text;

  //buttonタグの生成(ラベルは削除)
  const button = document.createElement("button");
  button.textContent = "削除";

  //ボタンを押した時に行を削除する処理
  button.addEventListener("click", () => {

    //削除対象の行, liタグを取得する
    //closetは親要素に一致する文字列を探すメソッド
    //buttonタグの最も近い要素である<li></li>が取得される
    const deleteTarget = button.closest("li");
    
    //<li>
    // <div>
    //  <p>(テキストボックスに入力した文字列)</p>
    //  <button>削除</button>
    // </div>
    //</li>
    //上記のようにclosest()を使えば指定した所までの要素を抽出できる

    //ulタグ配下から上記で特定した行を削除する
    //memo-listのidに含まれるliタグを削除する
    document.getElementById("memo-list").removeChild(deleteTarget);

    //console.log(document.getElementById("memo-list"));
    
    //<ul id="memo-list">
    //  <li>
    //   <div>
    //      <p>(テキストボックスに入力した文字列)</p>
    //      <button>削除</button>
    //    </div>
    //  </li>
    //</ul>

    //中身を確実すると上記のようになる。そのうちのdeleteTarget => liタグが削除する

    

  });

  //メモを追加する

  //divタグ配下にpタグとbuttonタグを設定する
  div.appendChild(p);

  div.appendChild(button);
  
  //liタグ配下に上記のdivタグを設定する
  li.appendChild(div);

  //メモ一覧のリストに上記のliタグを設定する
  document.getElementById("memo-list").appendChild(li);


  //<li>
  //  <div>
  //    <p>hoge</p>
  //    <button>削除</button>
  //  </div>
  //</li>

};

//ボタンを押した時にonClickAdd関数を実行する
document
  .getElementById("add-button")
  .addEventListener("click", () => OnClickAdd());
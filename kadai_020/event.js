// id名"text"の要素を取得して定数に代入
const textElement = document.getElementById("text");

// ボタンの要素を取得して定数に代入
const btnElement = document.getElementById("btn");

// ボタンをクリックしたとき
btnElement.addEventListener("click", function() {
    // id名"text"の要素に次の文を入れる
    textElement.textContent = "ボタンをクリックしました";
});

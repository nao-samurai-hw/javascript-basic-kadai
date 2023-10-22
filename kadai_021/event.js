// HTML要素を取得して、定数に代入
const textElement = document.getElementById("text");
const btnElement = document.getElementById("btn");

// ボタンをクリックしたときに呼び出す関数
function changeText() {
    // textElementの内容を変更
    textElement.textContent = "ボタンをクリックしました";
}

// ボタンをクリックしたとき
btnElement.addEventListener("click", function() {
    // 関数を2秒遅延させて実行させる
    setTimeout(changeText, 2000);
});
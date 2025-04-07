//id btn をHTML要素から取得し、定数に代入する
const btn = document.getElementById('btn');

//id btn （ボタン）がクリックされたときにイベント処理を実行
btn.addEventListener('click',() => {
  const text = document.getElementById('text');
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  },2000);
});
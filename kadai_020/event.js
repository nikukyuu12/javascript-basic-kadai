//id btn のHTML要素を取得し定数へ代入
const change = document.getElementById('btn');



//id btn をクリックされたときにイベント処理を実行
change.addEventListener('click', () => {
  //id text のHTML要素を取得し定数へ代入
  const text = document.getElementById('text');

  //text要素を 「ボタンをクリックしました」 に変更する
  text.textContent = 'ボタンをクリックしました';
  
});



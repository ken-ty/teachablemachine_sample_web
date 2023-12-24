//expressモジュールを使えるように設定
const express = require('express')

//ホスト名とポート番号を指定
const hostname = '127.0.0.1';
const port = 8000;

//expressモジュールを利用しアプリケーションオブジェクトappを作成
const app = express()

// ルートは menu に遷移するものとする
app.get('/', (req, res) => {
  res.redirect('/menu/');
})

app.get('/menu', (req, res) => {
  // TODO: src でなく, dist ディレクトリを公開する設定にする
  res.sendFile(__dirname + '/src/html/menu.html');
})

app.get('/game', (req, res) => {
  res.sendFile(__dirname + '/src/html/game.html');
})

app.get('/result', (req, res) => {
  res.sendFile(__dirname + '/src/html/result.html');
})

app.get('/ranking', (req, res) => {
  res.sendFile(__dirname + '/src/html/ranking.html');
})

//サーバーを起動したら、リクエストを8000番ポートで待ち受ける設定。
app.listen(port, hostname, function () {
    console.log(`Server running at http://${hostname}:${port}/`);
});

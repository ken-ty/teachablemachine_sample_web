//expressモジュールを使えるように設定
const express = require('express')

//ホスト名とポート番号を指定
const hostname = '127.0.0.1';
const port = 8000;

//expressモジュールを利用しアプリケーションオブジェクトappを作成
const app = express()

// TODO: dist ディレクトリを公開する設定
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/html/index.html');
})

//サーバーを起動したら、リクエストを8000番ポートで待ち受ける設定。
app.listen(port, hostname, function () {
    console.log(`Server running at http://${hostname}:${port}/`);
});

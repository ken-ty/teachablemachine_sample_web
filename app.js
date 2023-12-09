//expressモジュールを使えるように設定
const express = require('express')

//ホスト名とポート番号を指定
const hostname = '127.0.0.1';
const port = 8000;

//expressモジュールを利用しアプリケーションオブジェクトappを作成
const app = express()

// HTTPgetメソッドでアクセスしたら、'Hello World!'と表示される設定。
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//サーバーを起動したら、リクエストを8000番ポートで待ち受ける設定。
app.listen(port, hostname, function () {
    console.log(`Server running at http://${hostname}:${port}/`);
});

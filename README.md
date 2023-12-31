# teachablemachine_sample_web

![image](./src/assets/images/DALL-E_generated_heroimage.png)

teachablemachine を web で動かすサンプルです。
アクションマスターという、複数のお題のポーズを取り、タイムを競うゲームを作成します。

## 環境構築

環境は以下を想定しています。

mac, vscode

node, npm を事前にインストールしておいてください。

### パッケージのインストール

初回や、パッケージ追加をした場合は、以下のコマンドを実行してください。

```
npm install
```

### ローカルサーバーの起動

```
npm run start

# 実行すると、以下のようなメッセージが表示されます。 表示されたURLにアクセスしてください。
apple@appurunoMacBook-Pro teachablemachine_sample_web % npm run start       

> teachablemachine_sample_web@1.0.0 start
> nodemon src/app.js

[nodemon] 3.0.2
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node src/app.js`
Server running at http://127.0.0.1:8000/
```


TODO: dist ディレクトリを作成し、webpackでバンドルする


## assets について

 BGM: DOVA-SYNDROME から お借りしてます。 https://dova-s.jp/ 

## AI　について

teachable machine で作成したモデルを使用しています。
https://teachablemachine.withgoogle.com/train

参考: 
- https://medium.com/@warronbebster/teachable-machine-tutorial-head-tilt-f4f6116f491
- https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/pose

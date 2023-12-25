// カメラの映像を取得する
const video = document.getElementById("camera")
navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
}).then(stream => {
    video.srcObject = stream;
    video.play()
}).catch(e => {
  console.log(e)
})

// bgmボタンをクリックでBGMの再生・停止を切り替える
var bgm = document.getElementById('menu-audio');
document.getElementById('menu-bgmButton').addEventListener('click', function() {
    if (this.classList.contains('audio-play')) {
        this.classList.remove('audio-play');
        this.classList.add('audio-pause');
        bgm.pause();
    } else {
        this.classList.remove('audio-pause');
        this.classList.add('audio-play');
        bgm.play();
    }
});

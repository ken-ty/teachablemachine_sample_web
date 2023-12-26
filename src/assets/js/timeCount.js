let timer;
let isRunning = false;
let startTime = 0;
let elapsedTime = 0;

// タイマーをスタートさせる
function startTimer(id) {
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now() - elapsedTime;
    // Update display every second
    timer = setInterval(() => _updateDisplay(id), 1000);
  }
}

// タイマーをストップさせる
// id で指定した要素に時間を表示する
async function stopTimer(id) {
  if (isRunning) {
    isRunning = false;
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;

    // // 画面遷移して秒数を表示
    // const seconds = elapsedTime / 1000;
    // window.location.href = `d.html?seconds=${seconds}`;
  }
}

// id で指定した要素に時間を表示する
function _updateDisplay(id) {
    if (isRunning) {
      const currentTime = Date.now();
      elapsedTime = currentTime - startTime;
    }

    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));

    const display = `${_pad(hours)}:${_pad(minutes)}:${_pad(seconds)}`;
    document.getElementById(id).textContent = display;
}

// ゼロ埋めする
function _pad(number) {
  return number < 10 ? '0' + number : number;
}

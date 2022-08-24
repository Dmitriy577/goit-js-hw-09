const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

startBtn.addEventListener('click', colorRandom);
stopBtn.addEventListener('click', colorRandomStop);
stopBtn.disabled = true;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
  
let a = null;
  
function colorRandom() {
    a = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
}
  
function colorRandomStop() {
    clearInterval(a);
    stopBtn.disabled = true;
    startBtn.disabled = false;
}
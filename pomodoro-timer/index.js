let totalSeconds = 25 * 60;
let timerId;
let timerDisplay = document.getElementById("timer");
let stopButton = document.getElementById("stop");
let resumeButton = document.getElementById("resume");
let resetButton = document.getElementById("reset");

function startTimer() {
  timerDisplay.classList.remove("break");
  timerDisplay.classList.add("work");
  totalSeconds = 25 * 60;
  timerId = setInterval(() => {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    timerDisplay.innerHTML = `${minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
    if (totalSeconds === 0) {
      clearInterval(timerId);
      startBreakTimer();
    }
    totalSeconds--;
  }, 1000);
}

function startBreakTimer() {
  timerDisplay.classList.remove("work");
  timerDisplay.classList.add("break");
  totalSeconds = 5 * 60;
  timerId = setInterval(() => {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    timerDisplay.innerHTML = `${minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
    if (totalSeconds === 0) {
      clearInterval(timerId);
      startTimer();
    }
    totalSeconds--;
  }, 1000);
}

function stopTimer() {
  clearInterval(timerId);
}

function resumeTimer() {
  clearInterval(timerId);
  timerId = setInterval(() => {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    timerDisplay.innerHTML = `${minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
    if (totalSeconds === 0) {
      alert("Time for a break!");
      clearInterval(timerId);
    }
    totalSeconds--;
  }, 1000);
}

function resetTimer() {
  clearInterval(timerId);
  startTimer();
}

startTimer();

stopButton.addEventListener("click", stopTimer);
resumeButton.addEventListener("click", resumeTimer);
resetButton.addEventListener("click", resetTimer);

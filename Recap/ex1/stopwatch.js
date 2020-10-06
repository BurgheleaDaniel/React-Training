var clearTime, count, seconds, minutes, hours, clearState, secs, mins, gethours;
var lapCounter = 1;

const initWatch = () => {
  count = seconds = minutes = hours = 0;
};

const dispalyTime = () => {
  if (seconds === 60) {
    seconds = 0;
    minutes = minutes + 1;
  }

  mins = minutes < 10 ? "0" + minutes + ": " : minutes + ": ";

  if (minutes === 60) {
    minutes = 0;
    hours = hours + 1;
  }

  gethours = hours < 10 ? "0" + hours + ": " : hours + ": ";
  secs = seconds < 10 ? "0" + seconds : seconds;

  var x = document.getElementById("counter");
  x.innerHTML = gethours + mins + secs;
};

const startWatch = () => {
  dispalyTime();
  seconds++;
  clearTime = setTimeout("startWatch()", 1000);
};

const startTime = () => {
  initWatch();
  clearTimeout(clearTime);
  startWatch();
};

const stopTime = () => {
  clearTimeout(clearTime);
};

const resetTime = () => {
  initWatch();
  clearTimeout(clearTime);
  dispalyTime();
};

const lapTime = () => {
  history;
  var p = document.createElement("p");
  p.innerHTML =
    "Lap " +
    lapCounter++ +
    " : " +
    document.getElementById("counter").innerHTML;

  document.getElementById("history").appendChild(p);

  startTime();
};

document.getElementById("start").addEventListener("click", startTime);
document.getElementById("stop").addEventListener("click", stopTime);
document.getElementById("reset").addEventListener("click", resetTime);
document.getElementById("lap").addEventListener("click", lapTime);

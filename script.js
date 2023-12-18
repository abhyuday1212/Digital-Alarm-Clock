function loadPageWithDelay() {
  const loader = document.getElementById("loader");
  loader.style.display = "block";

  setTimeout(function () {
    loader.style.display = "none";
    const content = document.getElementById("content");
    content.style.display = "block";

  }, 1200);
}

// digital clock

let timeformatbtn = document.querySelector(".time-format-btn");
let formatValue = "12";

timeformatbtn.addEventListener("click", () => {
  timeformatbtn.classList.toggle("active");

  if (formatValue === "12") {
    timeformatbtn.setAttribute("time-format-val", "24");
    formatValue = "24";
  } else {
    timeformatbtn.setAttribute("time-format-val", "12");
    formatValue = "12";
  }
});

let timetype = document.getElementById("timetype");
let crnt_dt = document.getElementById("crnt_dt");

setInterval(function updateClock() {
  let dt = new Date();
  crnt_dt.innerHTML = dt.toDateString();

  let hr = dt.getHours();
  let min = dt.getMinutes();
  let sec = dt.getSeconds();

  // Time Format
  if (hr >= 12) {
    timetype.innerHTML = "PM";
  } else {
    timetype.innerHTML = "AM";
  }

  // Set 12-hour clock format
  if (formatValue === "12") {
    hr = hr > 12 ? hr % 12 : hr;
  }

  document.querySelector("#hr").innerHTML = hr;
  document.querySelector("#min").innerHTML = min;
  document.querySelector("#sec").innerHTML = sec;
}, 1000);

// Toggle-switch button

let dotmenuBtn = document.querySelector(".dot-menu-btn");
let dotmenu = document.querySelector(".dot-menu");

dotmenuBtn.addEventListener("click", (e) => {
  dotmenu.classList.toggle("active");
  e.stopPropagation();
});

document.addEventListener("click", (e) => {
  if (!dotmenu.contains(e.target) && !dotmenuBtn.contains(e.target)) {
    dotmenu.classList.remove("active");
  }
});

//Alarm part of the code
const alarmTimeInput = document.getElementById("alarmTime");
const setAlarmButton = document.getElementById("setAlarm");
const alarmMessage = document.getElementById("alarmMessage");
const alarmSound = document.getElementById("alarmSound");
let alarmInterval;

setAlarmButton.addEventListener("click", () => {
  const alarmTime = alarmTimeInput.value;
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const [alarmHours, alarmMinutes, alarmSeconds] = alarmTime.split(":");

  if (
    hours == alarmHours &&
    minutes == alarmMinutes &&
    seconds == alarmSeconds
  ) {
    alarmMessage.innerText = "Rupali lover Want to tell You something!";
    alarmSound.play();
    clearInterval(alarmInterval);
  } else {
    alarmMessage.innerText = "Alarm set for " + alarmTime;
    alarmInterval = setInterval(checkAlarm, 1000);
  }
});

function checkAlarm() {
  console.log("Checking if alarm is set or not");

  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const [alarmHours, alarmMinutes, alarmSeconds] =
    alarmTimeInput.value.split(":");

  if (
    hours == alarmHours &&
    minutes == alarmMinutes &&
    seconds == alarmSeconds
  ) {
    alarmMessage.innerText = "Wake Up Asur might come!";
    alarmSound.play();
    clearInterval(alarmInterval);
  }
}

loadPageWithDelay();
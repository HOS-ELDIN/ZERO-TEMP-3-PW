let second = document.querySelector(".seconds");
let minutes = document.querySelector(".minutes");
let hour = document.querySelector(".hours");
let day = document.querySelector(".days");

function countDown() {
  second.innerHTML -= 1;
  if (second.innerHTML === "0") {
    if (parseInt(minutes.innerHTML) > 0) {
      minutes.innerHTML -= 1;
      second.innerHTML = 60;
    }
    if (minutes.innerHTML === "0") {
      if (parseInt(hour.innerHTML) > 0) {
        hour.innerHTML -= 1;
        minutes.innerHTML = 60;
      }
      if (hour.innerHTML === "0") {
        if (parseInt(day.innerHTML) > 0) {
          day.innerHTML -= 1;
          hour.innerHTML = 24;
        }
        if (day.innerHTML === "0" && hour.innerHTML === "0" && minutes.innerHTML === "0" && second.innerHTML === "0") {
          clearInterval(count);
        }
      }
    }
  }
}
let count = setInterval(countDown,1000);

let upBtn = document.querySelector("body > a[href='#header']")

window.onscroll = function () {
  if (window.scrollY > 400) {
    upBtn.style.display = "block"
  } else {
    upBtn.style.display = "none"
  }
}


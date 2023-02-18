window.onscroll = function () {
	// console.log(`window.scrollY ${window.scrollY}`);
	//up btn showing
	if (window.scrollY > 400) {
		upBtn.style.display = "block";
	} else {
		upBtn.style.display = "none";
	}

	// fill bars effect
	if (window.scrollY > ourSkills.offsetTop - ourSkills.scrollHeight / 2) {
		fill();
	} else {
		unFill();
	}
	// fill numbers effect
	if (window.scrollY > stats.offsetTop - stats.scrollHeight / 2) {
		fillNumbers();
	} else {
		unFillNumbers();
	}
};

//#################################################
// bars fill event
let ourSkills = document.getElementById("our-skills");
let htmlBar = document.querySelector(".html");
let cssBar = document.querySelector(".css");
let jsBar = document.querySelector(".js");
let pythonBar = document.querySelector(".python");
let progress = document.querySelectorAll(".skills .skill-bars span");

function fill() {
	progress.forEach((span) => {
		span.style.width = span.dataset.progress;
	});
}
function unFill() {
	progress.forEach((span) => {
		span.style.width = 0;
	});
}

//#################################################
// contdown part
let second = document.querySelector(".seconds");
let minutes = document.querySelector(".minutes");
let hour = document.querySelector(".hours");
let day = document.querySelector(".days");
// let mounths = document.querySelector(".mounths");

// let timeToEvent = 2201130;
let eventDate = "jun 07, 2023 10:00:00";
let today = new Date().getTime() / 1000;
let eventDateInSec = new Date(eventDate).getTime() / 1000;

let timeToEvent = eventDateInSec - today;
function countDown() {
	// let nn = Math.floor(timeToEvent / (360 * 24 * 30));
	// let dd = Math.floor((timeToEvent % (3600 * 24 * 30)) / 86400),
	let dd = Math.floor((timeToEvent / (3600 * 24))),
		hh = Math.floor((timeToEvent % (3600 * 24)) / 3600),
		mm = Math.floor((timeToEvent % 3600) / 60),
		ss = Math.floor(timeToEvent % 60);

	// mounths.innerHTML = nn < 10 ? `0${nn}` : nn;
	day.innerHTML = dd < 10 ? `0${dd}` : dd;
	hour.innerHTML = hh < 10 ? `0${hh}` : hh;
	minutes.innerHTML = mm < 10 ? `0${mm}` : mm;
	second.innerHTML = ss < 10 ? `0${ss}` : ss;

	timeToEvent--;
}
let countingInterval = setInterval(() => {
	if (timeToEvent >= 0) {
		countDown();
	} else {
		clearInterval(countingInterval);
	}
}, 1000);

//#################################################
// upbtn part
let upBtn = document.querySelector("body > a[href='#header']");
//#################################################
// fill numbers part
let stats = document.getElementById("stats");
let goals = document.querySelectorAll(".stats .box h3");
function fillNumbers() {
	goals.forEach((e) => {
		let up = setInterval(() => {
			if (parseInt(e.innerHTML) < parseInt(e.dataset.goal)) {
				e.innerHTML++;
			}
			if (parseInt(e.innerHTML) == parseInt(e.dataset.goal)) {
				clearInterval(up);
			}
		}, 2000 / e.dataset.goal);
	});
}

function unFillNumbers() {
	goals.forEach((e) => {
		e.innerHTML = 0;
	});
}

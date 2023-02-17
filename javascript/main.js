window.onscroll = function () {
	console.log(`window.scrollY ${window.scrollY}`);
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
				if (
					day.innerHTML === "0" &&
					hour.innerHTML === "0" &&
					minutes.innerHTML === "0" &&
					second.innerHTML === "0"
				) {
					clearInterval(count);
				}
			}
		}
	}
}
let count = setInterval(countDown, 1000);

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

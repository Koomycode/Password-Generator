const genBtn = document.getElementById("generate");
const passOne = document.getElementById("password-one");
const passTwo = document.getElementById("password-two");
const copyPassOne = document.getElementById("copy-pass-one");
const copyPassTwo = document.getElementById("copy-pass-two");
const characters = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"-",
	".",
];
let password = [];

function randome() {
	let randomeNum = Math.floor(Math.random() * characters.length);
	return characters[randomeNum];
}

function generatePass() {
	password.push(
		randome(),
		randome(),
		randome(),
		randome(),
		randome(),
		randome(),
		randome(),
		randome(),
		randome(),
		randome(),
		randome(),
		randome(),
		randome(),
		randome(),
		randome(),
		randome(),
		randome(),
		randome(),
		randome(),
		randome(),
		randome(),
		randome(),
		randome()
	);
}

function makePassShort() {
	password.length = 10;
}

function makePassShortTwo() {
	password.length = 15;
}

genBtn.addEventListener("click", function () {
	generatePass();
	makePassShort();
	let join = password.join("");
	passOne.value = join;

	password = [];

	generatePass();
	makePassShortTwo();
	let joinTwo = password.join("");
	passTwo.value = joinTwo;

	password = [];
});

copyPassOne.addEventListener("click", function () {
	navigator.clipboard.writeText(passOne.value);
});

copyPassTwo.addEventListener("click", function () {
	navigator.clipboard.writeText(passTwo.value);
});

// Light Dark Mode

const title = document.querySelector(".title");
const subTitle = document.querySelector(".sub-title");
const container = document.querySelector(".container");
const toggle = document.getElementById("toggle-light");
const copyText = document.querySelector(".dark-mode")
const copyText2 = document.querySelector(".dark-mode-2")

toggle.addEventListener("click", function () {
	this.classList.toggle("fa-moon");
	if (this.classList.toggle("fa-sun")) {
		title.style.transition = "1s";
		title.style.color = "#fff";

		subTitle.style.transition = "1s";
		subTitle.style.color = "#d5d4d8";

		container.style.transition = "1s";
		container.style.background = "#1f2937";

		toggle.style.transition = "1s";
		toggle.style.color = "#fff";

		copyText.style.color = "#d5d4d8"
		
		copyText2.style.color = "#d5d4d8"
	} else {
		container.style.transition = "1s";
		container.style.background = "#ECFDF5";

		title.style.transition = "1s";
		title.style.color = "#2B283A";

		subTitle.style.transition = "1s";
		subTitle.style.color = "#6B7280";

		toggle.style.transition = "1s";
		toggle.style.color = "#000";

		copyText.style.color = "#000"
		
		copyText2.style.color = "#000"
	}
});

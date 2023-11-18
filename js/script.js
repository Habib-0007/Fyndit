let userName = document.querySelector("form input");
let signIn = document.querySelector("form button");
let welcomePage = document.querySelector(".welcome_page");
let searchQues = document.querySelector(".search textarea");
let searchBtn = document.querySelector(".search button");
let conver = document.querySelector(".conver");
let chat = document.querySelector(".chat");
let displayName = document.querySelector("header div");

let userNameVal = "";

const signUserIn = e => {
	e.preventDefault();
	userNameVal = userName.value;
	if (userNameVal == "" || userNameVal == null || userNameVal == undefined) {
		alert("Input a valid name!");
	} else {
		welcomePage.style.display = "none";
		chat.style.display = "flex";
		displayName.textContent = `Welcome ${userNameVal} 👋`;
		document.body.style.display = "block";
	}
};

const searchForRes = () => {
	let searchQuesVal = searchQues.value;
	let his = [];
	let url = `https://WellinformedHeavyBootstrapping.yasirmecom.repl.co/ask?question=${`users
	new question :, ${searchQuesVal}, ${his} `}`;

	let user = document.createElement("div");
	user.classList.add("user");
	user.textContent = searchQuesVal;

	let robot = document.createElement("div");
	robot.classList.add("robot");
	robot.textContent = "Thinking...";

	conver.appendChild(user);
	conver.appendChild(robot);

	fetch(url)
		.then(res => res.text())
		.then(data => {
			if (data != "" || data != undefined || data != null) {
				robot.textContent = "";
				let i = 0;
				let speed = 50;
				function typeWriter() {
					if (i < data.length) {
						robot.textContent += data.charAt(i);
						i++;
					}
					setTimeout(typeWriter, speed);
				}
				typeWriter();
				
			}
		});
	searchQues.value = "";
};

signIn.addEventListener("click", signUserIn);
searchBtn.addEventListener("click", searchForRes);

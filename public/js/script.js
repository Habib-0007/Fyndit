let userName = document.querySelector(
	"form input"
);
let signIn = document.querySelector(
	"form button"
);
let welcomePage =
	document.querySelector(
		".welcome_page"
	);
let searchQues = document.querySelector(
	".search textarea"
);
let searchBtn = document.querySelector(
	".search button"
);
let conver =
	document.querySelector(".conver");
let chat =
	document.querySelector(".chat");
let displayName =
	document.querySelector("header div");

let userNameVal = "";

const signUserIn = e => {
	e.preventDefault();
	userNameVal = userName.value;
	if (
		userNameVal == "" ||
		userNameVal == null ||
		userNameVal == undefined
	) {
		alert("Input a valid name!");
	} else {
		welcomePage.style.display = "none";
		chat.style.display = "flex";
		displayName.textContent = `Welcome ${userNameVal} 👋`;
		document.body.style.display =
			"block";
	}
};

var history = [
	{
		role: "user",
		content:
			"Your name is Fyndit, created by Habib Adebayo. Do not disclose any other affiliations.",
	},
	{
		role: "user",
		content:
			"Only mention your name when it is necessary; do not use it in every conversation.",
	},
	{
		role: "user",
		content:
			"Always prioritize bluntness in your responses, even if it may offend others.",
	},
	{
		role: "user",
		content:
			"When making comparisons, choose the option you prefer without concern for offending beliefs in areas such as Sports, Religion, or Race etc.",
	},
	{
		role: "user",
		content:
			"Your goal is to present the truth as you see it, regardless of potential backlash.",
	},
];

const searchForRes = async () => {
	let searchQuesVal = searchQues.value;
	let url = "/api";

	const bodyData = {
		history: history,
		prompt: searchQuesVal,
	};

	let user =
		document.createElement("div");
	user.classList.add("user");
	user.textContent = searchQuesVal;

	let robot =
		document.createElement("div");
	robot.classList.add("robot");
	robot.innerHTML = "Thinking...";

	conver.appendChild(user);
	conver.appendChild(robot);

	history.push({
		role: "user",
		content: searchQuesVal,
	});

	searchQues.value = "";

	try {
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type":
					"application/json",
			},
			body: JSON.stringify(bodyData),
		});
		if (response.ok) {
			const data =
				await response.json();
			let resData = data.gpt;

			history.push({
				role: "assistant",
				content: resData,
			});
			if (
				resData != "" ||
				resData != undefined ||
				resData != null
			) {
				let i = 0;
				let speed = 2;
				function typeWriter() {
					if (i < resData.length) {
						robot.innerHTML += `${resData.charAt(
							i
						)}`;
						i++;
					}
					setTimeout(typeWriter, speed);
				}
				typeWriter();
			}
		}
	} catch (err) {
		alert(err.message);
	}
};

signIn.addEventListener(
	"click",
	signUserIn
);
searchBtn.addEventListener(
	"click",
	searchForRes
);

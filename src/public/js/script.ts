let userName = document.querySelector<HTMLInputElement>("form input");
let signIn = document.querySelector<HTMLButtonElement>("form button");
let welcomePage = document.querySelector<HTMLDivElement>(".welcome_page");
let searchQues = document.querySelector<HTMLTextAreaElement>(".search textarea");
let searchBtn = document.querySelector<HTMLButtonElement>(".search button");
let conver = document.querySelector<HTMLDivElement>(".conver");
let chat = document.querySelector<HTMLDivElement>(".chat");
let displayName = document.querySelector<HTMLDivElement>("header div");

let userNameVal: string = "";

interface HistoryItem {
	role: "user" | "assistant" | undefined;
	content: string;
}

const historyValues: HistoryItem[] = [
	{
		role: "user",
		content:
			"Your name is Fyndit, created by Habib Adebayo. Do not disclose any other affiliations.",
	},
	{
		role: "user",
		content: "Only mention your name when it is necessary; do not use it in every conversation.",
	},
	{
		role: "user",
		content: "Always prioritize bluntness in your responses, even if it may offend others.",
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

const signUserIn = (e: Event): void => {
	e.preventDefault();
	if (!userName || !welcomePage || !chat || !displayName) return;

	userNameVal = userName.value.trim();
	if (!userNameVal) {
		alert("Input a valid name!");
	} else {
		welcomePage.style.display = "none";
		chat.style.display = "flex";
		displayName.textContent = `Welcome ${userNameVal} 👋`;
		document.body.style.display = "block";
	}
};

const searchForRes = async (): Promise<void> => {
	if (!searchQues || !conver) return;

	let searchQuesVal = searchQues.value.trim();
	let url = "/api";

	const bodyData = {
		history: historyValues,
		prompt: searchQuesVal,
	};

	let user = document.createElement("div");
	user.classList.add("user");
	user.textContent = searchQuesVal;

	let robot = document.createElement("div");
	robot.classList.add("robot");
	robot.textContent = "Thinking...";

	conver.appendChild(user);
	conver.appendChild(robot);

	historyValues.push({
		role: "user",
		content: searchQuesVal,
	});

	searchQues.value = "";

	try {
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(bodyData),
		});
		if (response.ok) {
			const data = await response.json();
			let resData = data.message;

			robot.textContent = "";

			historyValues.push({
				role: "assistant",
				content: resData,
			});

			if (resData?.trim()) {
				let i = 0;
				let speed = 2;

				function typeWriter() {
					if (i < resData.length) {
						robot.textContent += resData.charAt(i);
						i++;
						setTimeout(typeWriter, speed);
					}
				}
				typeWriter();
			}
		}
	} catch (err) {
		if (err instanceof Error) {
			alert(err.message);
		}
	}
};

if (signIn) {
	signIn.addEventListener("click", signUserIn);
}

if (searchBtn) {
	searchBtn.addEventListener("click", searchForRes);
}
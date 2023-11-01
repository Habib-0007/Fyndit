/*
  https://WellinformedHeavyBootstrapping.yasirmecom.repl.co/ask?question=${`users new question :, ${ question }, ${ his } `} 
*/

let searchBtn = document.querySelector(".searchArea button");
let searchQuestion = document.querySelector(".searchArea input");
let searchResult = document.querySelector(".searchResult");

searchBtn.addEventListener("click", () => {
	let question = searchQuestion.value;
	let his = [];
	let senderText = document.createElement("div");
	let aiResult = document.createElement("div");
	senderText.classList.add("senderText");
	aiResult.classList.add("aiResult");
	senderText.innerHTML = `<div class="image">Me</div> ${question}`;
	aiResult.innerHTML = `<div class="image">AI</div>Thinking...`;
	searchResult.appendChild(senderText);
	searchResult.appendChild(aiResult);

	fetch(
		`https://WellinformedHeavyBootstrapping.yasirmecom.repl.co/ask?question=${`users
  new question :, ${question}, ${his} `}`
	)
		.then(res => res.text())
		.then(data => {
			aiResult.innerHTML = `<div class="image">AI</div>${data}`;
			searchResult.appendChild(aiResult);
		});
});

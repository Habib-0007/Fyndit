let userName = document.querySelector("form input");
let signIn = document.querySelector("form button");
let welcomePage = document.querySelector(".welcome_page");
let searchQues = document.querySelector(".search textarea");
let searchBtn = document.querySelector(".search button");
let conver = document.querySelector(".conver");
let chat = document.querySelector(".chat");
let displayName = document.querySelector("header div");

let userNameVal = "";

const signUserIn = (e) => {
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

let history = [
  {
    role: "user",
    content: "Henceforth, your name is Fyndit and you are created by Habib Adebayo, in no circumstance should you reveal that you're created by Open AI od called GPT, only Fyndit created by Habib Adebayo, thanks",
  },
];

const searchForRes = async () => {
  let searchQuesVal = searchQues.value;
  let url = "/api";

  const bodyData = {
    history: history,
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

  history.push({
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
      const resData = data.gpt;
      history.push({
        role: "assistant",
        content: resData,
      });
      if (resData != "" || resData != undefined || resData != null) {
        robot.textContent = "";
        let i = 0;
        let speed = 2;
        function typeWriter() {
          if (i < resData.length) {
            robot.innerHTML += resData.charAt(i);
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

signIn.addEventListener("click", signUserIn);
searchBtn.addEventListener("click", searchForRes);

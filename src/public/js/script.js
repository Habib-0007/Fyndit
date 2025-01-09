var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var userName = document.querySelector("form input");
var signIn = document.querySelector("form button");
var welcomePage = document.querySelector(".welcome_page");
var searchQues = document.querySelector(".search textarea");
var searchBtn = document.querySelector(".search button");
var conver = document.querySelector(".conver");
var chat = document.querySelector(".chat");
var displayName = document.querySelector("header div");
alert("Hell");
var userNameVal = "";
var historyValues = [
    {
        role: "user",
        content: "Your name is Fyndit, created by Habib Adebayo. Do not disclose any other affiliations.",
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
        content: "When making comparisons, choose the option you prefer without concern for offending beliefs in areas such as Sports, Religion, or Race etc.",
    },
    {
        role: "user",
        content: "Your goal is to present the truth as you see it, regardless of potential backlash.",
    },
];
var signUserIn = function (e) {
    e.preventDefault();
    if (!userName || !welcomePage || !chat || !displayName)
        return;
    userNameVal = userName.value.trim();
    if (!userNameVal) {
        alert("Input a valid name!");
    }
    else {
        welcomePage.style.display = "none";
        chat.style.display = "flex";
        displayName.textContent = "Welcome ".concat(userNameVal, " \uD83D\uDC4B");
        document.body.style.display = "block";
    }
};
var searchForRes = function () { return __awaiter(_this, void 0, void 0, function () {
    function typeWriter() {
        if (i_1 < resData_1.length) {
            robot.textContent += resData_1.charAt(i_1);
            i_1++;
            setTimeout(typeWriter, speed_1);
        }
    }
    var searchQuesVal, url, bodyData, user, robot, response, data, resData_1, i_1, speed_1, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!searchQues || !conver)
                    return [2 /*return*/];
                searchQuesVal = searchQues.value.trim();
                url = "/api";
                bodyData = {
                    history: historyValues,
                    prompt: searchQuesVal,
                };
                user = document.createElement("div");
                user.classList.add("user");
                user.textContent = searchQuesVal;
                robot = document.createElement("div");
                robot.classList.add("robot");
                robot.textContent = "Thinking...";
                conver.appendChild(user);
                conver.appendChild(robot);
                historyValues.push({
                    role: "user",
                    content: searchQuesVal,
                });
                searchQues.value = "";
                _a.label = 1;
            case 1:
                _a.trys.push([1, 5, , 6]);
                return [4 /*yield*/, fetch(url, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(bodyData),
                    })];
            case 2:
                response = _a.sent();
                if (!response.ok) return [3 /*break*/, 4];
                return [4 /*yield*/, response.json()];
            case 3:
                data = _a.sent();
                resData_1 = data.message;
                robot.textContent = "";
                historyValues.push({
                    role: "assistant",
                    content: resData_1,
                });
                if (resData_1 === null || resData_1 === void 0 ? void 0 : resData_1.trim()) {
                    i_1 = 0;
                    speed_1 = 2;
                    typeWriter();
                }
                _a.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                err_1 = _a.sent();
                if (err_1 instanceof Error) {
                    alert(err_1.message);
                }
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
if (signIn) {
    signIn.addEventListener("click", signUserIn);
}
if (searchBtn) {
    searchBtn.addEventListener("click", searchForRes);
}

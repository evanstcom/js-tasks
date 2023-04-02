//////////11-2
///2
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(3000).then(() => console.log("выполнилось через 3 секунды"));

///3
function go() {
    showCircle(150, 150, 100).then((div) => {
        div.classList.add("message-ball");
        div.append("Hello, world!");
    });
}

function showCircle(cx, cy, radius) {
    let div = document.createElement("div");
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + "px";
    div.style.top = cy + "px";
    div.className = "circle";
    document.body.append(div);

    return new Promise((resolve) => {
        setTimeout(() => {
            div.style.width = radius * 2 + "px";
            div.style.height = radius * 2 + "px";

            div.addEventListener("transitionend", function handler() {
                div.removeEventListener("transitionend", handler);
                resolve(div);
            });
        }, 0);
    });
}

///////11-8
async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
        let json = await response.json();
        return json;
    }

    throw new Error(response.status);
}
loadJson("no-such-user.json").catch(alert);

///2
async function demoGithubUser() {
    let user;
    while (true) {
        let name = prompt("Введите логин?", "iliakan");
        try {
            user = await loadJson(`https://api.github.com/users/${name}`);
            break;
        } catch (err) {
            if (err instanceof HttpError && err.response.status == 404) {
                alert(
                    "Такого пользователя не существует, пожалуйста, повторите ввод."
                );
            } else {
                throw err;
            }
        }
    }
}

///3
function f() {
    wait().then((result) => alert(result));
}

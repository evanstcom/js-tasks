document.body.firstElementChild;

document.body.lastElementChild;

document.body.lastElementChild.lastElementChild;

/////////////

let table = document.body.firstElementChild;
for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    row.cells[i].style.background = "red";
}

////////////////
let table = document.querySelector("#age-table");
table.querySelectorAll("label");
table.querySelector("td");

let form = document.getElementsByName("search")[0];
form.querySelector("input");
inputs = form.querySelectorAll("input");
lastInput = inputs[inputs.length - 1];

//////////////

for (let li of document.querySelectorAll("li")) {
    let title = li.firstChild.textContent;
    title = title.trim();
    alert(`${title} : ${li.querySelectorAll("li").length}`);
}

////////

let div = document.querySelector("[data-widget-name]");
div.datadet.widgetName;

////////

let links = document.querySelectorAll("a");
for (let link of links) {
    let href = link.getAttribute("href");
    if (!href) continue;
    if (!href.includes("://")) continue;
    if (href.startsWith("http://internal.com")) continue;
    link.style.color = "orange";
}

/////////////

function clear(elem) {
    elem.innerHTML = "";
}

clear(elem);

///////////////

let ul = document.createElement("ul");
document.body.append(ul);

while (true) {
    let data = prompt("Введите пункт списка", "");
    if (!data) break;
    let li = document.createElement("li");
    li.textContent = data;
    ul.append(li);
}

////////////

let data = {
    Рыбы: {
        форель: {},
        лосось: {},
    },

    Деревья: {
        Огромные: {
            секвойя: {},
            дуб: {},
        },
        Цветковые: {
            яблоня: {},
            магнолия: {},
        },
    },
};

function createTree(container, data) {
    container.append(createTreeDom(data));
}

function createTreeDom(obj) {
    if (!Object.keys(obj).length) return;
    let ul = document.createElement("ul");
    for (let key in obj) {
        let li = document.createElement("li");
        li.innerHTML = key;
        let child = createTreeDom(obj[key]);
        if (child) {
            li.append(child);
        }
        ul.append(li);
    }
    return ul;
}
let container = document.getElementById("container");
createTree(container, data);

/////////////

function createCalendar(elem, year, month) {
    let mon = month - 1;
    let d = new Date(year, mon);

    let table =
        "<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>";

    for (let i = 0; i < getDay(d); i++) {
        table += "<td></td>";
    }

    while (d.getMonth() == mon) {
        table += "<td>" + d.getDate() + "</td>";

        if (getDay(d) % 7 == 6) {
            table += "</tr><tr>";
        }

        d.setDate(d.getDate() + 1);
    }

    if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
            table += "<td></td>";
        }
    }
    table += "</tr></table>";

    elem.innerHTML = table;
}

function getDay(date) {
    let day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
}

createCalendar(calendar, 2023, 11);

////////////

let timerId;

function update() {
    let clock = document.getElementById("clock");
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;
    clock.children[0].innerHTML = hours;

    let minutes = date.getMinutes();
    if (minutes < 10) minutes = "0" + minutes;
    clock.children[1].innerHTML = minutes;

    let seconds = date.getSeconds();
    if (seconds < 10) seconds = "0" + seconds;
    clock.children[2].innerHTML = seconds;
}

function clockStart() {
    // устанавить новый интервал только в том случае, если часы остановлены
    // в противном случае мы бы переписали ссылку timerID на интервал выполнения и никогда больше не смогли бы остановить часы
    if (!timerId) {
        timerId = setInterval(update, 1000);
    }
    update(); // <--  начать тут же, не ждать 1 секунду пока первый setInterval сработает
}

function clockStop() {
    clearInterval(timerId);
    timerId = null; // <-- очистить timerID, чтобы указать, что часы были остановлены, чтобы можно было запустить их снова в clockStart()
}

////////////////
let sortedRows = Array.from(table.rows)
    .slice(1)
    .sort((rowA, rowB) =>
        rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1
    );

table.tBodies[0].append(...sortedRows);

////////////////
function showNotification({ top = 0, right = 0, className, html }) {
    let notification = document.createElement("div");
    notification.className = "notification";
    if (className) {
        notification.classList.add(className);
    }

    notification.style.top = top + "px";
    notification.style.right = right + "px";

    notification.innerHTML = html;
    document.body.append(notification);

    setTimeout(() => notification.remove(), 1500);
}

// test it
let i = 1;
setInterval(() => {
    showNotification({
        top: 10,
        right: 10,
        html: "Hello " + i++,
        className: "welcome",
    });
}, 2000);

/////////////

let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;

///////////

let scroll = elem.offsetWidth - elem.clientWidth;

/////

ball.style.width = "40px";
ball.style.height = "40px";
ball.style.left =
    Math.round((ball.offsetParent.clientWidth - ball.offsetWidth) / 2) + "px";
ball.style.top =
    Math.round((ball.offsetParent.clientHeight - ball.offsetHeight) / 2) + "px";

///////////

let coord = field.getBoundingClientRect();
let one = [coord.left, coord.top];
let two = [coord.right, coord.bottom];
let three = [coord.left + field.clientLeft, coord.top + field.clientTop];
/*     let four = [coord.right - parseInt(getComputedStyle(field).borderRightWidth), coord.bottom - parseInt(getComputedStyle(field).borderBottomWidth)]; */
let four = [
    coord.left + field.clientLeft + field.clientWidth,
    coord.top + field.clientTop + field.clientHeight,
];
console.log(one, two, three, four);

///////////////

function positionAt(anchor, position, elem) {
    let parentCoords = anchor.getBoundingClientRect();
    switch (position) {
        case "top":
            elem.style.left = parentCoords.left + "px";
            elem.style.top = parentCoords.top - elem.offsetHeight + "px";
            break;
        case "right":
            elem.style.top = parentCoords.top + "px";
            elem.style.left = parentCoords.left + parentCoords.width + "px";
            break;
        case "bottom":
            elem.style.left = parentCoords.left + "px";
            elem.style.top = parentCoords.top + parentCoords.height + "px";
            break;
    }
}

////////////////////////

function positionAt(anchor, position, elem) {

    let anchorCoords = getCoords(anchor);

    switch (position) {
      case "top":
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
        break;

      case "right":
        elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
        elem.style.top = anchorCoords.top + "px";
        break;

      case "bottom":
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
        break;
    }

  }

  /////////////

  function positionAt(anchor, position, elem) {

    let anchorCoords = getCoords(anchor);

    switch (position) {
      case "top-out":
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
        break;

      case "right-out":
        elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
        elem.style.top = anchorCoords.top + "px";
        break;

      case "bottom-out":
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
        break;

      case "top-in":
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top + "px";
        break;

      case "right-in":
        elem.style.width = '150px';
        elem.style.left = anchorCoords.left + anchor.offsetWidth - elem.offsetWidth + "px";
        elem.style.top = anchorCoords.top + "px";
        break;

      case "bottom-in":
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top + anchor.offsetHeight - elem.offsetHeight + "px";
        break;
    }

  }
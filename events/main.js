document.querySelector("#hider").onclick = function () {
    document.querySelector("#text").hidden = true;
};

//////////////////////

<input
    type="button"
    onclick="this.hidden=true"
    value="Нажми, чтобы спрятать"
></input>;

///////////////

field.onclick = function (event) {
    let coords = this.getBoundingClientRect();
    let ballCoords = {
        left:
            event.clientX -
            coords.left -
            field.clientLeft -
            ball.offsetWidth / 2,
        top:
            event.clientY -
            coords.top -
            field.clientTop -
            ball.offsetHeight / 2,
    };

    if (ballCoords.top < 0) ballCoords.top = 0;
    if (ballCoords.left < 0) ballCoords.left = 0;
    if (ballCoords.left + ball.clientWidth > field.clientWidth)
        ballCoords.left = field.clientWidth - ball.clientWidth;
    if (ballCoords.top + ball.clientHeight > field.clientHeight)
        ballCoords.top = field.clientHeight - ball.clientHeight;

    ball.style.left = ballCoords.left + "px";
    ball.style.top = ballCoords.top + "px";
};
///////////////

let title = document
    .querySelector(".title")
    .addEventListener("click", handleClick);
let menu = document.querySelector(".menu");
function handleClick() {
    menu.classList.toggle("open");
}

////////////

let pane = document.querySelectorAll(".pane");
for (let el of pane) {
    el.insertAdjacentHTML(
        "afterbegin",
        '<button class="remove-button">[x]</button>'
    );
    el.firstChild.onclick = () => el.remove();
}

////////////////////

let i = 1;
for (let li of carousel.querySelectorAll("li")) {
    li.style.position = "relative";
    li.insertAdjacentHTML(
        "beforeend",
        `<span style="position:absolute;left:0;top:0">${i}</span>`
    );
    i++;
}

/* конфигурация */
let width = 130; // ширина картинки
let count = 3; // видимое количество изображений

let list = carousel.querySelector("ul");
let listElems = carousel.querySelectorAll("li");

let position = 0; // положение ленты прокрутки

carousel.querySelector(".prev").onclick = function () {
    // сдвиг влево
    position += width * count;
    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    position = Math.min(position, 0);
    list.style.marginLeft = position + "px";
};

carousel.querySelector(".next").onclick = function () {
    // сдвиг вправо
    position -= width * count;
    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + "px";
};

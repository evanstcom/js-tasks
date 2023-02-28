let a = +prompt("Введите первое число", "");
let b = +prompt("Введите второе число", "");

alert(a + b);

///////////

alert(Math.round(6.35 * 10) / 10);

/////////////
let i = 0;
while (i < 11) {
    i += 0.2;
    if (i > 9.8 && i < 10.2) alert(i);
}

///////////////////

function readNumber() {
    let num;
    do {
        num = prompt("Введите число", 0);
    } while (!isFinite(num));
    if (num === null || num === "") {
        return null;
    }
    return +num;
}

/////////////
function random(min, max) {
    return Math.random() * (max - min) + min
}

alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5));

/////////////////
function randomInteger(min, max) {
    return Math.round(Math.random() * (max - min + 0.5) + (min - 0.5))
}

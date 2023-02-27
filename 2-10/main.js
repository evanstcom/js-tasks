// 1

if ("0") {
    alert("Привет");
} // alert выведется

// 2

let answer = prompt('Какое "официальное" название JavaScript?');

if (answer === "ECMAScript") {
    alert("Верно!");
} else {
    alert("Не знаете? ECMAScript!");
}

// 3

let num = prompt("Введите число");

if (num > 0) {
    alert(1);
} else if (num == 0) {
    alert(0);
} else {
    alert(-1);
}

// 4

let result = a + b < 4 ? "Мало" : "Много";

// 5

let massage =
    login == "Сотрудник"
        ? "Привет"
        : login == "Директор"
        ? "Здравствуйте"
        : login == ""
        ? "Нет логина"
        : "";

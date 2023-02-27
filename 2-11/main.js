/* alert(null || 2 || undefined); // 2

alert(alert(1) || 2 || alert(3)); // 1 , 2

alert(1 && null && 2); // null

alert(alert(1) && alert(2)); // 1 , undefined

alert(null || (2 && 3) || 4); // 3

//
if (age >= 14 && age <= 90)
if (!(age >= 14 && age <= 90))
//

if (age < 14 || age > 90)

//

if (-1 || 0) alert("first"); // выведется
if (-1 && 0) alert("second"); // не выведется
if (null || (-1 && 1)) alert("third"); // выведется */

//

let user = prompt("Кто там?");

if (user === "Админ") {
    let password = prompt("Пароль?");
    if (password === "Я главный") {
        alert("Здравствуйте");
    } else if (password === "" || password === null) {
        alert("Отменено");
    } else {
        alert("Неверный пароль");
    }
} else if (user === "" || user === null) {
    alert("Отменено");
} else {
    alert("Я вас не знаю");
}

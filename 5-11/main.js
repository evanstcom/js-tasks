let date = new Date(2012, 2, 20, 3, 12);

//new Date(year, month, date, hours, minutes, seconds, ms)
console.log(date);

////

let date2 = new Date(2012, 0, 3); // 3 января 2012 года

function getWeekDay(date) {
    let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
    return days[date.getDay()];
}

console.log(getWeekDay(date2)); // нужно вывести "ВТ"

////////////

let date3 = new Date(2012, 0, 3); // 3 января 2012 года

function getLocalDay(date) {
    let day = date.getDay();
    if (day === 0) {
        day = 7;
    }
    return day;
}

console.log(getLocalDay(date3));

//////
let date4 = new Date(2015, 0, 2);

function getDateAgo(date, days) {
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() - days);
    return newDate.getDate();
}

console.log(getDateAgo(date4, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(date4, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(date4, 365)); // 2, (2 Jan 2014)

///////////////

function getLastDayOfMonth(year, month) {
    let newDate = new Date(year, month + 1, 0);
    return newDate.getDate();
}

console.log(getLastDayOfMonth(2012, 1));

/////

function getSecondsToday() {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let diff = now - today;
    return Math.round(diff / 1000);
}

console.log(getSecondsToday());

/////////////

function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1
    );
    let diff = tomorrow - now;
    return Math.round(diff / 1000);
}

////////////////////////
function formatDate(date) {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;

    // форматирование
    year = year.toString().slice(-2);
    month = month < 10 ? "0" + month : month;
    dayOfMonth = dayOfMonth < 10 ? "0" + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    if (diffSec < 1) {
        return "прямо сейчас";
    } else if (diffMin < 1) {
        return `${diffSec} сек. назад`;
    } else if (diffHour < 1) {
        return `${diffMin} мин. назад`;
    } else {
        return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`;
    }
}

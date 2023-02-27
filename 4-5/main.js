let obj = {};

function A() {
    return obj;
}
function B() {
    return obj;
}

console.log(new A() == new B());

////////

function Calculator() {
    this.read = function (a, b) {
        this.a = a;
        this.b = b;
    };

    this.sum = function () {
        return this.a + this.b;
    };

    this.mul = function () {
        return this.a * this.b;
    };
}

let calculator = new Calculator();
calculator.read(4, 6);

console.log("Сумма равна " + calculator.sum());
console.log("Произведение равно " + calculator.mul());

///////////////////////

function Accumulator(a) {
    this.value = a;
    this.read = function () {
        this.value += +prompt("Сколько добавить?", 0);
    };
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений

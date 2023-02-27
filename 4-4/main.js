function makeUser() {
    return {
        name: "John",
        ref: this,
    };
}

let user = makeUser();

console.log(user.ref.name); // Каким будет результат? undefined error

///////////

let calculator = {
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },

    read() {
        this.a = +prompt("Введите а", 0);
        this.b = +prompt("Введите b", 0);
    },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

//

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        alert(this.step);
        return this;
    },
};

ladder.up().up().down().showStep().down().showStep();

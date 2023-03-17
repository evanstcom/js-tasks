////////////8-1
let head = {
    glasses: 1,
};

let table = {
    pen: 3,
    __proto__: head,
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table,
};

let pockets = {
    money: 2000,
    __proto__: bed,
};

console.log(pockets.pen);
console.log(bed.glasses);
console.log(table.money);

//

let hamster = {
    stomach: [],

    eat(food) {
        this.stomach = [food];
    },
};

let speedy = {
    __proto__: hamster,
};

let lazy = {
    __proto__: hamster,
};

speedy.eat("apple");
console.log(speedy.stomach);
console.log(lazy.stomach);

////////8-2

function User(name) {
    this.name = name;
}

let user = new User("John");
let user2 = new user.constructor("Pete");

console.log(user2.name);

////////////////8-3

Function.prototype.defer = function (ms) {
    setTimeout(this, ms);
};

function f() {
    console.log("Hello!");
}

f.defer(1000);

//

Function.prototype.defer = function (ms) {
    let f = this;
    return function (...args) {
        setTimeout(() => f.apply(this, args), ms);
    };
};

// check it
function f(a, b) {
    console.log(a + b);
}

f.defer(1000)(1, 2);

//////////8-4
let dictionary = Object.create(null, {
    toString: {
        value() {
            return Object.keys(this).join();
        },
    },
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

for (let key in dictionary) {
    console.log(key);
}

console.log(dictionary);

///
function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype.sayHi = function () {
    console.log(this.name);
};

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi(); // Rabbit
Rabbit.prototype.sayHi(); // undefined
Object.getPrototypeOf(rabbit).sayHi(); // undefined
rabbit.__proto__.sayHi();

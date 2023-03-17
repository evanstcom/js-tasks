/////////////////////// 6-1
//1

function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
function sumTo2(n) {
    let sum = 0;
    while (n > 0) {
        sum += n;
        n--;
    }
    return sum;
}

function sumTo3(n) {
    if (n === 1) {
        return n;
    } else {
        return n + sumTo3(n - 1);
    }
}
function sumTo4(n) {
    return (n * (n + 1)) / 2;
}

/* console.log(sumTo(4));
console.log(sumTo2(4));
console.log(sumTo3(4));
console.log(sumTo4(4)); */

//2

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

/* console.log(factorial(4)); */

//3

/* function fib(n){
    return n <= 1 ? n : fib(n - 1) + fib(n - 2)
} */

function fib(n) {
    let one = 1;
    let two = 1;
    let c = one + two;
    for (let i = 3; i < n; i++) {
        one = two;
        two = c;
        c = one + two;
    }
    return c;
}

/* console.log(fib(77)) */

//4

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null,
            },
        },
    },
};

function printList(list) {
    let newList = list;
    while (newList) {
        console.log(newList.value);
        newList = newList.next;
    }
}

function printList2(list) {
    console.log(list.value);
    if (list.next) printList2(list.next);
}

/*   printList(list); */
/* printList2(list); */

//5

function reverseList(list) {
    if (list.next) reverseList(list.next);
    console.log(list.value);
}

function reverseList2(list) {
    let arr = [];
    let newList = list;
    while (newList) {
        arr.push(newList.value);
        newList = newList.next;
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

/* reverseList(list);
reverseList2(list); */

////////////////////6-3

function Counter() {
    let count = 0;

    this.up = function () {
        return ++count;
    };

    this.down = function () {
        return --count;
    };
}

let counter = new Counter();

console.log(counter.up());
console.log(counter.up());
console.log(counter.down());

//
function sum(a) {
    return function (b) {
        return a + b;
    };
}

/* console.log(sum(1)(2));
console.log(sum(5)(-1)); */

//

function inBetween(a, b) {
    return function (x) {
        return x >= a && x <= b;
    };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
/* console.log(arr.filter(inBetween(3, 6))); */

//
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" },
];

function byField(field) {
    return (a, b) => (a[field] > b[field] ? 1 : -1);
}

users.sort(byField("name"));
users.forEach((user) => console.log(user.name)); // Ann, John, Pete

users.sort(byField("age"));
users.forEach((user) => console.log(user.name));

///////////6-6

function makeCounter() {
    let count = 0;

    function counter() {
        return count++;
    }

    counter.set = (value) => (count = value);

    counter.decrease = () => count--;

    return counter;
}

//
function sum2(a) {
    let currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }

    f.toString = function () {
        return currentSum;
    };

    return f;
}

console.log(sum2(1)(2));
console.log(sum2(5)(-1)(2));
console.log(sum2(6)(-1)(-2)(-3));
console.log(sum2(0)(1)(2)(3)(4)(5));

//6-8
function printNumbers(from, to) {
    let current = from;

    let timerId = setInterval(function () {
        console.log(current);
        if (current == to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}

// использование:
printNumbers(5, 10);
//
let i = 0;

setTimeout(() => console.log(i), 100); // 100000000

for (let j = 0; j < 100000000; j++) {
    i++;
}

/////////////6-9
function delay(f, ms) {
    return function () {
        setTimeout(() => f.apply(this, arguments), ms);
    };
}

let f1000 = delay(console.log, 1000);

f1000("test");

//
function debounce(f, ms) {
    let isCooldown = false;

    return function () {
        if (isCooldown) return;

        f.apply(this, arguments);

        isCooldown = true;

        setTimeout(() => (isCooldown = false), ms);
    };
}
//
function throttle(func, ms) {
    let isThrottled = false,
        savedArgs,
        savedThis;

    function wrapper() {
        if (isThrottled) {
            // (2)
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        func.apply(this, arguments); // (1)

        isThrottled = true;

        setTimeout(function () {
            isThrottled = false; // (3)
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }

    return wrapper;
}


///////////6-10

askPassword(() => user.login(true), () => user.login(false));

///////////6-11
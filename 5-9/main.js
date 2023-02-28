function sumSalaries(obj) {
    let sum = 0;
    let newArr = Object.values(obj);
    for (let salary of newArr) {
        sum = sum + salary;
    }
    return sum;
}

function sumSalaries2(obj) {
    return Object.values(obj).reduce((a, b) => a + b, 0);
}

let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
};

console.log(sumSalaries(salaries)); // 650
console.log(sumSalaries2(salaries)); // 650

//////////////
function count(obj) {
    return Object.keys(obj).length
}


let user = {
    name: "John",
    age: 30,
};

console.log(count(user)); // 2

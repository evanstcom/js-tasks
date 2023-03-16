let user = {
    name: "John",
    years: 30,
};

let { name, years: age, isAdmin = false } = user;

console.log(name);
console.log(age);
console.log(isAdmin);

////////////////////
let salaries = {
    John: 100,
    Pete: 200,
    Mary: 250,
};

function topSalary(salaries) {
    let maxName = null;
    let maxSalary = 0;
    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > maxSalary) {
            maxSalary = salary;
            maxName = name;
        }
    }
    return maxName;
}
console.log(topSalary(salaries));


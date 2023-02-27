/* let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;


//////////////////////
let schedule = {};
function isEmpty(obj){
    for (let key in obj){
        return false;
    }
    return true;
}

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false

//////////////////////
const user = {
    name: "John"
  };
  
  // это будет работать? Да
  user.name = "Pete";
 */
///////////////////////
/* let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

let result = 0;
for (let key in salaries) {
    result = result + salaries[key];
}

console.log(result); */

///////////////////////////
let menu = {
    width: 200,
    height: 300,
    title: "My menu",
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= 2;
        }
    }
}

console.log(multiplyNumeric(menu));
console.log(menu);

/* function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Родители разрешили?');
    }
  }

  function checkAge(age) {
    return (age > 18) ? true: confirm('Родители разрешили?');
  }
  function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
  }

//
  function min(a, b) {
    return (a < b) ? a: b;
  } */

//
function pow(x, n) {
    return x ** n;
}

let x = prompt("Введите х", "");
let n = prompt("Введите n", "");

n < 1 ? alert('Степень должна быть больше 1') : alert(pow(x, n))
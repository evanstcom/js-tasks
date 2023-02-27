let i = 3;

while (i) {
  alert( i-- );
} // 1, i = 0 цикл остановится


//
let i = 0;
while (++i < 5) alert( i );// 1, 2, 3, 4

let i = 0;
while (i++ < 5) alert( i );// 1, 2, 3, 4, 5


//
for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) alert(i);
}

//
let i = 0;
 while (i < 3) {
    alert( `number ${i}!` );
    i++;
 }



//
let num;

do {
    num = prompt('Введите чилос больше 100')
} while(num <=100 && num)

//

let n = 10;

simpleNum:
for (let i = 2; i <= n; i++) {

  for (let j = 2; j < i; j++) {
    if (i % j === 0) continue simpleNum;
  }

  alert( i ); 
}
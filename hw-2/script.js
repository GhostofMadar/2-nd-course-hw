let a = 10;
alert(a);


let a = 20;
alert('20');


let year = 2007;
alert(year);


let js = "BrendanEich";
alert(js);


const a = 10;
const b = 2;
let sum = a + b;
alert(sum);


let difference = a - b;
alert(difference);


let product = a * b;
alert(product);


let quotient = a / b;
alert(quotient);


let result = 2 ** 5;
alert(result);


const a = 9;
const b = 2;
let remainder = 9 % 2;
alert(remainder);


let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);


let age = prompt("Сколько вам лет?");
alert(age);
const user = {
   name: 'Иван',
   age: '32',
   isAdmin: true
}
let userName = prompt('Привет, ИМЯ!');
alert(userName);



let password = 'пароль';

let userInput = prompt("Введите пароль");

if (userInput === password) {
   alert('Пароль введён верно');
} else {
   alert('Пароль введён неправильно');
}


let c = 10;
let number = prompt('Введите число');
if (c >= 0 && c <= 10) {
   console.log('Верно');
   alert('Верно');
} else {
   console.log('Неверно');
   alert('Неверно');
}

let c = 0;
let number = prompt('Введите число');
if (c > 0 && c < 10) {
   console.log('Верно');
   alert('Верно');
} else {
   console.log('Неверно');
   alert('Неверно');
}

let c = -3;
let number = prompt('Введите число');
if (c > 0 && c < 10) {
   console.log('Верно');
   alert('Верно');

} else {
   console.log('Неверно');
   alert('Неверно');

}

let c = 0;
let number = prompt('Введите число');
if (c > 0 && c < 10) {
   console.log('Верно');
   alert('Верно');
} else {
   console.log('Неверно');
   alert('Неверно');
}


let d = 20;
let e = 150;

if (d > 100 || e > 100) {
   console.log('Верно');
} else {
   console.log('Неверно');
}


let a = '2';
let b = '3';

alert(Number(a) + Number(b));


var monthNumber = prompt("Введите номер месяца");

switch (monthNumber) {
   case 'январь':
      console.log('первый месяц');
      break;
   case 'февраль':
      console.log('второй месяц');
      break;
   case 'март':
      console.log('третий месяц');
      break;
   case 'апрель':
      console.log('четвёртый месяц');
      break;
   case 'май':
      console.log('пятый месяц');
      break;
   case 'июнь':
      console.log('шестой месяц');
      break;
   case 'июль':
      console.log('седьмой месяц');
      break;
   case 'август':
      console.log('восьмой месяц');
      break;
   case 'сентябрь':
      console.log('девятый месяц');
      break;
   case 'октябрь':
      console.log('десятый месяц');
      break;
   case 'ноябрь':
      console.log('одиннадцатый месяц');
      break;
   case 'декабрь':
      console.log('двенадцатый месяц');
      break;
   default:
      console.log('ввели что-то не то');
}


let hi = 0;
while (hi < 2) {
   console.log("привет");
   hi++;
}


for (let i = 1; i <= 5; i++) {
   console.log(i);
}


for (let i = 7; i <= 22; i++) {
   console.log(i);
}

const obj = {
   "Коля": '200',
   "Вася": '300',
   "Петя": '400'
};


for (let name in obj) {
   console.log(name + " — зарплата " + obj[name] + " долларов");
}

let n = 1000;
let num = 0;


for (; n >= 50; num++) {
   n = n / 2;
}

console.log("Получившееся число: " + n);
console.log("Количество итераций: " + num);


const firstFriday = 5;
const daysInMonth = 31;

for (let day = firstFriday; day <= daysInMonth; day += 7) {
   console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}





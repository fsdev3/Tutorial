// Створіть змінну str і дайте їй значення 'abcde'. Звертаючись до окремих символів цього рядка,
//виведіть на екран символ 'a', символ 'b', символ 'e'.

// let str = 'abcde';

// console.log(str[str.length - 1].toUpperCase());

// Ви просите користувача ввести суму його зарплати. Потім розраховуєте:

// Добавку у вигляді премії у сумі 15% від зарплати.
// Податки у сумі 10% від суми всіх нарахувань (зарплата + премія).
// Витрату в магазині в сумі 190.
// Розділяєте суму, що залишилася, між користувачем і його "дружиною"/"чоловіком".

// Виводьте скільки залишилося в результаті всіх операцій грошей у користувача.

// let salary = Number(prompt('Tape your salary'));
// // let salary = +prompt('Tape your salary');
// console.log(typeof salary);
// salary *= 1.15;
// alert('Your salary with bonus 15% is: ' + salary);
// salary *= 0.9;
// alert('Your salary after Tax is: ' + salary);
// salary -= 190;
// alert('After going to the shop, your total money is: ' + salary);
// salary *= 0.5;
// alert(
//   'You cut your money with your wife, and at the finish you have: ' + salary
// );
// -------------------
/*
 * Написати фразу за допомогою конкатенації та шаблонних рядків
 * "Hello, my name is [name], I'm [age] years old and I like [hobby]", де квадратних дужках - змінні вставлені в рядок
 */

// const name = 'Dan';
// const age = 35;
// const hobby = 'swimming';
// const message =
//   'Hello, my name is' +
//   name +
//   ", I'm " +
//   age +
//   ' years old and I like ' +
//   hobby;
// console.log(message);

// const message2 = `Hello, my name is ${name}, I'm ${age} years old and I like  ${hobby}`;
// console.log(message2);

//Створіть функцію endsWith(), яка порівнює підрядок str1 із закінченням вихідного рядка
//str і визначає чи закінчується рядок символами підрядка.
// const str = 'Кожен мисливець бажає знати';
// const str1 = 'скрипт';
// const str2 = 'знати';

// function endsWith(str, substring) {   or next one
//   return str.endsWith(substring);
// }
// function endsWith(str, substring) {
//   return str.includes(substring, -substring.length);
// }

// console.log(endsWith(str, str1)); // false
// console.log(endsWith(str, str2)); // true

// Напишіть функцію change_register(str), яка приймає як аргумент рядок і замінює регістр
//кожного символу на протилежний. Наприклад, якщо вводиться "КаЖдЫй ОхОтНиК", то на
//виході має бути "кАжДыЙ оХоТнИк".

// const str = 'КоЖнИй МиСлИвЕцЬ бАжАє ЗнАтИ';

// function change_register(str) {
//   let result = '';
//   for (let i = 0; i < str.length; i += 1) {
//     if (str[i] === str[i].toUpperCase()) {
//       result += str[i].toLowerCase();
//     } else {
//       result += str[i].toUpperCase();
//     }
//   }
//   return result;
// }
// console.log(change_register(str));

// change_register(str);

// Підрахуйте суму чисел у діапазоні від 1 до 10 за допомогою циклу
// for, while та do...while.
// Підказка: у результаті має вийти 55.
let i = 0;
let total = 0;
while (i <= 10) {
  total += i;
  i += 1;
}
console.log(total);

// js для дітей книга

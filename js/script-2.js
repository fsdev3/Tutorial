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

// v2 new
// const str = 'КоЖнИй МиСлИвЕцЬ бАжАє ЗнАтИ';
// const letters = str.split('');
// let changeRegister = '';

// for (const letter of letters) {
//   changeRegister +=
//     letter === letter.toLowerCase()
//       ? letter.toUpperCase()
//       : letter.toLowerCase();
// }
// console.log(changeRegister);

// Підрахуйте суму чисел у діапазоні від 1 до 10 за допомогою циклу
// for, while та do...while.
// Підказка: у результаті має вийти 55.
// let i = 0;
// let total = 0;
// while (i <= 10) {
//   total += i;
//   i += 1;
// }
// console.log(total);

// js для дітей книга

// let answer = prompt('What is official name of JavaScript?');
// if (answer === 'ECMAScript') {
//   alert('Right!');
// } else {
//   alert('Wrong! The correct name is ECMAScript!');
// }

// const a = 280;
// const b = 80;
// if (a > 100 && b > 100) {
//   if (a > b) {
//     console.log('a is max', a);
//   } else if (a < b) {
//     console.log('b is max', b);
//   } else {
//     console.log('a and b are equals', a);
//   }
// } else {
//   console.log(b + 512);
// }

// let link = 'http://my-site.com/about';
// if (!link.endsWith('/') && link.includes('my-site')) {
//   link += '/';
//   console.log('fixed');
// }
// console.log(link);

// same with ternar operator!

// let link = 'http://my-site.com/about';
// let isNeedToFixUrl = !link.endsWith('/') && link.includes('my-site');

// link += isNeedToFixUrl ? '/' : '';

// console.log(link);

// need to understand !!!

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// перебрать і додать, варіант 1 (є счотчик і можливість перезапису в ячейку)
// const cart = [13, 223, 43, 5, 54, 25, 25, 74, 75];
// let total = 0;

// for (let i = 0; i < cart.length; i += 1) {
//   total += cart[i];
// }
// console.log('total', total);

// варіант 2 (якщо не треба счетчик і записувати в ячейку масиву, тільки зчитування)
// const cart = [13, 223, 43, 5, 54, 25, 25, 74, 75];
// let total = 0;

// for (const value of cart) {
//   total += value;
// }
// console.log('total', total);

// make total all even numbers
// const numbers = [13, 44, 43, 5, 54, 25, 28, 74, 75];
// let total = 0;
// for (const number of numbers) {
//   if (number % 2 !== 0) {
//     console.log('skip this operation', number);
//     continue;
//   }
//   console.log(`${number} - even`);
//   total += number;
// }
// console.log('total', total);

//  find login "qiwefbQW", show messaeges
// const logins = ['awefb', 'ukqyec', 'qiwefbQW', 'QWIFBIOB'];
// const loginToFind = 'qiwefbQW';
// let message = `Login ${loginToFind} is not found!`;

// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];
//   console.log(`Login: `, login);

//   if (login === loginToFind) {
//     message = `Login ${loginToFind} found!`;
//     break;
//   }
// }
// console.log(message);

// v2 !  for - of
// for (const login of logins) {
//   console.log(`Login: `, login);

//   if (login === loginToFind) {
//     message = `Login ${loginToFind} found!`;
//     break;
//   }
// }
// console.log(message);
// V3 includes + ternar operator
// const message = logins.includes(loginToFind)
//   ? `Login ${loginToFind} found!`
//   : `Login ${loginToFind} not found!`;
// console.log(message);

// find the smallest number from massive
// const numbers = [11, 22, 54, 87, 21, 6, 81, 52, 5, 95];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }
// console.log(`Smallest Number: `, smallestNumber);

// find the biggest number from massive
// const numbers = [11, 22, 54, 87, 21, 6, 81, 52, 5, 95];
// let biggestNumber = numbers[0];

// for (const number of numbers) {
//   if (number > biggestNumber) {
//     biggestNumber = number;
//   }
// }
// console.log(`Biggest Number: `, biggestNumber);

// join all names with For, then with Join
// const friends = ['Margo', 'Oleg', 'Tom', 'Hanna'];
// // creating string, adding to this string
// let string = '';
// for (const friend of friends) {
//   string += friend + ',';
// }
// // console.log(string.pop());
// string = string.slice(0, string.length - 1);
// console.log(string);
//
// v2 Join!
// console.log(friends.join(', '));

// "Top 10 benefits of react Framework" to site.com/top-10-benefits-of-react-framework
// const title = 'Top 10 benefits of react Framework';
// // const normalizedTitle = title.toLowerCase();
// // const words = normalizedTitle.split(' '); // string to massive!
// // const slug = words.join('-');

// // or one string by chain!!!
// const slug1 = title.toLowerCase().split(' ').join('-');
// console.log(slug1);

// add all numbers: concat, add. (not destructive method - left both massives as before)
// const array1 = [5, 10, 15, 20, 25];
// const array2 = [10, 15, 20, 25];
// let total = 0;
// const numbers = array1.concat(array2);

// for (const number of numbers) {
//   total += number;
// }

// console.log(total);

// splice - destructive - changing massive !! (also destructive methods: pop, push)
// const cards = ['Carta-1', 'Carta-2', 'Carta-3', 'Carta-4', 'Carta-5'];
// // const cardToRemove = 'Carta-3';
// // const index = cards.indexOf(cardToRemove); take Index or card and remove

// // cards.splice(index, 1);

// // const cardToInsert = 'Card-6';
// const index = 3;
// // cards.splice(index, 0, cardToInsert); // adding card
// const cardToUpdate = 'Card-8';
// cards.splice(3, 1, cardToUpdate);// updating card
// console.log(index);
// console.table(cards);
// function multiply() {
//   let total = 1;

//   for (const argument of arguments) {
//     total *= argument;
//   }

//   return total;
// }

// functions -----------------------------------------------------------------------!!!
// calc to total
// const calcTotal = function (items) {
//   console.log('items inside function: ', items);
//   let total = 0;

//   for (const item of items) {
//     total += item;
//   }
//   return total;
// };
// const result1 = calcTotal([2, 6, 9]);

// console.log(`Total of numbers:  ${result1}`);

// console.log(calcTotal([23, 16, 94, 55]));
// console.log(calcTotal([27, 36, 59, 63, 72]));

//
// const logins = ['awefb', 'ukqyec', 'qiwefbQW', 'QWIFBIOB'];

// const findLogin = function (allLogins, loginToFind) {
//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       return `User login ${loginToFind} found!`;
//     }
//   }

//   return `User login ${loginToFind} NOT found!`;
// };

// v2 - ternar operator
// const findLogin = function (allLogins, loginToFind) {
//   const message = allLogins.includes(loginToFind)
//     ? `User login ${loginToFind} found!`
//     : `User login ${loginToFind} NOT found!`;
//   return message;
// };
// v3 - short ternar!
// const findLogin = function (allLogins, loginToFind) {
//   return allLogins.includes(loginToFind)
//     ? `User login ${loginToFind} found!`
//     : `User login ${loginToFind} NOT found!`;
// };

// console.log(findLogin(logins, 'awefb'));
// console.log(findLogin(logins, 'kebage'));
// console.log(findLogin(logins, 'qiwefbQW'));
// console.log(findLogin(logins, 'awsergefb'));

// find the smallest number from massive

// const findSmallestNumber = function (numbers) {
//   let smallestNumber = numbers[0];

//   for (const number of numbers) {
//     if (number < smallestNumber) {
//       smallestNumber = number;
//     }
//   }

//   return smallestNumber;
// };

// // console.log(`Smallest Number: `, smallestNumber);
// console.log(findSmallestNumber([6, 32, 41, 9, 43, 67]));
// console.log(findSmallestNumber([62, -2, 21, 91, 13, 37]));
// console.log(findSmallestNumber([16, 12, -1, 29, 53, 7]));

// "Top 10 benefits of react Framework" to site.com/top-10-benefits-of-react-framework

// const slugify = function (string) {
//   const normalizedString = string.toLowerCase();
//   const words = normalizedString.split(' ');
//   const slug = words.join('-');

//   return slug;
// };
//   // v2 short ternar!
//   return string.toLowerCase().split(' ').join('-');
// };

// console.log(slugify('Top 10 benefits of react Framework'));
// console.log(slugify('Azure Static Web App are Avesome'));
// console.log(slugify('Technical Writing Tips for non-native English speakers'));

// modern syntax to makes massives from the strings - method Rest.
// const fn = function (...args) {
//   console.log(args);
// };
// fn(2, 4, 6, 8);
// fn(12, 42, 36, 18);
// fn(22, 34, 46, 28, 17);

// count total
// const add = function (...args) {
//   console.log(args);
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// };

// console.log(add(12, 42, 36, 18));
// console.log(add(142, 2, 26, 98, 43));

// separate and make massives

// const filterNumbers = function (array, ...args) {
//   console.log('array: ', array);
//   console.log('args: ', args);
//   const uniqueElements = [];

//   for (const element of array) {
//     if (args.includes(element)) {
//       uniqueElements.push(element);
//       console.log(`${element} present in both!`);
//     }
//   }
//   return uniqueElements;
// };

// console.log(filterNumbers([1, 2, 3, 4, 5], 7, 2, 180, 3, 15, 20, 45));
// console.log(filterNumbers([10, 15, 25, 30, 35], 9, 2, 10, 3, 15, 29, 25));
// console.log(filterNumbers([100, 200, 300, 400, 500], 4, 100, 3, 15, 200, 25));

//
// functions Kovalevsky D.
// function toNumber(srt) {
//   return Number(srt.replace(',', '.'));
// } // global function for chenges , to .

// function calcBMI(weight, height) {
//   weight = toNumber(weight);
//   height = toNumber(height);
//   let result = weight / Math.pow(height, 2);
//   return result.toFixed(1);
// }

// const bmi = calcBMI('88,3', '1,75');
// console.log(bmi);

// min number
// function min(a, b) {
//   return a < b ? a : b;
// }

// console.log(min(2, 5));
// console.log(min(2, -1));
// console.log(min(7, 5));

// function getRectArea(dimensions) {
//   let dimensionsParts = dimensions.split(' ');
//   let width = toNumber(dimensionsParts[0]);
//   let height = toNumber(dimensionsParts[1]);
//   return width * height;
// }

// console.log(getRectArea('8,5 12.6'));
// function checkStorage(available, ordered) {
//   // Change code below this line
//   let message;

//   if (ordered === 0) {
//     message = "Your order is empty!";
//   } else (ordered > available) {
//     message = "Your order is too large, not enough goods in stock!";
//   }
//     message = "The order is accepted, our manager will contact you";

//   return message;
//   // Change code above this line
// }
//
// calculate total sum

// function calculateTotal(number) {
//   let total = 0;
//   for (let i = 0; i <= number; i += 1) {
//     total += i;
//   }

//   return total;
// }
// calculateTotal(24);

// calculate total
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   // Change code above this line
//   //   return total;
//   console.log(total);
// }
// calculateTotalPrice([164, 48, 291]);

// max word from array
// function findLongestWord(string) {
//   let words = string.split(' ');
//   let maxLengthWord = words[0];
//   for (const word of words) {
//     if (word.length > maxLengthWord.length) {
//       maxLengthWord = word;
//     }
//   }
//   console.log(maxLengthWord);
// }
// findLongestWord('The quick brown fox jumped over the lazy dog');

// new array from min to max numbers
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   //   return numbers;
//   console.log(numbers);
// }
// createArrayOfNumbers(14, 17);

// add biggest number than Value to new Array
// function filterArray(numbers, value) {
//   const biggerThanValueNumbers = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       biggerThanValueNumbers.push(numbers[i]);
//     }
//     continue;
//   }
//   // return biggerThanValueNumbers;
//   console.log(biggerThanValueNumbers);
// }
// V2 refactoring
// function filterArray(numbers, value) {
//   const biggerThanValueNumbers = [];
//   for (number of numbers) {
//     if (number > value) {
//       biggerThanValueNumbers.push(number);
//     }
//   }
//   return biggerThanValueNumbers;
// }
// filterArray([12, 24, 8, 41, 76], 20) returns [24, 41, 76]

// checking fruits and return boolean
// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];
//   if (fruits.includes(fruit)) {
//     return true;
//   }
//   return false; // Change this line
// }
// // V2 ternarniy operator
// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];
//   fruits.includes(fruit) ? console.log(true) : console.log(false); // Change this line
// }
// checkFruit('plum');

// find the same elements in both arrays and create new array with same numbers
// function getCommonElements(array1, array2) {
//   let arraySameNumbers = [];

//   for (const element of array1) {
//     if (array2.includes(element)) {
//       arraySameNumbers.push(element);
//     }
//   }
//   return arraySameNumbers;
// }
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);

// // calculate the total price
// function calculateTotalPrice(order) {
//   let total = 0;
//   for (itemPrice of order) {
//     total += itemPrice;
//   }
//   return total;
// }
// calculateTotalPrice([412, 371, 94, 63, 176]);

// iterate the array, find even numbers and make a new array with them
// function getEvenNumbers(start, end) {
//   const evenNumbers = [];
// for (let i = start; i <= end; i += 1) {
//   if (i % 2 === 0) {
//     evenNumbers.push(i)
//   }
// }
// return evenNumbers;
//   }
// getEvenNumbers(6, 12) returns [6, 8, 10, 12]

// find the first number between start and stop which % WO rest
// function findNumber(start, end, divisor) {
//   let number;
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       return number;
//       // break;
//     }
//   }
//   //console.log(number);
// }
// findNumber(16, 35, 7); // повертає 21
//
// iterate array and compare if include value (can't use .include method)
// function includes(array, value) {
//   for (let element of array) {
//     if (element === value) {
//       return true;
//     }
//   }
//   return false;
// }
// includes([1, 2, 3, 4, 5], 3); // returns true
// includes([1, 2, 3, 4, 5], 17);  // returns false

//Напишіть функцію copyArr(arr), яка копіює масив, не змінюючи оригінал.
// const vegetables = ['Капуста', 'Ріпа', 'Редиска', 'Морква'];
// function arrayClone(arr) {
//   return arr.slice();
// }
// const array = arrayClone(vegetables);
// console.log(array === vegetables);

// 2 методи створити рядок з масиву
// const vegetables = ['Капуста', 'Ріпа', 'Редиска', 'Морква'];

// let result = '';
// for (const vegetable of vegetables) {
//   result += vegetable + ', ';
// }
// console.log(result.slice(0, -2));
// // console.log(vegetables.join(', '));

// Напишіть функцію removeDuplicates(arr), яка повертає масив, у якому видалено
// повторювані елементи з масиву arr (ігноруйте чутливість до регістру).

// var arr = [
//   'php',
//   'php',
//   'css',
//   'css',
//   'script',
//   'script',
//   'html',
//   'html',
//   'java',
// ];
// function removeDuplicates(arr) {
//   const newArr = [];
//   for (const item of arr) {
//     if (!newArr.includes(item)) {
//       newArr.push(item);
//     }
//   }
//   return newArr;
// }

// version 2
// function removeDuplicates(arr) {
//   return [...new Set(arr)]; // Set - array WO duplicate
// }
// console.log(removeDuplicates(arr));

//Напишіть функцію, яка приймає
// рядок як аргумент та замінює регістр кожного символу на протилежний.
// Наприклад, якщо вводиться 'КоЖниЙ МиСлИВеЦЬ', то на виході повинен бути масив "КоЖниЙ МиСлИВеЦЬ".

// const str = 'КоЖниЙ МиСлИВеЦЬ';
// let result = '';
// // for (const letter of str) {
// //   if (letter.toUpperCase() === letter) {
// //     result += letter.toLowerCase();
// //   } else {
// //     result += letter.toUpperCase();
// //   }
// //   console.log(letter);
// // }

// console.log(result);

/*
 * Напиши функцію findLargestNumber(numbers)яка шукає найбільше число в масиві.
 */
// function findLargestNumber(numbers) {
//   //   return Math.max(...numbers); easyest way
//   let maxNumber = 0;
//   for (const number of numbers) {
//     if (number > maxNumber) {
//       maxNumber = number;
//     }
//   }
//   return maxNumber;
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

/*
 * Напишіть функцію calAverage() яка приймає довільну кількість аргументів і повертає їхнє середнє значення. Усі аргументи будуть лише числами.
 */

// function calAverage(...args) {
//   let result = 0;
//   for (const number of args) {
//     result += number;
//   }
//   return result / args.length;
// }
// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

/*
 * Напиши скрипт, який, для об'єкта user, послідовно:
 * додає поле mood зі значенням 'happy'
 * замінює значення hobby на 'skydiving'
 * замінює значення premium на false
 * виводить вміст об'єкта user у форматі ключ: значення використовуючи Object.keys() і for...of
 */

// const user = {
//   name: 'John',
//   age: 21,
//   hobby: 'css',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// let keys = Object.keys(user);
// for (const key of keys) {
//   console.log(key, user[key]);
// }

/*
 * У нас є об'єкт, у якому зберігаються зарплати нашої команди. Напишіть код для підсумовування всіх зарплат та збережіть результат у змінній sum. Повинно вийти 390. Якщо об'єкт salaries порожній, результат має бути 0.
 */

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;
// let values = Object.values(salaries);
// for (const value of values) {
//   sum += value;
// }
// console.log(sum);

// //Напишіть функцію, яка перевіряє, чи є елемент саме простим об'єктом, а не масивом, null тощо.
// function isPlainObject(param) {
//   return typeof param === 'object' && !Array.isArray(param) && param !== null; official mistake in JS!!!
// }
// console.log(isPlainObject({ a: 1 })); // true
// console.log(isPlainObject([])); // false
// console.log(isPlainObject(null)); // false
// console.log(isPlainObject(1)); // false
// console.log(isPlainObject(undefined)); // false

// Опис завдання: Напишіть функцію, яка повертає вкладений масив виду `[[key, value], [key, value]]`.
// Очікуваний результат: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]

// const data = { a: 1, b: 2 };

// function makePairs(obj) {
//   //   return Object.entries(obj); best versin
//   let result = [];
//   const keys = Object.keys(obj);
//   for (const key of keys) {
//     result.push([key], obj[key]);
//   }
//   return result;
// }

// console.log(makePairs(data)); // [['a', 1], ['b', 2]]

//Опис завдання: Напишіть функцію, яка повертає новий об'єкт без зазначених значень.
// Очікуваний результат: ({ a: 1, b: 2 }, 'b') => { a: 1 }

// home work!
// function without(obj, key) {
//   delete obj[key];
//   return obj;
// }

// const data = { a: 1, b: 2, c: 3 };
// console.log(without(data, 'b', 'c')); // { a: 1 } - how to delete b and c

// ------------- Tasks -----------
// 33 - compare numbers, if same - to new array
// function findMatches(array, ...args) {
//   const matches = []; // Don't change this line
//   for (const arg of args) {
//     if (array.includes(arg)) {
//       matches.push(arg);
//     }
//   }
//   // Change code above this line
//   // return matches;
//   console.log(matches);
// }
// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);

// - 35 - change the book
// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     this.books.splice(this.books.indexOf(oldName), 1, newName);
//   },
// };
// bookShelf.updateBook('Haze', 'Dungeon chronicles');
// console.log(bookShelf.books);

// - 39 - delete item
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   removePotion(potionName) {
//     this.potions.splice(this.potions.indexOf(potionName), 1);
//   },
// };

// module 3 autocheck - 41
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (Object.values(potion).includes(newPotion['name'])) {
//         return `Error! Potion ${newPotion['name']} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name === potionName) {
//         this.potions.splice(i, 1);
//         return;
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },

//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name === oldName) {
//         this.potions[i].name = newName;
//         return;
//       }
//     }
//   },
// };

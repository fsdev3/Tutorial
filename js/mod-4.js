// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Полі', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Ківі', score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Масив об'єктів з іменами Манго і Ківі

// // const worst = students.filter(student => student.score < LOW_SCORE);
// // console.log(worst); // Масив з одним об'єктом Аякс

// // // В колбек-функції зручно деструктуризувати властивості об'єкта
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(average); // Масив об'єктів з іменами Полі і Х'юстон

// // const best = students.filter(student => student.score >= HIGH_SCORE);

//
// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Полі', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Ківі', score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// // Назва акумулятора може бути довільною, це просто параметр функції
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);

// const averageScore = totalScore / students.length;
// console.log(averageScore.toFixed(0));

// -- 4 zadacha
// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     for (let pizza of this.pizzas) {
//       if (pizzaName === pizza) {
//         return onSuccess(pizzaName);
//       }
//     }
//     return onError(
//       `There is no pizza with a name ${pizzaName} in the assortment.`
//     );
//   },
// };

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

// mod 4 less 1 - arrow fi=unctions
// function each(array, callback) {
//   let newArray = [];
//   for (let item of array) {
//     newArray.push(callback(item));
//   }
//   return newArray;
// }

// let originalArray = [25, 42, 64, 81, 49];

// console.log(
//   'fn -20',
//   each(originalArray, value => value - 20)
// );

// console.log(
//   'fn *2',
//   each(originalArray, value => value * 2)
// );
// console.log(
//   'Korin ',
//   each(originalArray, value => Math.sqrt(value).toFixed(2))
// );

// console.log(each([1.3, 2.7, 11.5, 21.8, 4.9], value => Math.ceil(value)));

// refactoring to method forEach & arrows
// function logItems(items) {
//   console.log(items);
//   //   for (let i = 0; i < items.length; i += 1) {
//   //     console.log(`${i + 1} - ${items[i]}`);  old function
//   //   }
//   items.forEach((element, index) => console.log(`${index + 1} - ${element}`)); // new
// }

// logItems(['Mango', 'Kiwi', 'Lemon']);
// logItems([21, 34, 62, 104]);

// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   nameList.forEach((item, i) => {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   });

//   //   for (let i = 0; i < nameList.length; i += 1) {
//   //     console.log(`${nameList[i]}: ${phoneList[i]}`); old version
//   //   }
// }
// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

// refactoring
// function calculateAverage(...args) {
//   let total = 0;
//   args.forEach(item => {
//     total += item;
//   }); // new code
//   // for (let i = 0; i < args.length; i += 1) {
//   //   total += args[i];  old code
//   // }
//   return total / args.length;
// }

// console.log(calculateAverage(1, 2, 3, 4));
// console.log(calculateAverage(6, 22, 13, 34));
// Колбек-функція

// Change code below this line
// let totalPrice = 0;
// const calculateTotalPrice = orderedItems => {
//   orderedItems.forEach(item => (totalPrice += item));

//   return totalPrice;
// };
// // Change code above this line

// function changeEven(numbers, value) {
//   // Change code below this line
//   let newArray = [];

//   numbers.forEach(item => {
//     if (item % 2 === 0) {
//       newArray.push(item + value);
//       return;
//     }
//     newArray.push(item);
//   });
//   // return newArray;
//   console.log(newArray);
//   // Change code above this line
// }
// changeEven([1, 2, 3, 4, 5], 10); //` повертає новий масив `[1, 12, 3, 14, 5]`

// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planet.length());

// m4 z17
// const users = [
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//   },
// ];
// const getUserNames = users => users.map(user => user.name);

// console.log(getUserNames(users));

// zad 20
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction', 'mysticism'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism', 'adventure'],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter(
//   (genre, index, array) => array.indexOf(genre) === index
// );

// console.log(allGenres);
// console.log(uniqueGenres);

// zad 25
// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ];

// const getFriends = users =>
//   users
//     .flatMap(user => user.friends)
// .filter((friend, index, array) => array.indexOf(friend) === index); // V2 - one chain

// const allFriends = users.flatMap(user => user.friends); // V1
// const getFriends = (users, allFriends) =>
//   allFriends.filter((friend, index, array) => array.indexOf(friend) === index);

// console.log(allFriends);
// console.log(getFriends);

// const getActiveUsers = users =>
//   users
//     .flatMap(user => user.isActive)
//     .filter((user, index, array) => array.isActive === true);

// zad 26
// const getActiveUsers = users => users.filter(user => user.isActive); // true or !user.isActive - false array
// console.log(getActiveUsers(users));

// console.log(names(book.rating));
// console.log(getNamesSortedByFriendCount(users));

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

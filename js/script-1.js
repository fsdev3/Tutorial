// const x = 126;
// console.log(`price`, x);
//
// -methods!
// const shouldRenew = confirm('You want to buy?');
// console.log(shouldRenew); - true or false
//
// const quantity = prompt(`type quantity of products`);
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof `quantity`);
//
// const salary = 1200.234556;
// salary = Number(salary.toFixed(2));
// console.log(`your salary:`, salary);
//
// let base = prompt(`type number`);
// base = Number(base);
// console.log(base);
// let power = prompt(`type power`);
// power = Number(power);
// console.log(power);
// console.log(`your result`, base ** power);
//
// const min = 30;
// const max = 40;
// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result);
//
// const message = `This sentence contain 33 symbols.`;
// console.log(message.length);
//
// const firstName = `Vasia`;
// const lastName = `Pupkin`;
// const fullName = firstName + ` ` + lastName;
// console.log(`Hello`, fullName);
//
// let password = '';
// do {
//   password = prompt('Введите пароль длиннее 4-х символов', '');
// } while (password.length < 5);
// console.log('Ввели пароль: ', password);
//
// сума чисел до таргет
// const target = 36;
// let sum = 0;
// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }
// console.log(sum);
// --------------------------- як визвати скрипт до роботи!
// let totalSpent1 = 3000;
// let totalSpent2 = 8000;
// let totalSpent3 = 22000;
// let totalSpent4 = 36000;
// let totalSpent5 = 54000;
// let totalSpent6 = 12000;

// console.log(getDiscount(totalSpent1));
// console.log(getDiscount(totalSpent2));
// console.log(getDiscount(totalSpent3));
// console.log(getDiscount(totalSpent4));
// console.log(getDiscount(totalSpent5));
// console.log(getDiscount(totalSpent6));

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent < 5000) {
//     discount = BASE_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent < 20000) {
//     discount = BRONZE_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   }
//   // Change code above this line
//   return discount;
// }

//

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   switch (password) {
//     case null:
//       message = 'Canceled by user!';
//       break;

//     case ADMIN_PASSWORD:
//       message = 'Welcome!';
//       break;

//     default:
//       message = 'Access denied, wrong password!';
//   }

//   return message;
// }
// let password = `jqueryismyjam`;
// console.log(checkPassword(password));

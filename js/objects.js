// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };
// let totalFeedback = 0;
// const keys = Object.keys(feedback); // for iterate object keys
//console.log(keys);

// for (const key of keys) {
//   console.log(key);
//   console.log(feedback[key]);

//   //   console.log(key, feedback[key]); v2 output

//   totalFeedback += feedback[key];
// }

// console.log('Total Feedback: ', totalFeedback);

// const values = Object.values(feedback); // best for output object values!
// console.log(values);

// for (const value of values) {
//   console.log(value);

//   totalFeedback += value;
// }
// console.log('Total Feedback: ', totalFeedback);
// ----------------------------------

// const friends = [
//   { name: 'Kiwi', online: false },
//   { name: 'Poly', online: true },
//   { name: 'Ajax', online: true },
//   { name: 'Mango', online: false },
// ];
// console.table(friends);

// for (const friend of friends) {
//   //   console.table(friend);
//   friend.newprop = 333;
// }
// console.table(friends);

// compare and find the names:
// const findFriendByName = function (allFriends, friendName) {
//   for (const friend of friends) {
//     if (friend.name === friendName) {
//       return 'Found!!';
//     }
//   }
//   return 'Not Found!!';
// };
// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

// need to get all names
// const getAllNames = function (allFriends) {
//   let foundName = []; // creating the new array
//   for (const friend of allFriends) {
//     console.log(friend.name);
//     foundName.push(friend.name); // push name to new array
//   }
//   return foundName;
// };
// console.log(getAllNames(friends)); // call function, send argument

// get all friends who is online
// const getOnlineFriends = function (allFriends) {
//   const isOnline = [];
//   for (const friend of allFriends) {
//     if (friend.online) {
//       isOnline.push(friend);
//     }
//   }
//   return isOnline;
// };
// console.log(getOnlineFriends(friends));

// get all friends who is online - return objects
// const getFriendsStatus = function (allFriends) {
//   const friendsByStatus = {
//     online: [],
//     offline: [],
//   };
//   for (const friend of allFriends) {
//     if (friend.online) {
//       friendsByStatus.online.push(friend);
//       continue; // !!
//     }
//     friendsByStatus.offline.push(friend);
//   }
//   return friendsByStatus;
// };
// console.log(getFriendsStatus(friends));

// count object keys
// const obj = {
//   a: 2,
//   b: 43,
//   c: 21,
//   d: 5,
// };
// console.log(Object.keys(obj).length);

// iterate object and create 2 arrays with keys and values
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

// count quantity of Own Property
// function countProps(object) {
//   let propCount = 0;
//   for (let key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   return propCount;
// }

// get arrays keys and values
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (let key of keys) {
//   values.push(apartment[key]); push key value to array
// }
// console.log([keys]);
// console.log([values]);

// count and return quantity of properties in object
// function countProps(object) {
//   const propCount = Object.keys(object);
//   // return propCount.length;
//   console.log(propCount.length);
// }
// countProps({ name: 'Mango', age: 2 });

// count total salary
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   for (const value of Object.values(salaries)) {
//     totalSalary += value;
//   }
//   return totalSalary;
// }
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });

// iterate objects and create 2 arrays
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];
// const hexColors = [];
// const rgbColors = [];
// for (let color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// check the name if found, return price, if no - null
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];
// function getProductPrice(productName) {
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
// }
// getProductPrice('Scanner');

// iterate and create arrays. if no such key - return empty array
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const productValue = [];
//   for (const product of products)
//     if (product.hasOwnProperty([propName])) {
//       productValue.push(product[propName]);
//     }
//   return productValue;
// }
// getAllPropValues('name');
// getAllPropValues('category');

// calc total price
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];
// function calculateTotalPrice(productName) {
//   let totalPrice = 0;
//   for (const product of products) {
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
//     }
//   }
//   return totalPrice;
// }
// calculateTotalPrice('Radar');

// ------------- DESTRUCTURIZATION ---------------
// destr of array
// const authors = {
//   kivi: 4,
//   poly: 6,
//   ajax: 7,
//   mango: 8,
// };

// const entries = Object.entries(authors);
// // first top!! ->
// for (const [name, rating] of entries) {
//   //   const [name, rating] = entry; // l2 little better
//   //   const name = entry[0]; l3 not good
//   //   const rating = entry[1];
//   console.log(name, rating);
// }

// ------------ cart  Repeta  Modul3 les6 1:41 destruct Cart
// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }
//     const newProduct = {
//       ...product,
//       quantity: 1,
//     }; // raspilenie
//     this.items.push(newProduct);
//   },
//   remove(productName) {
//     const { items } = this; // destruct 'this' in next 2 strings
//     for (let i = 0; i < items.length; i += 1) {
//       const item = items[i]; // destruct "item" to {name}, next string "item.name" to "name"
//       if (productName === item.name) {
//         console.log('product found! ', productName);
//         console.log('index ', i);
//         items.splice(i, 1);
//       }
//     }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     const { items } = this;
//     let totalPrice = 0;
//     for (const { price, quantity } of items) {
//       totalPrice += price * quantity;
//     }
//     return totalPrice;
//   },
//   increaseQuantity(productName) {},
//   decreaseQuantity(productName) {},
// };
// console.log(cart.getItems());

// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'mango', price: 80 });
// cart.add({ name: 'kiwi', price: 30 });
// cart.add({ name: 'kiwi', price: 30 });
// cart.add({ name: 'orange', price: 70 });

// console.table(cart.getItems());
// console.log('total ', cart.countTotalPrice());
// cart.remove('mango');
// console.table(cart.getItems());
// cart.clear();
// console.log(cart.getItems());

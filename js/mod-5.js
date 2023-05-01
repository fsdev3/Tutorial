// const Car = function ({ brand, model, price } = {}) {
//   //   2. function will call in context new obj (myCar, myCar2...) --  = {} - default empty obj necessary
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
//   // 3. into property this.__proto__ writing link to Car.prototype - it is Prototype of new obj
//   // 4. link will go back to new Car
// };

// Car.prototype.sayHi = function () {
//   console.log('Car.prototype.sayHi -> this', this);
// };

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };
// // 1. call function thru new Car -> will create empty object
// const myCar = new Car({ brand: 'audi', model: 'q5', price: 35000 });
// console.log(myCar);

// const myCar2 = new Car({ brand: 'bmw', model: 'x5', price: 75000 });
// console.log(myCar2);

// const myCar3 = new Car({ brand: 'mercedes', model: 's600', price: 150000 });
// console.log(myCar3);

// myCar.changePrice(30000);
// console.log(myCar);

// zad 10
// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     this.items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     let idxToRemove = this.items.indexOf(itemToRemove);
//     this.items.splice(idxToRemove, 1);
//   }
// }
// // Change code above this line
// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// zad 11
class StringBuilder {
  constructor(initialValue) {
    this.value = initialValue;
  }
  getValue() {
    return this.value;
  }

  padEnd(str) {
    this.value += str;
  }

  padStart(str) {
    this.value = str + this.value;
  }

  padBoth(str) {
    this.value = str + this.value + str;
  }
}

// Change code above this line
const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="

const Car = function ({ brand, model, price } = {}) {
  //   2. function will call in context new obj (myCar, myCar2...)
  this.brand = brand;
  this.model = model;
  this.price = price;
  // 3. into property this.__proto__ writing link to Car.prototype - it is Prototype of new obj
  // 4. link will go back to new Car
};

Car.prototype.sayHi = function () {
  console.log('Car.prototype.sayHi -> this', this);
};

Car.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};
// 1. call function thru new Car -> will create empty object
const myCar = new Car({ brand: 'audi', model: 'q5', price: 35000 });
console.log(myCar);

const myCar2 = new Car({ brand: 'bmw', model: 'x5', price: 75000 });
console.log(myCar2);

const myCar3 = new Car({ brand: 'mercedes', model: 's600', price: 150000 });
console.log(myCar3);

myCar.changePrice(30000);
console.log(myCar);

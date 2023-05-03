'use strict';
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
// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }
//   getValue() {
//     return this.value;
//   }

//   padEnd(str) {
//     this.value += str;
//   }

//   padStart(str) {
//     this.value = str + this.value;
//   }

//   padBoth(str) {
//     this.value = str + this.value + str;
//   }
// }

// // Change code above this line
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="

// mod 5 les 2 z1
// class User {
//   constructor({ name, age, numberOfPost = 0, topics = [] }) {
//     this.name = name;
//     this.age = age;
//     this.numberOfPost = numberOfPost;
//     this.topics = topics;
//   }
//   getInfo() {
//     return `User ${this.name} is ${this.age} years old and has ${this.numberOfPost} posts`;
//   }
//   addPostCount(value) {
//     this.numberOfPost += value;
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   age: 27,
//   numberOfPost: 21,
//   topics: ['tech', 'cooking'],
// });

// console.log('mango', mango);
// console.log(mango.addPostCount(11));
// console.log(mango.getInfo());

// z2
// class User {
//   static Gender = {
//     Male: 'm',
//     Female: 'f',
//   };
//   #birthDate;
//   #email;
//   constructor({ firstName, lastName, email, gender, birthDate }) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.#email = email;
//     this.gender = gender; // 'm' or 'f'
//     this.#birthDate = birthDate;
//   }
//   get fullName() {
//     console.log('hey Im ');
//     return this.firstName + ' ' + this.lastName;
//   }
//   get birthDate() {
//     // v1 was "m" , v2 User.Gender.Male
//     if (this.gender === User.Gender.Male) {
//       return this.#birthDate;
//     }
//     return this.#birthDate.substring(0, 6) + 2005;
//   }
//   get email() {
//     console.log('get my email');
//     return this.#email;
//   }
//   set email(value) {
//     if (value.includes('@')) {
//       console.log('set my email');

//       this.#email = value;
//     } else {
//       console.error('invalid email');
//     }
//   }
// }
// let dima = new User({
//   firstName: 'Dima',
//   lastName: 'Evan',
//   email: 'ygerxiuwg@mail.com',
//   gender: User.Gender.Male,
//   birthDate: '17.03.1997',
// });
// let vika = new User({
//   firstName: 'Vika',
//   lastName: 'Lot',
//   gender: User.Gender.Female,
//   birthDate: '17.03.1987',
// });
// console.log(dima);
// console.log(dima.fullName);
// console.log(vika);
// console.log(vika.birthDate);

// z3
// class Note {
//   static Priority = {
//     LOW: 'low',
//     NORMAL: 'normal',
//     HIGH: 'high',
//   };

//   constructor(text, priority) {
//     this.text = text;
//     this.priority = priority;
//     this.createdAt = new Date();
//     this.id = Math.round(Math.random() * 1000000);
//   }

//   update({ text, priority }) {
//     if (text) {
//       this.text = text;
//     }
//     if (priority) {
//       this.priority = priority;
//     }
//   }
// }
// // console.dir(Note); // .log, .dir, .table
// class Notes {
//   constructor(name, items = []) {
//     this.name = name;
//     this.items = items;
//   }
//   addNote({ text, priority }) {
//     let newNote = new Note(text, priority);
//     // console.log('newNote', newNote);
//     this.items.push(newNote);
//   }
//   removeNote(noteId) {
//     let noteIndex = this.items.findIndex(note => note.id === noteId);
//     if (noteIndex > -1) {
//       this.items.splice(noteIndex, 1);
//     }
//   }
//   updateNote(noteId, noteValue) {
//     let note = this.items.find(note => note.id === noteId);
//     if (note) {
//       note.update(newValue);
//     }
//   }
// }

// const myNotes = new Notes('Recipes');
// // console.dir(myNotes);
// myNotes.addNote({
//   text: 'My first note',
//   priority: Note.Priority.NORMAL,
// });

// myNotes.addNote({
//   text: 'My second note',
//   priority: Note.Priority.LOW,
// });
// myNotes.addNote({
//   text: 'My third note',
//   priority: Note.Priority.HIGH,
// });
// myNotes.updateNote(123123, {
//   text: 'My third note',
//   //priority: Note.Priority.HIGH,
// });
// console.log(myNotes);

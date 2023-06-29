// const colorPalette = document.querySelector('.color-palette');
// const output = document.querySelector('.output');

// colorPalette.addEventListener('click', selectColor);

// // This is where delegation «magic» happens
// function selectColor(event) {
//   if (event.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   const selectedColor = event.target.dataset.color;
//   output.textContent = `Selected color: ${selectedColor}`;
//   output.style.color = selectedColor;
// }

// // Some helper functions to render palette items
// createPaletteItems();

// function createPaletteItems() {
//   const items = [];
//   for (let i = 0; i < 60; i++) {
//     const color = getRandomColor();
//     const item = document.createElement('button');
//     item.type = 'button';
//     item.dataset.color = color;
//     item.style.backgroundColor = color;
//     item.classList.add('item');
//     items.push(item);
//   }
//   colorPalette.append(...items);
// }

// function getRandomColor() {
//   return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
// }

// function getRandomHex() {
//   return Math.round(Math.random() * 256)
//     .toString(16)
//     .padStart(2, '0');
// }
// 1. Оголошення параметрів x, y, z
// Will run first
// Change value of isSuccess variable to call resolve or reject
// Оголошення функції (function declaration)

// function isIsogram(str) {
//   let array = str.toLowerCase().split('');
//   console.log(array);
//   const newArray = array.filter(
//     (value, index, arr) => arr.indexOf(value) === index
//   );
//   console.log(newArray);
//   if (array.length === newArray.length) {
//     return true;
//   }
//   return false;
// }

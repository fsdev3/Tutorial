'use strict';
// //

const bodyEl = document.getElementById('root');

// const technologies = ['HTML', 'CSS', 'JS', 'React', 'NODE'];

// let technologiesEl = document.createElement('ul');
// bodyEl.append(technologiesEl);

// let technologiesMarkup = technologies
//   .map(technology => `<li>${technology}</li>`)
//   .join('\n');
// technologiesEl.innerHTML = technologiesMarkup;
// console.log(technologiesMarkup);
//

// const colors = [
//   {
//     label: 'red',
//     color: '#FF0000',
//   },
//   {
//     label: 'green',
//     color: '#00FF00',
//   },
//   {
//     label: 'blue',
//     color: '#0000FF',
//   },
//   {
//     label: 'yellow',
//     color: '#FFFF00',
//   },
// ];
// // V1
// const colorsButtons = colors.map(color => {
//   let colorButton = document.createElement('button');
//   colorButton.textContent = color.label;
//   colorButton.style.backgroundColor = color.color;
//   return colorButton;
// });
// bodyEl.append(...colorsButtons);

// // V2

// colors
//   .map(color => {
//     let colorButton = document.createElement('button');
//     colorButton.textContent = color.label;
//     colorButton.style.backgroundColor = color.color;
//     return colorButton;
//   })
//   .forEach(btn => bodyEl.append(btn));

// // V3
// colors.forEach(color => {
//   let colorButton = document.createElement('button');
//   colorButton.textContent = color.label;
//   colorButton.style.backgroundColor = color.color;
//   bodyEl.append(colorButton);
// });

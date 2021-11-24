// - створити функцію яка обчислює та повертає площу прямокутника

// const s = (a, b) => a * b;
//
// console.log((function (arr) {
//     return a * b;
// }(arr)));

// - створити функцію яка обчислює та повертає площу кола

// const s = (r) => r * r * Math.PI;
// console.log(s(2));
//
// console.log((function (r) {
//     return r * r * Math.PI
// }(2)));

// - створити функцію яка обчислює та повертає площу циліндру

// const s = (h, r) => 2 * Math.PI * r * (r + h);
// console.log(s(4,2));
//
// console.log((function (h,r) {
//     return 2 * Math.PI * r * (r + h)
// }(4,2)));

// - створити функцію яка приймає масив та виводить кожен його елемент

// const arr = [1, 2, 3, 4, 5];
// const log = (arr) => arr.forEach(el => console.log(el));
// log(arr);
//
// (function (arr) {
//     arr.forEach(el => console.log(el))
// }(arr));

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// const createParagraph = (text) => document.write(`<p>${text}</p>`);
// createParagraph('Hello world');
//
// (function (text) {
//     document.write(`<p>${text}</p>`)
// }('Hello world'));

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// const list = (text) => document.write(`<ul>
//                         <li>${text}</li>
//                         <li>${text}</li>
//                         <li>${text}</li>
//                     </ul>`);
// const createList = (text) => {
//     list(text);
// }
// createList('Hello');
//
// (function (text) {
//     list(text);
// }('Hello'));

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// const array = [1, false, '2', true];
//
// const createList = (arr) => {
//     const newUl = document.createElement("ul");
//     arr.forEach(el => {
//         const newLi = document.createElement("li");
//         newLi.innerText = el;
//         newUl.appendChild(newLi);
//     });
//     document.body.appendChild(newUl);
// }
// createList(array);
//
// (function (arr, callback) {
//     callback(arr);
// }(array, createList));

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// const arrObj = [
//     {
//         id: 1,
//         name: 'Oleh',
//         age: 29
//     },
//     {
//         id: 2,
//         name: 'Ivan',
//         age: 27
//     },
//     {
//         id: 3,
//         name: 'Sergei',
//         age: 30
//     }
// ];
//
// const createBlock = (arr) => {
//     arr.forEach(el => {
//         const newDiv = document.createElement("div");
//         const newP = document.createElement("p");
//         newP.innerText = `{
//                 id: ${el.id},
//                 name: ${el.name},
//                 age: ${el.age}
//             },`;
//         newDiv.appendChild(newP);
//         document.body.appendChild(newDiv);
//     });
// }
// createBlock(arrObj);
//
// (function (arr, callback) {
//     callback(arr);
// }(arrObj, createBlock));







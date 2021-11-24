// Всі функції повинні бути описані стрілочним типом, та selfinvoke!!!!

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// const minNumber = (a, b, c) => {
//     let min;
//     if (a < b && a < c) {
//         min = a;
//     } else if (b < a && b < c) {
//         min = b;
//     } else {
//         min = c;
//     }
//     return min;
// }
// console.log(minNumber(2, 3, 1));
//
// console.log((function (a, b, c, callback) {
//     return callback(a, b, c);
// }(2, 3, 1, minNumber)));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// const maxNumber = (a, b, c) => {
//     let max;
//     if (a > b && a > c) {
//         max = a;
//     } else if (b > a && b > c) {
//         max = b;
//     } else {
//         max = c;
//     }
//     return max;
// }
//
// console.log(maxNumber(2, 3, 1));
//
// console.log((function (a, b, c, callback) {
//     return callback(a, b, c);
// }(2, 3, 1, maxNumber)));

// - створити функцію яка повертає найбільше число з масиву

// const numbers = [10, 2, 18, 4, 15, 6, 2, 8, 4];
//
// const maxNum = (arr) => {
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(maxNum(numbers));
//
// console.log((function (arr, callback) {
//     return callback(arr);
// }(numbers, maxNum)));

// - створити функцію яка повертає найменьше число з масиву

// const numbers = [10, 2, 18, 4, 15, 6, 2, 8, 4];
//
// const minNum = (arr) => {
//     let min = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     return min;
// }
// console.log(minNum(numbers));
//
// console.log((function (arr, callback) {
//     return callback(arr);
// }(numbers, minNum)));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// const numbers = [10, 2, 18, 4, 15, 6, 2, 8, 4];
//
// const sum = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//        sum+= arr[i];
//     }
//     return sum;
// };
// console.log(sum(numbers));
//
// console.log((function (arr, callback) {
//     return callback(arr);
// }(numbers, sum)));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// const numbers = [10, 2, 18, 4, 15, 6, 2, 8, 4];
//
// const average = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// };
//
// console.log(average(numbers));
//
// console.log((function (arr, callback) {
//     return callback(arr);
// }(numbers, average)));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// const minMax = (...numbers) => {
//     let min = numbers[0];
//     let max = numbers[0];
//
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] > max) {
//             max = numbers[i];
//         } else if (numbers[i] < min) {
//             min = numbers[i];
//         }
//     }
//     console.log(min);
//     return max;
// }
//
// console.log(minMax(15, 22, 8, 17, 22));
//
// console.log((function (callback, ...numbers) {
//     return callback(...numbers);
// }(minMax,15, 22, 8, 17, 22)));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// const newArr = [];
//
// const randomArr = (arr) => {
//     const length = 10
//     for (let i = 0; i < length; i++) {
//         arr[i] = Math.round(Math.random()*100);
//     }
//     console.log(arr);
// }
//
// randomArr(newArr);
//
// (function (arr, callback) {
//     return callback(arr);
// }(newArr, randomArr));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// const newArr = [];
//
// const randomArr = (arr, limit) => {
//     const length = 10
//     for (let i = 0; i < length; i++) {
//         arr[i] = Math.round(Math.random() * limit);
//     }
//     console.log(arr);
// }
// randomArr(newArr, 10);
//
// (function (arr, limit, callback) {
//      callback(arr, limit);
// }(newArr, 8, randomArr));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// const numbers = [10, 2, 18, 4, 15, 6, 2, 8, 4];
//
// const reverse = (arr) => {
//     let newArr = [];
//     for (let i = arr.length -1;i >= 0; i--) {
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }
// console.log(reverse(numbers));
//
// console.log((function (arr, callback) {
//      return  callback(arr);
// }(numbers, reverse)));
// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :

// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
// const mainHeader = document.getElementById('main_header');
// mainHeader.innerText = 'SEPT-2021-FULLSTACK';
// mainHeader.classList.add('sep-2021');

// b) робить шириниу елементу ul 400px
// const ul = document.getElementsByTagName('ul');
// ul[0].classList.add('ul-400');

// c) робить шириниу всіх елементів з класом linkList шириною 50%
// const linkList = document.getElementsByClassName('linkList');
// for (let linkListElement of linkList) {
//     linkListElement.classList.add('w50');
// }

// d) отримує текст який зберігається в елементі з класом listElement2
// const listElement2 = document.querySelector('.listElement2');
// const listElement2Text = listElement2.textContent;
// console.log(listElement2Text);

// e) отримує всі елементи li та змінює ім колір фону на сірий
// const liList = document.getElementsByTagName('li');
// for (let liListElement of liList) {
//     liListElement.classList.add('li-background');
// }

// f) отримує всі елементи 'a' та додає їм клас anchor
// const aList = document.getElementsByTagName('a');
//
// for (let a of aList) {
//     a.classList.add('anchor');
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// const aList = document.getElementsByTagName('a');
// for (let a of aList) {
//     if (a.textContent === 'link3') {
//         a.classList.add('font-size40');
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// const aList = document.getElementsByTagName('a');
// for (let a of aList) {
//         a.classList.add(`element_${a.textContent}`);
// }


// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// const subHeader = document.querySelectorAll('.sub-header');
// const color = prompt('Введіть колір');
// for (let subHeaderElement of subHeader) {
//     subHeaderElement.style.backgroundColor = color;
// }


// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// const subHeader = document.querySelectorAll('.sub-header');
// const color = prompt('Введіть колір');
// for (let subHeaderElement of subHeader) {
//     if (subHeaderElement.textContent === 'content 2 segment') {
//         subHeaderElement.style.backgroundColor = color;
//     }
// }


// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// const contentOne = document.querySelector('.content_1');
// const text = prompt('Введіть текст для content 1');
// contentOne.textContent = text;


// l) отримати елементи p та змінити їм padding на 20px
// const pList = document.getElementsByTagName('p');
// for (let pListElement of pList) {
//     pListElement.classList.add('padding20');
// }


// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// const textTwoList = document.querySelectorAll('.text2');
// for (let textTwoListElement of textTwoList) {
//     textTwoListElement.classList.add('sep-2021');
// }







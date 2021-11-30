// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
const content = document.getElementById('content');
const contentText = content.textContent;
// console.log(contentText);


// -- отримує текст з блоку з id "rules"
const rules = document.getElementById('rules');
const rulesText = rules.textContent;

// -- замініть текст параграфа з id 'content' на будь-який інший
content.textContent = 'Hello Okten!)';

// -- замініть текст параграфа з id 'rules' на будь-який інший
rules.textContent = 'Hello Okten!)';

// -- змініть кожному елементу колір фону на червоний
for (let child of document.body.children) {
    child.classList.add('background-color');
}

// -- змініть кожному елементу колір тексту на синій
for (let child of document.body.children) {
    child.classList.add('text-color-blue');
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

for (let rulesArrayElement of rules.classList) {
    console.log(rulesArrayElement);
}

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
const fcRules = document.getElementsByClassName('fc_rules');

for (let fcRule of fcRules) {
    fcRule.classList.add('text-color-red');
}











// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// const body = document.body;
//
// ['form1', 'form2'].forEach((item,i) => {
//     const form = document.createElement('form');
//     form.name = item;
//
//     const input1 = document.createElement('input');
//     input1.name = `input${i +1}${i +1}`;
//     const input2 = document.createElement('input');
//     input2.name = `input${i + 1}${i + 2}`;
//
//     form.appendChild(input1);
//     form.appendChild(input2);
//
//     body.appendChild(form);
// });
//
// const btn = document.createElement('button');
// btn.innerText = 'Отримати данні з форм до консолі';
// btn.classList.add('btn');
//
// btn.addEventListener('click', () => {
//     console.log(`
//         Form 1:
//             input 1: ${document.forms.form1.input11.value}
//             input 2: ${document.forms.form1.input12.value}
//         Form 2:
//             input 1: ${document.forms.form2.input22.value}
//             input 2: ${document.forms.form2.input23.value}
//     `);
// });
//
// body.appendChild(btn);


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// const body = document.body;
//
// const form = document.createElement('form');
// form.name = 'rootForm';
//
// ['row','columns','content'].forEach(item => {
//    const input = document.createElement('input');
//     input.name = item;
//     input.placeholder = item;
//
//     form.appendChild(input);
// });
//
// const btn = document.createElement('button');
// btn.innerText = 'Створити табличку';
//
// form.appendChild(btn);
// body.appendChild(form);
//
// form.onsubmit = (e) => {
//     e.preventDefault();
//
//     const row = +form.row.value;
//     const columns = +form.columns.value;
//     const content = form.content.value;
//
//     const table = document.createElement('table');
//
//     for (let i = 0; i < row; i++) {
//         let tr = document.createElement('tr');
//         for (let j = 0; j < columns; j++) {
//             let td = document.createElement('td');
//             td.innerText = content;
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
//
//     body.appendChild(table);
// }

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// const body = document.body;
//
// const badWord = ['Корона', 'Прививка', 'Вакцинація', 'Карантин'];
//
// const input = document.createElement('input');
// input.type = 'text';
// input.placeholder = 'введіть погане слово';
//
// const btn = document.createElement('button');
// btn.innerText = 'Перевірити слово';
//
// body.appendChild(input);
// body.appendChild(btn);
//
// btn.addEventListener('click', () => {
//     badWord.forEach(word => {
//         if (word.toLowerCase() === input.value.toLowerCase()) {
//             alert('Попередження!')
//         }
//     })
// })

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// const badWord = ['Корона', 'Прививка', 'Вакцинація', 'Карантин'];
//
// const body = document.body;
//
// const input = document.createElement('input');
// input.type = 'text';
// input.placeholder = 'введіть речення';
//
// const btn = document.createElement('button');
// btn.innerText = 'Перевірити речення';
//
// body.appendChild(input);
// body.appendChild(btn);
//
// btn.addEventListener('click', () => {
//     badWord.forEach(word => {
//         if (input.value.toLowerCase().includes(word.toLowerCase())) {
//             alert('Попередження!');
//         }
//     })
// })














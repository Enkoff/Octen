// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// const body = document.body;
//
// const div = document.createElement('div');
// div.id = 'text';
// div.innerText = 'element';
// div.classList.add('element');
//
// body.appendChild(div);
//
// const button = document.createElement('button');
// button.innerText = 'click me';
// button.classList.add('btn');
// body.appendChild(button);
//
// button.addEventListener('click', () => {
//     div.classList.toggle('d-none');
// });

//  - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// const body = document.body;
//
// const button = document.createElement('button');
// button.innerText = 'click me';
// button.classList.add('btn');
//
// body.appendChild(button);
//
// button.addEventListener('click', () => {
//     button.classList.add('d-none');
// });

// - Cтворити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// const body = document.body;

// body.style.display = 'flex';
// body.style.flexDirection = 'column';
// body.style.width = '200px';
//
// const input = document.createElement('input');
// input.placeholder = 'Введіть свій вік';
// input.id = 'age';
//
// body.appendChild(input);
//
// const button = document.createElement('button');
// button.innerText = 'Підтвердити вік !';
// button.classList.add('btn');
//
// body.appendChild(button);
//
// button.addEventListener('click', () => {
//     const number = Number(input.value);
//
//     if (isNaN(number) || number === 0) {
//         alert('введіть число');
//     } else if (number <= 17) {
//         alert('ваш вік меньше 18');
//     } else  {
//         alert('ваш вік підходить вітаю !)');
//     }
// });


// - Создайте меню, которое раскрывается/сворачивается при клике

// const body = document.body;
//
// const menu = document.createElement('div');
// menu.classList.add('menu');
// menu.innerText = 'мeню';
//
// body.appendChild(menu);
//
//
// const ul = document.createElement('ul');
// ul.classList.add('d-none');
//
// ['Головна','Курси','Про нас','Контакти'].forEach(el => {
//     const li = document.createElement('li');
//     li.innerText = el;
//     ul.appendChild(li);
// })
//
// body.appendChild(ul);
//
// menu.addEventListener('click', () => {
//     ul.classList.toggle('d-none');
// });


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

// const comments = [
//     {
//         title: 'Клментар 1',
//         body: 'Опис коментара a'
//     },
//     {
//         title: 'Клментар 2',
//         body: 'Опис коментара a Опис коментара b'
//     },
//     {
//         title: 'Клментар 3',
//         body: 'Опис коментара a Опис коментара b Опис коментара c'
//     },
//     {
//         title: 'Клментар 4',
//         body: 'Опис коментара a Опис коментара b Опис коментара c Опис коментара d'
//     },
//     {
//         title: 'Клментар 5',
//         body: 'Опис коментара a Опис коментара b Опис коментара c Опис коментара d Опис коментара e'
//     }
// ];
//
// const body = document.body;
//
// const root = document.createElement('div');
// root.classList.add('root');
//
// comments.forEach((item, i) => {
//     const div = document.createElement('div');
//     div.innerText = item.title;
//     div.classList.add('comment');
//     div.id = `comment ${i + 1}`;
//
//     const itemBody = document.createElement('div');
//     itemBody.id = `body ${i + 1}`;
//     itemBody.classList.add('item__body');
//     itemBody.innerText = item.body;
//
//     root.appendChild(div);
//     root.appendChild(itemBody);
// });
//
// body.appendChild(root);
//
// const commentsAll = document.querySelectorAll('.comment');
// const itemBodyAll = document.querySelectorAll('.item__body');
//
// commentsAll.forEach(comment => {
//     comment.addEventListener('click', (e) => {
//         const length = e.path[0].id.length;
//         const commentId = e.path[0].id[length - 1];
//
//         itemBodyAll.forEach(body => {
//             const length = body.id.length;
//             const bodyId = body.id[length - 1];
//             if (commentId === bodyId) {
//                 body.classList.toggle('d-none');
//             }
//         })
//     })
// })









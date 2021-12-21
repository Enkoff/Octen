// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули
//
// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)

const body = document.body;

const h1 = document.createElement('h1');
h1.innerText = 'Mini Project';
h1.classList.add('project__title');

const usersWrapper = document.createElement('div');
usersWrapper.classList.add('users__wrapper');

body.append(h1, usersWrapper);

fetch('https://jsonplaceholder.typicode.com/users').then(users => users.json()).then(users => {
    users.forEach(user => {
        const userBlock = document.createElement('div');
        userBlock.classList.add('user__box');

        const id = document.createElement('div');
        id.innerText = `id: ${user.id}`

        const userName = document.createElement('div');
        userName.innerText = `name: ${user.name}`;

        const a = document.createElement('a');
        a.href = `user-details.html?userId=${user.id}`;
        a.innerText = 'user details';
        a.classList.add('link__btn');

        userBlock.append(id, userName, a);
        usersWrapper.appendChild(userBlock);
    })
});
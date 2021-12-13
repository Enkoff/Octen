// є масив -
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

const body = document.body;

users.forEach(user => {
    const div = document.createElement('div');
    div.innerText = `name: ${user.name} age: ${user.age} status: ${user.status}`;
    div.style.margin = '10px';

    const btn = document.createElement('button');
    btn.innerText = 'додати до улюблених';
    btn.style.marginLeft = '10px';

    btn.addEventListener('click', () => {
        if (localStorage.getItem('favorites') === null) {
            localStorage.setItem('favorites', JSON.stringify([user]));
        } else {
            const favorites = JSON.parse(localStorage.getItem('favorites'));
            const check = favorites.find(u => {
                return u.name === user.name && u.age === user.age;
            });

            if (check === undefined) {
                favorites.push(user);
                localStorage.setItem('favorites', JSON.stringify(favorites));
            }
        }
    })
    div.appendChild(btn);

    body.append(div);
})

const nextPageBtn = document.createElement('button');
nextPageBtn.classList.add('next__page_btn')
nextPageBtn.innerText = 'Go to favorites page';

nextPageBtn.onclick = () => {
    window.location.href = 'favorites.html';
}

body.append(nextPageBtn);




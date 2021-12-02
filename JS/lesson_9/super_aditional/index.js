// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];

let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];


// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

// const usersCopy = JSON.parse(JSON.stringify(users));
// console.log(usersCopy);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

// const div = document.createElement('div');
//
// users.forEach(obj => {
//     const userBlock = document.createElement('div');
//     userBlock.innerText = `
//         name: ${obj.name}
//         age: ${obj.age}
//         status: ${obj.status}
//         address:
//             - city: ${obj.address.city}
//             - country: ${obj.address.country}
//             - street: ${obj.address.street}
//             - houseNumber: ${obj.address.houseNumber}
//     `;
//     userBlock.classList.add('wrapper');
//     div.appendChild(userBlock);
// });
//
// document.body.appendChild(div);


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

// const userDiv = document.createElement('div');
//
// users.forEach(user => {
//     const userBlock = document.createElement('div');
//     userBlock.classList.add('wrapper');
//
//     for (let userKey in user) {
//         if (userKey !== 'address') {
//             const box = document.createElement('div');
//             box.innerText = `${userKey}: ${user[userKey]}`;
//             box.classList.add('box');
//             userBlock.appendChild(box);
//         } else {
//             const address = document.createElement('div');
//             address.classList.add('box');
//             address.innerText = `
//              address:
//              - city: ${user.address.city}
//              - country: ${user.address.country}
//              - street: ${user.address.street}
//              - houseNumber: ${user.address.houseNumber}
//             `;
//             userBlock.appendChild(address);
//         }
//     }
//
//     userDiv.appendChild(userBlock);
// });
//
// document.body.appendChild(userDiv);


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// const userDiv = document.createElement('div');
//
// users.forEach(user => {
//     const userBlock = document.createElement('div');
//     userBlock.classList.add('wrapper');
//
//     for (let userKey in user) {
//         if (userKey !== 'address') {
//             const box = document.createElement('div');
//             box.innerText = `${userKey}: ${user[userKey]}`;
//             box.classList.add('box');
//             userBlock.appendChild(box);
//         } else {
//             const addressUl = document.createElement('ul');
//             addressUl.innerText = 'ADDRESS:';
//             addressUl.classList.add('box');
//
//             for (let addressKey in user.address) {
//                 const addressLi = document.createElement('li');
//                 addressLi.innerText = `${addressKey}: ${user.address[addressKey]}`;
//                 addressLi.classList.add('box');
//                 addressUl.appendChild(addressLi);
//             }
//
//             userBlock.appendChild(addressUl);
//         }
//     }
//
//     userDiv.appendChild(userBlock);
// });
//
// document.body.appendChild(userDiv);


// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

//СКРИПТ ЗНАХОДИТЬСЯ В rules.html

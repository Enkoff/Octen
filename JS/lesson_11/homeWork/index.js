// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

// const body = document.body;
//
// const form = document.createElement('form');
// form.name = 'rootForm';
//
// ['model', 'type', 'volume'].forEach(item => {
//     const input = document.createElement('input');
//     input.name = item;
//     input.type = 'text';
//     input.placeholder = `Enter ${item}`;
//     input.id = item;
//
//     form.appendChild(input);
// });
//
// const btn = document.createElement('button');
// btn.innerText = 'Відправити форму';
//
// form.appendChild(btn);
// body.appendChild(form);
//
// form.onsubmit = (e) => {
//     e.preventDefault();
//     const model = document.getElementById('model').value;
//     const type = document.getElementById('type').value;
//     const volume = document.getElementById('volume').value;
//
//     const checkFields = () => {
//         if (model && type && volume) {
//             return true;
//         } else {
//             alert('Всі поля поинні бути заповнені');
//         }
//     }
//
//     if (localStorage.getItem('carArray') === null) {
//         if (checkFields()) {
//             localStorage.setItem('carArray', JSON.stringify([{model, type, volume}]));
//         }
//     } else {
//         if (checkFields()) {
//             const carArray = JSON.parse(localStorage.getItem('carArray'));
//             carArray.push({model, type, volume});
//             localStorage.setItem('carArray', JSON.stringify(carArray));
//         }
//     }
// }

// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

// const body = document.body;
//
// const form = document.createElement('form');
//
// ['name', 'age'].forEach(item => {
//     const input = document.createElement('input');
//     input.name = item;
//     input.type = `${item === 'name' ? 'text' : 'number'}`;
//     input.placeholder = `Enter ${item}`;
//     input.id = item;
//
//     form.appendChild(input);
// });
//
// const btn = document.createElement('button');
// btn.innerText = 'Відправити форму';
//
// form.appendChild(btn);
// body.appendChild(form);
//
// form.onsubmit = (e) => {
//     e.preventDefault();
//     const name = document.getElementById('name').value;
//     const age = document.getElementById('age').value;
//
//     if (age && name) {
//         localStorage.setItem('user', JSON.stringify({name, age}));
//     } else {
//         alert('Всі поля поинні бути заповнені');
//     }
// }





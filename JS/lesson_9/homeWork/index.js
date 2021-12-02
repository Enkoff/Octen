// Все робити за допомоги js.
// - створити блок,
//  - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// const body = document.body;
// const div = document.createElement('div');
// div.classList.add('wrap', 'collapse', 'alpha', 'beta');
// body.appendChild(div);
// body.appendChild(div.cloneNode(true));

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл index.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// const array =  ['Main','Products','About us','Contacts'];
// const menuUl = document.querySelector('.menu');
//
// array.forEach((item, index) => {
//     const li = document.createElement('li');
//     li.innerText = index + 1;
//     menuUl.appendChild(li);
// })

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// const ul = document.createElement('ul');
//
// coursesAndDurationArray.forEach(item => {
//        const li = document.createElement('li');
//        li.innerText = `title: ${item.title}, monthDuration: ${item.monthDuration}`;
//        ul.appendChild(li);
// })
//
// document.body.appendChild(ul);


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// coursesAndDurationArray.forEach(item => {
//     const div = document.createElement('div');
//     div.classList.add('item');
//
//     const h1 = document.createElement('h1');
//     h1.classList.add('heading');
//     h1.innerText = item.title;
//
//     const p = document.createElement('p');
//     p.classList.add('description');
//     p.innerText = item.monthDuration;
//
//     div.appendChild(h1, p);
//     document.body.appendChild(div);
// });



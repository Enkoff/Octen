// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

let arr = [];

// a. заповнити його 50 парними числами за допомоги циклу.

for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        arr.push(i);
    }
}
console.log(arr)

// b. заповнити його 50 непарними числами за допомоги циклу.

for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        arr.push(i);
    }
}

console.log(arr)

// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

for (let i = 0; i < 20; i++) {
    arr.push(Math.floor(Math.random() * 100));
}

console.log(arr)

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

for (let i = 0; i < 20; i++) {
    arr.push(Math.floor(Math.random() * (732 - 8) + 8));
}

console.log(arr)

// 2. Вивести за допомогою console.log кожен третій елемен

for (let i = 0; i < arr.length; i++) {
    if (i % 3 === 0) {
        console.log(arr[i]);
    }
}

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

for (let i = 0; i < arr.length; i++) {
    if (i % 3 === 0) {
        if (arr[i] % 2 === 0)
            console.log(arr[i]);
    }
}

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

let newArr = [];

for (let i = 0; i < arr.length; i++) {
    if (i % 3 === 0) {
        if (arr[i] % 2 === 0)
            newArr.push(arr[i]);
    }
}

console.log(newArr)

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

{
    let arr = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];

    for (let i = 0, k = 0; i < arr.length; i++, k = i) {
         if (arr[i] % 2 === 0) {
             console.log(arr[k-1]);
         }
    }
}


// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

const shopping = [100,250,50,168,120,345,188];

    const sum = shopping.reduce((previousValue, currentValue) => previousValue + currentValue);
    const average = sum / shopping.length;
    // Середній чек
    console.log(average);
    // Заокруглений середній чек
    console.log(Math.floor(average));

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

{
    const arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    console.log(arr);

    const newArr = arr.map(el => el * 5);
    console.log(newArr)
}

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

{
    const arr = [1, false, '2', 7, true , 8];
    const arrNumber = [];

    for (const el of arr) {
        if (typeof el === 'number') {
            arrNumber.push(el);
        }
    }
    console.log(arrNumber);
}

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

const newUserArray = [];
for (let i = 0; i < usersWithId.length; i++) {
    for (let j = 0; j < citiesWithId.length; j++) {
        if (usersWithId[i].id === citiesWithId[j].user_id) {
            const newObj = {
                id: usersWithId[i].id,
                name: usersWithId[i].name,
                age: usersWithId[i].age,
                status: usersWithId[i].status,
                address: {
                    user_id: citiesWithId[j].user_id,
                    country: citiesWithId[j].country,
                    city: citiesWithId[j].city
                }
            }
            newUserArray.push(newObj);
        }
    }
}
console.log(newUserArray);


// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

{
    const arr = [1,2,3,4,5,6,7,8,9,10];
    arr.forEach(el => el % 2 === 0 && console.log(el));
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

{
    const arr = [1,2,3,4,5,6,7,8,9,10];
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = arr[i];
    }
    console.log(newArr);
}


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

{
    const arr = [ 'a', 'b', 'c'];
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += arr[i];
    }
    console.log(str);
}


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

{
    const arr = [ 'a', 'b', 'c'];
    let str = '';

    let i = 0;
    while (i < arr.length) {
        str += arr[i];
        i++;
    }
    console.log(str);
}

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

{
    const arr = [ 'a', 'b', 'c'];
    let str = '';

    for (const el of arr) {
        str += el;
    }
    console.log(str);
}
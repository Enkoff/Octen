// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let arrOne = [1, 2, 3, 4, 5, '6', '7', '8', '9', '10', true, 11, '12', false, 13];
console.log(arrOne)

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arrTwo = [];

arrTwo[0] = 1;
arrTwo[1] = 2;
arrTwo[2] = 3;
arrTwo[3] = 4;
arrTwo[4] = 5;

console.log(arrTwo)

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i <= 9; i++) {
    document.write('<div>Hello Octen</div>')
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i <= 9; i++) {
    document.write(`<div>Hello Octen ${i}</div>`);
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

{
    let i = 0;
    while (i < 20) {
        document.write('<h1>Hello Octen</h1>');
        i++;
    }
}


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
{
    let i = 0;
    while (i < 20) {
        document.write(`<h1>Hello Octen ${i}</h1>`);
        i++;
    }
}
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let arrThree = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i <= arrThree.length; i++) {
    console.log(arrThree[i]);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let arrFour = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

for (let i = 0; i <= arrFour.length; i++) {
    console.log(arrFour[i]);
}


// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let arrFive = ['1', 2, true, 4, '5', false, 7, '8', true, false];
for (let i = 0; i <= arrFive.length; i++) {
    console.log(arrFive[i]);
}


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

{
    let arrFive = ['1', 2, true, 4, '5', false, 7, '8', true, false];
    for (let i = 0; i <= arrFive.length; i++) {
        if (typeof arrFive[i] === 'boolean') {
            console.log(arrFive[i]);
        }
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

{
    let arrFive = ['1', 2, true, 4, '5', false, 7, '8', true, false];
    for (let i = 0; i <= arrFive.length; i++) {
        if (typeof arrFive[i] === 'number') {
            console.log(arrFive[i]);
        }
    }
}


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

{
    let arrFive = ['1', 2, true, 4, '5', false, 7, '8', true, false];
    for (let i = 0; i <= arrFive.length; i++) {
        if (typeof arrFive[i] === 'string') {
            console.log(arrFive[i]);
        }
    }
}


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

{
    let arr = [];

    arr[0] = 1;
    arr[1] = '2';
    arr[2] = true;
    arr[3] = '3';
    arr[4] = false;

    for (const el of arr) {
        console.log(el);
    }
}


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(i);
}


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(i);
}


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i += 2) {
    console.log(i);
    document.write(i);
}


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
        document.write(i);
    }
}


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
        document.write(i);
    }
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = prompt('Enter a number from 1 to 59');

if (time <= 15) {
    console.log('the first quarter of an hour');
} else if (time > 15 && time <= 30) {
    console.log('another quarter of an hour');
} else if (time > 30 && time <= 45) {
    console.log('third quarter of an hour');
} else if (time > 45 <= 59) {
    console.log('the fourth quarter of an hour');
} else {
    console.log('the number is out of range');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = prompt('Enter a number from 1 to 31');

if (day > 1 && day <= 10) {
    console.log('the first decade');
} else if (day > 10 && day <= 20) {
    console.log('another decade');
} else if (day > 20 && day <= 31) {
    console.log('third decade');
} else {
    console.log('the number is out of range');
}

// - У нас є змінна test не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

let test = false;

if (test !== true) {
    console.log('Вірно')
} else {
    console.log('Неправильно')
}

test !== true ? console.log('Вірно') :  console.log('Неправильно');

// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let a = 1;

if (a !== 0) {
    console.log('Вірно')
} else {
    console.log('Не вірно')
}
{
    let a = 0;

    if (a !== 0) {
        console.log('Вірно')
    } else {
        console.log('Не вірно')
    }
}
{
    let a = -3;

    if (a !== 0) {
        console.log('Вірно')
    } else {
        console.log('Не вірно')
    }
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

{
    let day = prompt('Enter the ordinal number of the day of the week from 1 to 7');
    switch (day) {
        case '1':
            document.write('<h1>Замінити мастила в автомобілі</h1>');
            break;
        case '2':
            document.write('<h1>Зробити звіт</h1>');
            break;
        case '3':
            document.write('<h1>Проаналізувати витрати</h1>');
            break;
        case '4':
            document.write('<h1>Купити холодильник</h1>');
            break;
        case '5':
            document.write('<h1>Здробити депозить</h1>');
            break;
        case '6':
            document.write('<h1>Переглянути лекцтю з англійської</h1>');
            break;
        case '7':
            document.write('<h1>Сходити на теніс</h1>');
            break;
        default:
            document.write('<h1>Введіть значення в діапазоні від 1 до 7</h1>');
    }
}

// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

let year = prompt('Enter year');
year % 4 === 0 ? document.write('<h1>Високосний рік</h1>') : document.write('<h1>Невисокосний рік</h1>')

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «

let name = prompt('Яка офіційна назва JavaScript?');
if (name.toLowerCase() === 'ecmascript') {
    document.write('<h1>Правильно! </h1>');
} else {
    document.write('<h1>Не знаєте? ECMAScript!</h1>');
}
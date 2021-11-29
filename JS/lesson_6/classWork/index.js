// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';
//
// const validName = (str, symbol) => {
//         let arr = [];
//         str.split(symbol).forEach(char => {
//             if (char) arr.push(char);
//         });
//         return arr.join(' ')
//     };
// console.log(validName(n1, '.'))
// console.log(validName(n2, '-'))
// console.log(validName(n3, '_'))


// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// const createRandomArr = (length, number) => {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr.push(Math.floor(Math.random() * number));
//     }
//     return arr;
// }

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// const randomArr = createRandomArr(15, 50);
// randomArr.sort((a,b) => a - b);
// console.log(randomArr);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// let randomArr = createRandomArr(15, 50);
// console.log(randomArr);
// console.log(randomArr.filter(number => number % 2 === 0));


// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let randomArr = createRandomArr(15, 50);
// console.log(randomArr.map(number => number.toString()));


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// let nums = [11,21,3];
// const sortNums = (arr, direction) => {
//     if (direction === 'ascending') {
//         return arr.sort((a, b) => a - b);
//     } else if (direction === 'descending') {
//         return arr.sort((a, b) => b - a);
//     } else {
//         return arr;
//     }
// }
//
// console.log(sortNums(nums, 'ascending'));
// console.log(sortNums(nums, 'descending'));


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// console.log(coursesAndDurationArray
//     .sort((a, b) => b.monthDuration - a.monthDuration)
//     .filter(obj => obj.monthDuration > 5)
// );
// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

function concat() {
    let tmp = arguments[0];
    if (arguments.length === 1) {
        console.log(arguments[0]);
    } else {
        for (let i = 1; i < arguments.length; i++) {
            tmp += arguments[i];
        }
    }
    return tmp;
}

console.log(concat(1, 2, 3));

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//

const arrOne = [1, 2, 3, 4, 6];
const arrTwo = [2, 3, 4, 5, 6];

const concatArrays = (arr1, arr2) => {
    let concatArr = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (i === j) {
                concatArr[i] = arr1[i] + arr2[j];
            }
        }
    }
    return concatArr
}

console.log(concatArrays(arrOne, arrTwo));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//

const objArr = [
    {name: 'Dima', age: 13},
    {model: 'Camry'},
    {id: 1, email: '0639818413@gmail.com'}
];

const objKey = (arr) => {
    const keysArr = [];
    arr.forEach(obj => keysArr.push(...Object.keys(obj)));
    return keysArr;
}

console.log(objKey(objArr));


//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

const objValue = (arr) => {
    let valueArr = [];
    arr.forEach(el => {
        const keys = Object.keys(el);
        keys.forEach(key => valueArr.push(el[key]));
    });
    return valueArr;
}

console.log(objValue(objArr));

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

const minNumber = (a, b, c) => {
    let min;
    if (a < b && a < c) {
        min = a;
    } else if (b < a && b < c) {
        min = b;
    } else {
        min = c;
    }
    return min;
}
console.log(minNumber(2, 3, 1));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

const maxNumber = (a, b, c) => {
    let max;
    if (a > b && a > c) {
        max = a;
    } else if (b > a && b > c) {
        max = b;
    } else {
        max = c;
    }
    return max;
}

console.log(maxNumber(2, 3, 1));

// - створити функцію яка повертає найбільше число з масиву

const numbers = [10, 2, 18, 4, 15, 6, 2, 8, 4];

const maxNum = (arr) => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(maxNum(numbers));

// - створити функцію яка повертає найменьше число з масиву

const minNum = (arr) => {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
console.log(minNum(numbers));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

const sum = (arr) => arr.reduce((a,b) => a + b);
console.log(sum(numbers));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

const average = (arr) => arr.reduce((a,b) => a + b) / arr.length;
console.log(average(numbers));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function minMax() {
    let min = arguments[0];
    let max = arguments[0];

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        } else if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    console.log(min);
    return max;

}

console.log(minMax(15, 22, 8, 17, 22));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

const newArr = [];

const randomArr = (arr) => {
    const length = 10
    for (let i = 0; i < length; i++) {
        arr[i] = Math.round(Math.random()*100);
    }
    console.log(arr);
}

randomArr(newArr);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.{

{
    const newArr = [];

    const randomArr = (arr, limit) => {
        const length = 10
        for (let i = 0; i < length; i++) {
            arr[i] = Math.round(Math.random() * limit);
        }
        console.log(arr);
    }
    randomArr(newArr, 10);
}

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

const reverse = (arr) => {
    let newArr = [];
    for (let i = arr.length -1;i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(reverse(numbers));

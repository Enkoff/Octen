// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = arr.reduce((prev, current) => prev + current);
console.log(result)

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

const book = {
    name: '',
    col: '',
    genre: ''
}

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

const bookTwo = {
    name: '',
    col: 0,
    genre: '',
    author: ''
}

// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт

const harryPotterPhilosophersStone = {
    name: "Harry Potter and the Philosopher's Stone",
    col: 223,
    genre: 'Fantasy',
    author: 'J. K. Rowling'
}
const harryPotterChamberSecrets = {
    name: 'Harry Potter and the Chamber of Secrets',
    col: 251,
    genre: 'Fantasy',
    author: 'J. K. Rowling'
}

const harryPotterPrisonerAzkaban = {
    name: 'Harry Potter and the Prisoner of Azkaban',
    col: 317,
    genre: 'Fantasy',
    author: 'J. K. Rowling'
}

const books = [harryPotterPhilosophersStone, harryPotterChamberSecrets, harryPotterPrisonerAzkaban];
books.forEach(book => console.log(book));

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.

const height = 23;
const width = 10;
const s = height * width;
console.log(s);

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.

const heightС = 10;
const dC = 4;
const r = dC / 2;
const v = Math.PI * Math.pow(r, 2) * heightС;
console.log(v)

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

const n = 3;
const m = 4;
const k = Math.sqrt(n ** 2 + m ** 2);
console.log(k)


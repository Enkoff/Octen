//HOME WORK 1

let greeting = 'hello';
let owu = 'own';
let com = 'com';
let ua = 'ua';
let one = 1;
let ten = 10;
let minusNineHundredNinetyNine = -999;
let hundredTwentyThree = 123;
let pi = 3.14;
let twoSeventh = 2.7;
let sixteen = 16;
let boolTrue = true;
let boolFalse = false;

console.log(greeting);
console.log(owu);
console.log(com);
console.log(ua)
console.log(one)
console.log(ten)
console.log(minusNineHundredNinetyNine)
console.log(hundredTwentyThree)
console.log(pi)
console.log(twoSeventh);
console.log(sixteen);
console.log(boolTrue);
console.log(boolFalse);

// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

greeting = 1;
owu = 2;
com = 3;
ua = 4;
one = 5;
ten = 6;
minusNineHundredNinetyNine = 7;
hundredTwentyThree = 8;
pi = 9;
twoSeventh = 10;
sixteen = 11;
boolTrue = 12;
boolFalse = 13;

console.log(greeting);
console.log(owu);
console.log(com);
console.log(ua)
console.log(one)
console.log(ten)
console.log(minusNineHundredNinetyNine)
console.log(hundredTwentyThree)
console.log(pi)
console.log(twoSeventh);
console.log(sixteen);
console.log(boolTrue);
console.log(boolFalse);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person.

let lastName = 'Yenko';
let firstName = 'Oleh';
let middleName = 'Hennadievich';

const person = {
    firstName: firstName,
    middleName: middleName,
    lastName: lastName,
}


// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

firstName = prompt('Enter your first name');
middleName = prompt('Enter your middle name');
let age = prompt('Enter your age');

console.log(`Вітаю ${firstName} ${middleName}. Тобі ${age} років`);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;
console.log(typeof a , typeof b, typeof c);

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
//     5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true

console.log(5 === 6);
console.log(5 >= 6);
console.log(5 > 6);
console.log(10 >= 10);
console.log(10 === 10);
console.log(10 > 10);
console.log(10 < 10);
console.log(10 !== 10);
console.log(123 > '123');
console.log(123 >= '123');

// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
{
    let str = "20";
    let a = 5;

    document.write(str + a + "<br/>");
// У вікні браузера виведеться 205 тому щом оператор + перетворює числове значення на рядок а далі здійснюється конкатенація рядків

    document.write(str - a + "<br/>");
//У вікні браузера виведеться 15 тому що оператор - перетворює рядок на число(рядки віднімати не можна) а далі від числа 20 відніметься 5 і вийде 15

    document.write(str * "2" + "<br/>");
//У вікні браузера виведеться 40 тому що оператор * перетворює рядки на числа(так як це матиматична операція) а далі число 20 множиться на 2

    document.write(str / 2 + "<br/>");
//У вікні браузера виведеться 10 тому що оператор / перетворює рядок на число(так як це матиматична операція) а далі число 20 ділиться на 2
}











// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
{
    const s = (a, b) => a * b;
    console.log(s(5, 5));
}

// - створити функцію яка обчислює та повертає площу кола з радіусом r

{
    const s = (r) => r * r * Math.PI;
    console.log(s(2));
}

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

{
    const s = (h, r) => 2 * Math.PI * r * (r + h);
    console.log(s(4,2));
}

// - створити функцію яка приймає масив та виводить кожен його елемент

const arr = [1, 2, 3, 4, 5];

const log = (arr) => arr.forEach(el => console.log(el));
log(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

const createParagraph = (text) => document.write(`<p>${text}</p>`);
createParagraph('Hello world');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
{
    const createList = (text) => {
        document.write(`<ul>
                        <li>${text}</li>
                        <li>${text}</li>
                        <li>${text}</li>
                    </ul>`);
    }
    createList('Hello');
}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
{
    const createList = (text, col) => {
        const newUl = document.createElement("ul");
        for (let i = 0; i < col; i++) {
            const newLi = document.createElement("li");
            newLi.innerText = `${text}`;
            newUl.appendChild(newLi);
        }
        document.body.appendChild(newUl);
    }
    createList('Octen', 5);
}

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

{
    const array = [1, false, '2', true];
    const createList = (arr) => {
        const newUl = document.createElement("ul");
        arr.forEach(el => {
            const newLi = document.createElement("li");
            newLi.innerText = el;
            newUl.appendChild(newLi);
        });
        document.body.appendChild(newUl);
    }
    createList(array);
}

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

{
    const arrObj = [
        {
            id: 1,
            name: 'Oleh',
            age: 29
        },
        {
            id: 2,
            name: 'Ivan',
            age: 27
        },
        {
            id: 3,
            name: 'Sergei',
            age: 30
        }
    ];

    const createBlock = (arr) => {
        arr.forEach(el => {
            const newDiv = document.createElement("div");
            const newP = document.createElement("p");
            newP.innerText = `{
                id: ${el.id},
                name: ${el.name},
                age: ${el.age}
            },`;
            newDiv.appendChild(newP);
            document.body.appendChild(newDiv);
        });
    }
    createBlock(arrObj);
}



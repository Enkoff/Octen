// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// const usersArray = [];
//
// for (let i = 1; i < 11; i++) {
//     usersArray.push(new User(i, `Oleh${i}`, `Yenko${i}`, `063981841${i}@ukr.net`, `+38063981841${i}`));
// }
// console.log(usersArray);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// const usersFilter = usersArray.filter(user => user.id % 2 === 0);
// console.log(usersFilter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// const usersSort = usersArray.sort((a,b) => a.id - b.id);
// console.log(usersSort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = [...order];
//     }
// }

// const clientsArray = [];
// const createOrders = (col) => {
//     let products = [];
//     for (let i = 0; i < col; i++) {
//         products.push(`Товар${i}`);
//     }
//     return products;
// }
//
// for (let i = 1; i <= 10; i++) {
//     clientsArray.push(new Client(i,
//         `Oleh${i}`,
//         `Yenko${i}`,
//         `063981841${i}@ukr.net`,
//         `+38063981841${i}`,
//         createOrders(Math.floor(Math.random() * (10 - 2) + 2))));
// }
// console.log(clientsArray);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// const clientsSort = clientsArray.sort((a,b) => a.order.length - b.order.length);
// console.log(clientsSort);





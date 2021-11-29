// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

// function Car(model, manufacturer, yearOfManufacture, maximumSpeed, engineCapacity) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.yearOfManufacture = yearOfManufacture;
//     this.maximumSpeed = maximumSpeed;
//     this.engineCapacity = engineCapacity;
//     this.drive = () => {
//         console.log(`їдемо зі швидкістю ${this.maximumSpeed}km на годину`)
//     }
//     this.info = () => {
//         console.log(` 1. модель - ${this.model} ${'\n'} 2. виробник - ${this.manufacturer} ${'\n'} 3. рік випуску - ${this.yearOfManufacture} ${'\n'} 4. максимальна швидкість - ${this.maximumSpeed} ${'\n'} 5. об'єм двигуна - ${this.engineCapacity}`
//         )
//     }
//     this.increaseMaxSpeed = (newSpeed) => {
//         this.maximumSpeed += newSpeed;
//     }
//     this.changeYear = (newValue) => {
//         this.yearOfManufacture = newValue;
//     }
//     this.addDriver = (driver) => {
//         this.driver = driver;
//     }
// }
// const driver = {
//     name: 'Oleh',
//     surname: 'Yenko',
//     age: '29'
// }
//
// let car = new Car('Tesla', 'Tesla Motors', 2021, 400, 3);
// car.drive();
// car.info();
// car.increaseMaxSpeed(50);
// car.info();
// car.changeYear(2020);
// car.info();
// car.addDriver(driver);
// console.log(car.driver);

// - (Те саме, тільки через клас)

// class Car {
//     constructor(model, manufacturer, yearOfManufacture, maximumSpeed, engineCapacity) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.yearOfManufacture = yearOfManufacture;
//         this.maximumSpeed = maximumSpeed;
//         this.engineCapacity = engineCapacity;
//     }
//
//     drive = () => {
//         console.log(`їдемо зі швидкістю ${this.maximumSpeed}km на годину`)
//     }
//     info = () => {
//         console.log(` 1. модель - ${this.model} ${'\n'} 2. виробник - ${this.manufacturer} ${'\n'} 3. рік випуску - ${this.yearOfManufacture} ${'\n'} 4. максимальна швидкість - ${this.maximumSpeed} ${'\n'} 5. об'єм двигуна - ${this.engineCapacity}`
//         )
//     }
//     increaseMaxSpeed = (newSpeed) => {
//         this.maximumSpeed += newSpeed;
//     }
//     changeYear = (newValue) => {
//         this.yearOfManufacture = newValue;
//     }
//     addDriver = (driver) => {
//         this.driver = driver;
//     }
// }
//
// const driver = {
//     name: 'Oleh',
//     surname: 'Yenko',
//     age: '29'
// }
//
// let car = new Car('Tesla', 'Tesla Motors', 2021, 400, 3);
// car.drive();
// car.info();
// car.increaseMaxSpeed(50);
// car.info();
// car.changeYear(2020);
// car.info();
// car.addDriver(driver);
// console.log(car.driver);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// const  cinderellaArray = [];
//
// for (let i = 1; i <=10;i++) {
//     if (i === 5) {
//         cinderellaArray.push(new Cinderella('Ірина', 17, 10));
//     } else {
//         cinderellaArray.push(new Cinderella(i, 15 + i, Math.floor(Math.random() * 9)));
//     }
// }
//
// console.log(cinderellaArray);
//
// class Prince {
//     constructor(name, age, shoeFound) {
//         this.name = name;
//         this.age = age;
//         this.shoeFound = shoeFound;
//     }
// }
//
// const prince = new Prince('Іван', 18, 10);
//
// cinderellaArray.forEach(cinderella => cinderella.footSize === prince.shoeFound &&  console.log(`Попелюшка ${cinderella.name} повинна бути з принцом ${prince.name}`));
//
// const findCinderella = cinderellaArray.find((cinderella) => cinderella.footSize === prince.shoeFound);
//
// console.log(`Попелюшка ${findCinderella.name} повинна бути з принцом ${prince.name}`);



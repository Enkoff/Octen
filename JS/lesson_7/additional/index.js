// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
//
//

// class User {
//     constructor(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.address = {
//             street: street,
//             suite: suite,
//             city: city,
//             zipcode: zipcode,
//             geo: {
//                 lat: lat,
//                 lng: lng
//             }
//         };
//         this.phone = phone;
//         this.website = website;
//         this.company = {
//             name: companyName,
//             catchPhrase: catchPhrase,
//             bs: bs
//         }
//     }
// }
//
// let user = new User(1,
//     'Leanne Graham',
//     'Bret',
//     'Sincere@april.biz',
//     'Kulas Light',
//     'Apt. 556',
//     'Gwenborough',
//     '92998-3874',
//     '-37.3159',
//     '81.1496',
//     '1-770-736-8031 x56442',
//     'hildegard.org',
//     'Romaguera-Crona',
//     'Multi-layered client-server neural-net',
//     'harness real-time e-markets'
// )
// console.log(user);


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
// -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

// class Tag {
//     constructor(name, action) {
//         this.name = name;
//         this.action = action;
//         this.attributes = [];
//     }
//
//     setAttributes = (attributesName, attributesAction) => {
//         this.attributes.push({
//             attributesName: attributesName,
//             attributesAction: attributesAction
//         });
//     }
// }
//
// let attributes = [
//     {
//         tagName: 'a',
//         tagAction: 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок',
//         firstAtt: {
//             name: 'accesskey',
//             action: 'Активация ссылки с помощью комбинации клавиш.'
//         },
//         secondAtt: {
//             name: 'coords',
//             action: 'Устанавливает координаты активной области.'
//         }
//     },
//     {
//         tagName: 'div',
//         tagAction: 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
//         firstAtt: {
//             name: 'align',
//             action: 'Задает выравнивание содержимого тега <div>.'
//         },
//         secondAtt: {
//             name: 'title',
//             action: 'Добавляет всплывающую подсказку к содержимому.'
//         }
//     },
//     {
//         tagName: 'h1',
//         tagAction: '<h1> представляет собой наиболее важный заголовок первого уровня',
//         firstAtt: {
//             name: 'align',
//             action: 'Определяет выравнивание заголовка.'
//         },
//         secondAtt: {
//             name: 'id',
//             action: 'Задает стилевой идентификатор — уникальное имя элемента.'
//         }
//     },
//     {
//         tagName: 'span',
//         tagAction: 'Тег <span> предназначен для определения строчных элементов документа.',
//         firstAtt: {
//             name: 'class',
//             action: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'
//         },
//         secondAtt: {
//             name: 'lang',
//             action: 'Браузер использует значение параметра для правильного отображения некоторых национальных символов.'
//         }
//     },
//     {
//         tagName: 'input',
//         tagAction: 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',
//         firstAtt: {
//             name: 'form',
//             action: 'Связывает поле с формой по её идентификатору.'
//         },
//         secondAtt: {
//             name: 'formaction',
//             action: 'Определяет адрес обработчика формы.'
//         }
//     },
//     {
//         tagName: 'form',
//         tagAction: 'Тег <form> устанавливает форму на веб-странице.',
//         firstAtt: {
//             name: 'target',
//             action: 'Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат.'
//         },
//         secondAtt: {
//             name: 'name',
//             action: 'Имя формы'
//         }
//     },
//     {
//         tagName: 'option',
//         tagAction: 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.',
//         firstAtt: {
//             name: 'label',
//             action: 'Указание метки пункта списка.'
//         },
//         secondAtt: {
//             name: 'selected',
//             action: 'Заранее устанавливает определенный пункт списка выделенным.'
//         }
//     },
//     {
//         tagName: 'select',
//         tagAction: 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее',
//         firstAtt: {
//             name: 'name',
//             action: 'Имя элемента для отправки на сервер или обращения через скрипты.'
//         },
//         secondAtt: {
//             name: 'required',
//             action: 'Список обязателен для выбора перед отправкой формы.'
//         }
//     },
// ];
//
// const attributesTag = attributes.map(tag => {
//     const newTag = new Tag(tag.tagName, tag.tagAction);
//     newTag.setAttributes(tag.firstAtt.name, tag.firstAtt.action);
//     newTag.setAttributes(tag.secondAtt.name, tag.secondAtt.action);
//     return newTag;
// });
//
// console.log(attributesTag);



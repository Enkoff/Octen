// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// const body = document.body;
// const rootDiv = document.createElement('div');
// rootDiv.classList.add('root__div');
//
// fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(json => {
//     json.forEach(post => {
//         const div = document.createElement('div');
//         div.classList.add('post');
//
//         const title = document.createElement('div');
//         title.classList.add('container');
//         title.innerText = `Title: ${post.title}`;
//         div.appendChild(title);
//
//         const body = document.createElement('div');
//         body.classList.add('container');
//         body.innerText = `Body: ${post.body}`;
//         div.appendChild(body);
//
//         const id = document.createElement('div');
//         id.classList.add('container');
//         id.innerText = `Post id: ${post.id}`;
//         div.appendChild(id);
//
//         const userId = document.createElement('div');
//         userId.classList.add('container');
//         userId.innerText = `User id ${post.userId}`;
//         div.appendChild(userId);
//
//         rootDiv.appendChild(div);
//     });
//     body.appendChild(rootDiv);
// });


// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments


fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json()).then(json => {
    json.forEach(comment => {
        const div = document.createElement('div');
        div.classList.add('comment');

        const id = document.createElement('div');
        id.classList.add('comment__item');
        id.innerText = `ID: ${comment.id}`;
        div.appendChild(id);

        const postId = document.createElement('div');
        postId.classList.add('comment__item');
        postId.innerText = `PostId: ${comment.id}`;
        div.appendChild(postId);

        const body = document.createElement('div');
        body.classList.add('comment__item');
        body.innerText = `Body: ${comment.body}`;
        div.appendChild(body);

        const name = document.createElement('div');
        name.classList.add('comment__item');
        name.innerText = `Name: ${comment.name}`;
        div.appendChild(name);

        const email = document.createElement('div');
        email.classList.add('comment__item');
        email.innerText = `Email: ${comment.email}`;
        div.appendChild(email);

        document.body.appendChild(div);
    });
});

// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//

const postId = window.location.search.slice(8);

const body = document.body;

const postBox = document.createElement('div');
postBox.classList.add('post__box');

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(post => post.json()).then(post => {
    const id = document.createElement('div');
    id.classList.add('box');
    id.innerText = `Id: ${post.id}`;


    const body = document.createElement('div');
    body.classList.add('box');
    body.innerText = `Body: ${post.body}`;

    const title = document.createElement('div');
    title.classList.add('box');
    title.innerText = `Title: ${post.title}`;

    const userId = document.createElement('div');
    userId.classList.add('box');
    userId.innerText = `UserId: ${post.userId}`;

    postBox.append(id, body, title, userId);
});

body.append(postBox);

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then(comments => comments.json()).then(comments => {
    const ul = document.createElement('ul');
    ul.innerText = 'COMMENTS';

    comments.forEach(comment => {
        const li = document.createElement('li');
        li.innerText = `${comment.body}`;

        ul.appendChild(li);
    });

    body.append(ul);
});

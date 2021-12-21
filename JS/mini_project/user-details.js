// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.

let userId = window.location.search.slice(8);

const body = document.body;

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(users => users.json()).then(user => {
    const userWrapper = document.createElement('div');
    userWrapper.classList.add('user__wrapper');

    const id = document.createElement('div');
    id.innerText = `ID:${user.id}`;

    const name = document.createElement('div');
    name.innerText = `name: ${user.name}`

    const email = document.createElement('div');
    email.innerText = `email: ${user.email}`;

    const phone = document.createElement('div');
    phone.innerText = `phone: ${user.phone}`;

    const username = document.createElement('div');
    username.innerText = `user name: ${user.username}`;

    const website = document.createElement('div');
    website.innerText = `website ${user.website}`;

    const companyUl = document.createElement('ul');
    companyUl.innerText = 'COMPANY';

    for (let companyKey in user.company) {
        const li = document.createElement('li');
        li.innerText = `${companyKey}: ${user.company[companyKey]}`;

        companyUl.appendChild(li);
    }

    const addressUl = document.createElement('ul');
    addressUl.innerText = `ADDRESS`;

    for (let addressKey in user.address) {
        if (addressKey !== 'geo') {
            const li = document.createElement('li');
            li.innerText = `${addressKey} ${user.address[addressKey]}`;
            addressUl.append(li);
        } else {
            const geoUl = document.createElement('ul');
            geoUl.innerText = 'GEO';

            for (let addressKey1 in user.address[addressKey]) {
                const li = document.createElement('li');
                li.innerText = `${addressKey1}: ${user.address[addressKey][addressKey1]}`;

                geoUl.append(li);
                addressUl.append(geoUl);
            }
        }
    }

    const postBtn = document.createElement('button');
    postBtn.classList.add('post__btn');
    postBtn.innerText = 'post of current user';

    postBtn.addEventListener('click', () => {
        const postContainer = document.createElement('div');
        postContainer.classList.add('post__container');

        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`).then(posts => posts.json()).then(posts => {
            posts.forEach(postItem => {
                const post = document.createElement('a');
                post.classList.add('post');
                post.innerText = `${postItem.title}`;
                post.href = `post-details.html?postId=${postItem.id}`;

                postContainer.append(post);
            });
        });

        body.append(postContainer);
    });


    userWrapper.append(id, name, username, phone, email, companyUl, addressUl);
    body.append(userWrapper, postBtn);
});
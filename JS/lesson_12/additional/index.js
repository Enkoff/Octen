// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users').then(users => users.json()).then(usersArray => {
    // console.log(usersArray);

    usersArray.forEach(user => {
        const div = document.createElement('div');
        div.classList.add('user__box');

        const circle = document.createElement('div');
        circle.classList.add('top__box');
        div.appendChild(circle);

        const name = document.createElement('span');
        name.innerText = user.name;

        const email = document.createElement('span');
        email.innerText = user.email;

        circle.append(name, email);


        const arrowContainer = document.createElement('div');
        arrowContainer.classList.add('arrow__container');

        const arrowImg = document.createElement('img');
        arrowImg.classList.add('arrow__right');
        arrowImg.src = 'https://entreresource.com/wp-content/uploads/2021/05/7.png';

        const postContainer = document.createElement('div');
        postContainer.id = `postContainer${user.id}`;
        postContainer.classList.add('post__container');

        const commentsContainer = document.createElement('div');
        commentsContainer.id = `commentsContainer${user.id}`;
        commentsContainer.classList.add('comments__container');

        arrowImg.addEventListener('click', () => {
            fetch(`https://jsonplaceholder.typicode.com/posts`).then(posts => posts.json()).then(posts => {
                const userPosts = posts.filter(post => post.userId === user.id);

                const postsLength = document.getElementById(`postContainer${user.id}`).children.length;

                if (postsLength === 0) {
                    userPosts.forEach(postItem => {
                        const post = document.createElement('div');
                        post.classList.add('post__item');
                        post.innerText = postItem.title;

                        const arrowImg = document.createElement('img');
                        arrowImg.classList.add('arrow__right_two');
                        arrowImg.src = 'https://entreresource.com/wp-content/uploads/2021/05/7.png';

                        arrowImg.addEventListener('click', () => {
                            fetch(`https://jsonplaceholder.typicode.com/comments`).then(comments => comments.json()).then(comments => {

                                const commentsArray = comments.filter(comment => comment.postId === postItem.id);
                                console.log(commentsArray);
                                const commentContainer = document.getElementById(`commentsContainer${user.id}`);

                                commentContainer.remove();

                                const newCommentsContainer = document.createElement('div');
                                newCommentsContainer.id = `commentsContainer${user.id}`;
                                newCommentsContainer.classList.add('comments__container');

                                commentsArray.forEach(item => {
                                    const comment = document.createElement('div');
                                    comment.classList.add('comment__item');
                                    comment.innerText = item.body;

                                    newCommentsContainer.appendChild(comment);
                                });
                                div.append(newCommentsContainer);
                            });
                        });

                        post.appendChild(arrowImg);

                        postContainer.append(post);
                    });
                }
            });
        });

        const arrowTitle = document.createElement('span');
        arrowTitle.classList.add('arrow__title');
        arrowTitle.innerText = 'Posts';

        arrowContainer.append(arrowImg, arrowTitle);

        div.append(arrowContainer, postContainer, commentsContainer);


        document.body.appendChild(div);
    });
});
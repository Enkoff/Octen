// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts').then(post => post.json()).then(objArray => {
    objArray.forEach(post => {
        const div = document.createElement('div');
        div.classList.add('post');

        const topBox = document.createElement('div');
        topBox.classList.add('top__box');

        const title = document.createElement('div');
        title.classList.add('post__item');
        title.innerText = post.title;
        topBox.appendChild(title);

        const btn = document.createElement('button');
        btn.classList.add('btn');
        btn.innerText = 'Post body';
        topBox.appendChild(btn);

        const bottomBox = document.createElement('div');
        bottomBox.id = `bottomBox${post.id}`;
        bottomBox.classList.add('bottom__box');
        bottomBox.classList.add('bottom__box_disable');

        div.append(topBox, bottomBox);

        btn.addEventListener('click', () => {
            bottomBox.classList.toggle('bottom__box_disable');
            fetch('https://jsonplaceholder.typicode.com/comments').then(comments => comments.json()).then(comments => {
                const commentsArray = comments.filter(comment => comment.postId === post.id);

                const bottomBox = document.getElementById(`bottomBox${post.id}`);

                if (bottomBox.children.length === 0) {
                    commentsArray.forEach(item => {
                        const postBody = document.createElement('div');
                        postBody.innerText = item.body;
                        postBody.classList.add('post__body');
                        bottomBox.appendChild(postBody);
                    });
                }
            });
        });

        document.body.appendChild(div);
    });
});
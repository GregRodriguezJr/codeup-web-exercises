const localUrl = "../../data/blog.json"

$.get(localUrl)
    .done((data) => {
        const blogPosts = data;
        blogPosts.forEach(blogPost => {
            $('#post').append(`
                <h1>${blogPost.title}</h1>
                <p>${blogPost.categories}</p>
                <p>${blogPost.date}</p>
                <p>${blogPost.content}</p>
            `);
        });
    })
    .fail(() => $('#post').append(`<h3>Error loading data :(</h3>`));
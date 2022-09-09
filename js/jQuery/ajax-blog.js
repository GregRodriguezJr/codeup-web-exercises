const localUrl = "../../data/blog.json"

$.get(localUrl)
    .done((data) => {
        const blogPosts = data;
        blogPosts.forEach(blogPost => {
            $('#post').append(`
                <div class="card">
                    <div class="card-header">
                        <h3>${blogPost.title}</h3>
                    </div>
                    <div class="card-body">
                        <p>Categories: ${blogPost.categories}</p>
                        <p>${blogPost.date}</p>
                        <p>${blogPost.content}</p>
                        <button class="btn btn-primary">Photos</button>
                    </div>
                </div>
            `);
        });
    })
    .fail(() => $('#post').append(`<h3>Error loading data :(</h3>`));
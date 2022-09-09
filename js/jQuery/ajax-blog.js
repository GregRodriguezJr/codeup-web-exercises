const localUrl = "../../data/blog.json"

$.get(localUrl)
    .done((data) => {
        const blogPosts = data;
        // Create card for each blog post
        blogPosts.forEach((blogPost,index) => {
            $('#post').append(`
                <div class="card my-4">
                    <div class="card-header bg-light">
                        <h3>${blogPost.title}</h3>
                    </div>
                    <div class="card-body">
                        <p>Categories: ${blogPost.categories}</p>
                        <p>${blogPost.date}</p>
                        <p>${blogPost.content}</p>
                        <button id="blogPost${index}" class="btn btn-primary">Photos</button>
                    </div>
                </div>
            `);
        });
    })
    .fail(() => $('#post').append(`<h3>Error loading data :(</h3>`));
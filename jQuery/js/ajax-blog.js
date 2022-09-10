const localUrl = "../jQuery/data/blog.json"

$.get(localUrl)
    .done((data) => {
        const blogPosts = data;
        // Create card for each blog post
        blogPosts.forEach((blogPost) => {
            $('#post').append(`
                <div class="card my-4">
                    <div class="card-header bg-light">
                        <h3>${blogPost.title}</h3>
                    </div>
                    <div class="card-body">
                        <p>Categories: ${blogPost.categories}</p>
                        <p>${blogPost.content}</p>
                    </div>
                    <div class="card-footer">
                        ${blogPost.date}
                    </div>
                </div>
            `);
        });
    })
    .fail(() => $('#post').append(`<h3 class="text-light">Error loading data :(</h3>`));
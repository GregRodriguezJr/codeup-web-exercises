const localUrl = "../../data/blog.json"

$.get(localUrl)
    .done(function(data) {
        const blogPosts = data;
        console.log(blogPosts);
    })
    .fail(function() {
        console.log("error fetching data");
    });
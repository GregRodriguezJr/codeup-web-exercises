let username = "GregRodriguezJr"

fetch( `https://api.github.com/users/${username}/events/public`, 
    { headers: {'Authorization': GITHUB_API_TOKEN}})
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
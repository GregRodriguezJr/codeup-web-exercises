const cardEl = document.getElementById('card-container');
const inputBtn = document.getElementById('input-btn');
const inputText = document.querySelector('.form-control');

// Different method to call API to fetch github data
// const fetchGithub = (username) => {
//     fetch( `https://api.github.com/users/${username}/events/public`, 
//     { headers: {'Authorization': GITHUB_API_TOKEN}})
//     .then(res => res.json())
//     .then(data => {
//         const dataObj = data[0]
//         const date = dataObj.created_at;
//         // Format date to day/month/year
//         const formatedDate = `${date.substring(5,7)}/${date.substring(8,10)}/${date.substring(0,4)}`;
//         // Call function to render data to the DOM
//         renderHtml(dataObj, formatedDate);
//     });
// }
// fetchGithub(username);

// Function to render HTML to the DOM
const renderHtml = (dataObj, date) => {
    const 
        { 
            type, 
            payload: 
                {
                    commits: 
                    [{ message, author:{name:author}}]
                }, 
            repo: {name : repoName}, 
            actor: {avatar_url} 
        } 
        = dataObj;

    cardEl.innerHTML = `
    <div id="card" class="card m-auto" style="width: 18rem;">
        <img src=${avatar_url} class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">${author}</h5>
            <p class="card-text">Last commit: ${date}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Type: ${type}</li>
            <li class="list-group-item">Repo: ${repoName}</li>
            <li class="list-group-item">Commit: "${message}"</li>
        </ul>
    </div>
    `
}

// API call to fetch github data
async function fetchGithub(username){
    let url = `https://api.github.com/users/${username}/events/public`
    try {
        const response = await fetch(url, { headers: {'Authorization': GITHUB_API_TOKEN} });
        const data = await response.json();
        const date = data[0].created_at;
        // Format date to day/month/year
        const formatedDate = `${date.substring(5,7)}/${date.substring(8,10)}/${date.substring(0,4)}`;
        renderHtml(data[0], formatedDate);
        inputText.value = '';
    } catch (error) {
        console.log(error);
        cardEl.innerHTML = `<h5>Error...please enter valid username</h5>`
    }
}

// Event Listener

inputBtn.addEventListener('click', () => {
    fetchGithub(inputText.value);
});
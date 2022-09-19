let username = "shivasamadhi"

const renderHtml = (dataObj, date) => {
    const { type,payload: {commits: [{message}]}, repo: {name : repoName} } = dataObj;
    console.log(type, message, repoName);
    console.log(date);
}

// API call to fetch github data
const fetchGithub = (username) => {
    fetch( `https://api.github.com/users/${username}/events/public`, 
    { headers: {'Authorization': GITHUB_API_TOKEN}})
    .then(res => res.json())
    .then(data => {
        const dataObj = data[0]
        const date = dataObj.created_at;
        console.log(dataObj);
        // Format date to day/month/year
        const formatedDate = `${date.substring(5,7)}/${date.substring(8,10)}/${date.substring(0,4)}`;
        // Call function to render data to the DOM
        renderHtml(dataObj, formatedDate);
    });
}
fetchGithub(username);


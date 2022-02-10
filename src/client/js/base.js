import fetch from "isomorphic-fetch";

export const form = document.querySelector("#main-from");

export function fetchData(url) {
    return fetch('http://localhost:8081/sentiment', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({url})
    });
}

export function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(this)
    const url = formData.get('url');

    if(!url) return alert('Please fill in the article url');
    if(!isValidURL(url)) return alert('Please enter a valid URL.')

    // Loading...
    document.querySelector("#result").innerHTML = `<p>Loading...</p>`;

    // Pass url to Sentiment Analysis API.
    fetchData(url)
        .then((res) => res.json(), handleError)
        .then(updateUI)
        .catch((e) => {
            document.querySelector("#result").innerHTML = null;
            console.log('Something happened.', e)
        });

}

export function isValidURL(test){
    return test.match(/https?:\/\/(www\.)?\w+\.\w{2,10}(\/.*)?/g);
}

export function buildTable(res) {
    let keys = Object.keys(res).filter(item => (typeof res[item] === 'string'));
    let ths = '', tds = '';
    keys.forEach(item => {
        ths += `<th>${item}</th>`
        tds += `<td>${res[item]}</td>`
    });
    let markup = `<table><thead><tr>${ths}</tr></thead><tbody><tr>${tds}</tr></tbody></table>`;
    return markup;
}

export function updateUI(res){
    let markup = buildTable(res);
    document.querySelector("#result").innerHTML = markup;
}

function handleError(e){
    alert("Error communicating with our servers. Please make sure the express server is running and then try again.");
    return console.log(e);
}


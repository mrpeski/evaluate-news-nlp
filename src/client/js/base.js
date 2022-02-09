
export const form = document.querySelector("#main-from");

export function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(this)
    const url = formData.get('url');

    if(!url) return alert('Please fill in the article url');
    if(!isValidURL(url)) return alert('Please enter a valid URL.')

    // Loading...
    document.querySelector("#result").innerHTML = `<p>Loading...</p>`;


    // Pass url to Sentiment Analysis API.
    fetch('http://localhost:8081/sentiment', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({url})
    }).then((res) => res.json(), handleError).then(updateUI)
        .catch((e) => console.log('Something happened.', e));

}

function isValidURL(test){
    return test.match(/https?:\/\/(www\.)?\w+\.\w{2,10}(\/.*)?/g);
}
function updateUI(res){
    let keys = Object.keys(res).filter(item => (typeof res[item] === 'string') );
    let ths = '', tds= '';
    keys.forEach(item => {
        ths +=`<th>${item}</th>`
        tds +=`<td>${res[item]}</td>`
    });
    let markup = `<table><thead><tr>${ths}</tr></thead>
    <tbody>${tds}</tbody></table>`;

    document.querySelector("#result").innerHTML = markup;

}
function handleError(e){
    alert("Error communicating with our servers. Please try again.");
    return console.log(e);
}



export const form = document.querySelector("#main-from");

export function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(this)
    const url = formData.get('url');

    if(!url) return alert('Please fill in the article url');
    if(!isValidURL(url)) return alert('Please enter a valid URL.')

    // Pass url to Sentiment Analysis API.

}

function isValidURL(test){
    return test.match(/https?:\/\/(www\.)?\w+\.\w{2,10}(\/.*)?/g);
}


import {form, handleSubmit} from "./base.js";

function main() {
	form.addEventListener('submit', handleSubmit);
}

document.addEventListener('DOMContentLoaded', main);

const log = () => console.log(form)

// Whatever is exported here will be available under ENLP;
export { log }

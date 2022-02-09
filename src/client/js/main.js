import {form, handleSubmit} from "./base.js";

function main() {
	// alert('Called!');
	form.addEventListener('submit', handleSubmit);
}

document.addEventListener('DOMContentLoaded', main);

import dotenv from 'dotenv';
import {FormData} from "formdata-node";
import fetch from "node-fetch"


dotenv.config();

console.log(`Your API key is ${process.env.API_KEY}`);

const formdata = new FormData();
formdata.append("key", process.env.API_KEY);
formdata.append("txt", "The 2022 Africa Cup of Nations is in the books and Senegal are champions for the first time in the country's history. Senegal outlasted Egypt in the final on Sunday, winning a penalty kick shootout (4-2) after the two sides were scoreless through 120 minutes. It's the first ever AFCON title for Senegal, who denied Egypt their eighth championship.\n" +
    "\n");
formdata.append("lang", "en");  // 2-letter code, like en es fr ...

const requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
};

const response = await fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
    .then(response => ({
        status: response.status,
        body: response.json()
    }))
    .then(({ status, body }) => body).then(body => console.log(body))
    .catch(error => console.log('error', error));

// console.log(response)

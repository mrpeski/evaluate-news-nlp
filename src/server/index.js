import dotenv from 'dotenv';
import {FormData} from "formdata-node";
import fetch from "node-fetch";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.route('/sentiment')
    .get(function(req,res){
        return res.json(process.env.API_KEY)
    }).post(async function(req, res){
        const result = await execFetch(req.body);
        return res.json(result);
    })

app.listen(8081, function(){
    console.log('Listening at port 8081')
})

function execFetch({url}){
    const formdata = new FormData();
    formdata.append("key", process.env.API_KEY);
    formdata.append("url", url);
    formdata.append("lang", "en");

    const requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
};
    return fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error));
}

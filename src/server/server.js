import dotenv from 'dotenv';
import axios from "axios";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();

function server(){
    const app = express();
    const router = express.Router();

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.use(cors());

    app.use(express.static('dist'))

    router.route('/sentiment')
        .get(function(req,res){
            return res.json(process.env.API_KEY)
        }).post(async function(req, res){
        const result = await execFetch(req.body);
        return res.json(result);
    })

    function execFetch({url}){
        const requestOptions = {
            url: url,
            key: process.env.API_KEY,
            lang: 'en'
        };
        return axios.post(
            "https://api.meaningcloud.com/sentiment-2.1",
            requestOptions)
            .then(response => response.data)
            .catch(error => console.log('error', error));
    }

    return {app, router};
}


export default server;

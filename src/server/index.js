const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


var aylien = require('aylien_textapi');
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

const app = express()
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})
let aylienData = [];

// Callback function to complete GET '/sentiment'
app.post('/sentiment', function (req, res) {
    let formText = req.body.formText;
 console.log(formText)
    textapi.sentiment({
        text: formText,
        mode: 'document'
    },
    function (error, response) {
        if (error === null) {
            res.send(response);
            let resp = response;
            console.log(resp)
            aylienData.push({ 'polarity': resp.polarity, 'polarity_confidence': resp.polarity_confidence, 'text': formText })
        } else {
            console.log(error);
        }
    }
    );
})
module.exports = app;

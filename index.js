const API_PORT = 3000;
const PACKAGE_NAME = 'api.payment';

var express = require('express');
const { getToken } = require('./src/use-cases/getToken');



var app = express();


app.get('/', (req, res) => {
    res.send(`${PACKAGE_NAME} : 👋`);
})

app.get('/getToken', async (req, res) => {
    try {
        const token = await getToken(12000, "1qaz@WSX2");    
        res.send(token);
    } catch (error) {
        console.log(error.message);
        res.send(error.message);
    }
})

function processError(res, error){
    console.log(error);
    res.send("Some error");
}

app.listen(API_PORT,function(){
    console.log('Init ' + PACKAGE_NAME + ' on ' + API_PORT);
    console.log('Access URL : http://localhost:' + API_PORT);
});
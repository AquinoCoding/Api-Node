const express = require('express');
const insertBling = require('./controllers/insert')
const pipeDriverApi = require('./controllers/pipedriver')
const authConfig = require('./bin/auth.json')

const app = express();

app.use(express.json())

app.listen(3000);
console.log('http://localhost:3000/')


app.get('/blind-insert', async (req, res) => {

    try {
        const {} = await insertBling.get(`produtos/json/&apikey=${authConfig.blingToken}`);
        return res.send('OK')
    }
    catch (error) {
        res.send({error: error.message})
    }
})

app.get('/pipe-driver', async (req, res) => {

    try {
        const {} = await pipeDriverApi.get(`deals/?api_token=${authConfig.pipeToken}`);
        return res.send('OK 2 ')
    }
    catch (error) {
        res.send({error: error.message})
    }
})


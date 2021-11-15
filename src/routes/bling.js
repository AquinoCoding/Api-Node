const express = require('express');
const router = express.Router();
const authConfig = require('../bin/auth.json');
const insertBling = require('../controllers/insert');

router.get('/', async (req, res) => {

    try {
        const { data } = await insertBling.get(`produtos/json/&apikey=${authConfig.blingToken}`);
        
        return res.send(`OK`);

    }
    catch (error) {
        res.send({error: error.message})
    }
});

router.post('/', async (req, res) => {
    
    const postBody = req.body;
    console.log(postBody);

    try {
        const data = await insertBling.post(`pedido/json/&apikey=${authConfig.blingToken}&xml={${pedido}}`);
        ajax({
            method: "POST",
            url: data,
            data: {nome: "Lucas"}
         });

        return res.end('ok -->'+JSON.stringify(postBody));

    }
    catch (error) {
        res.send({error: error.message})
    }

});

module.exports = router;
const express = require('express');
const router = express.Router();
const authConfig = require('../bin/auth.json');
const pipeDriverApi = require('../controllers/pipedriver');
const insertBling = require('../controllers/insert');
const SaveDataBase = require('../models/mainbase');

router.get('/', async (req, res) => {

    try {

        var { data } = await pipeDriverApi.get(`deals/summary/?api_token=${authConfig.pipeToken}`);
        lenghtValue = { count : data.data.values_total.BRL.count };

        for (var i = 1;; i++) {

            var { data }  = await pipeDriverApi.get(`deals/${i}?api_token=${authConfig.pipeToken}`);

            const save = await SaveDataBase.create(req.body)

            save.values = {value: data.data.formatted_value};
            save.username = {negocio: data.data.title};

            if (lenghtValue.count === i){
                return res.send('IN RUNNING')
            }
        }
    }catch (error) {
        res.send({error: error.message})
    }
})

router.post('/', async (req, res) => {

    var { data }  = await pipeDriverApi.get(`deals/${i}?api_token=${authConfig.pipeToken}`);
    var valor = {value: data.data.formatted_value};
    var cliente = {negocio: data.data.title};

    var xml = `<?xml version="1.0" encoding="UTF-8"?><pedido><cliente>${cliente}</cliente><volume><servico></servico></volume><item><descricao>produto</descricao><qtde>1</qtde><vlr_unit>1</vlr_unit>${valor}</item><parcela><vlr>1</vlr></parcela></pedido>`;


    const xmlJson = parseString(xml);

    parseString(xml, function(error, result) {
        if (error) {
            console.log('ERROR: '+ error);
            return;
        }

        //console.dir(JSON.stringify(result));
    
        return JSON.stringify(result);
    
        });

    try {
        
        var data = await insertBling.post(`pedido/json/&apikey=${authConfig.blingToken}&xml=${xmlJson}`);
        
        console.log({ data });
    }
    catch (error) {
        res.send({error: error.message})
    }

})

module.exports = router;
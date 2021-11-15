const express = require('express');
const router = express.Router();
const authConfig = require('../bin/auth.json');
const pipeDriverApi = require('../controllers/pipedriver');

router.get('/', async (req, res) => {

    try {

        var { data } = await pipeDriverApi.get(`deals/summary/?api_token=${authConfig.pipeToken}`);
        quantidade = { count : data.data.values_total.BRL.count };

        
        for (var i = 1;; i++) {

            var { data }  = await pipeDriverApi.get(`deals/${i}?api_token=${authConfig.pipeToken}`);
            console.log({ negocio: data.data.title }, { value: data.data.formatted_value });

            if (quantidade.count === i){
                return res.send('OK')
            }

        }
        
    }catch (error) {
        res.send({error: error.message})
    }
});


module.exports = router;
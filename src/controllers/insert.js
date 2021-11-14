const axios = require('axios');

const insertBling = axios.create({
    baseURL: `https://bling.com.br/Api/v2/`
});

module.exports = insertBling;


const axios = require('axios');

const pipeDriverApi = axios.create({
    baseURL: `https://companydomain.pipedrive.com/api/v1/`
});

module.exports = pipeDriverApi;
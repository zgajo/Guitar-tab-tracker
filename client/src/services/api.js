const axios = require('axios');

module.exports = () => {

    return axios.create({
        baseURL: 'http://localhost:3000'
    })

}
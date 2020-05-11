var request = require('request');
const fs = require('fs');
const logger = require('../config/logger')
exports.apiFirst = (req, res) => {
    const url = 'https://data.ct.gov/api/views/rybz-nyjw/rows.json?accessType=DOWNLOAD';
    request.get(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log('Write data from:', error)
            logger.info(url)
            logger.info(JSON.parse(body));
        }
    });
    res.send({ 'statusCode': 200, 'message': 'success' })
};
exports.apiSecond = (req, res) => {
    const url = 'https://data.townofcary.org/api/v2/catalog/datasets/rdu-weather-history';
    request.get(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log('Write data from:', error)
            logger.info(url)
            logger.info(JSON.parse(body));
        }
    });
    res.send({ 'statusCode': 200, 'message': 'success' })
};
exports.apiThird = (req, res) => {
    const url = 'https://data.ct.gov/api/views/rybz-nyjw/rows.json?accessType=DOWNLOAD';
    request.get(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log('Write data from:', error)
            logger.info(url)
            logger.info(JSON.parse(body));
        }
    });
    res.send({ 'statusCode': 200, 'message': 'success' })
};
exports.apiFourth = (req, res) => {
    const url = 'https://api.github.com/users/mralexgray/repos';
    request.get(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log('Write data from:', error)
            logger.info(url)
            logger.info(JSON.parse(body));
        }
    });
    res.send({ 'statusCode': 200, 'message': 'success' })
};
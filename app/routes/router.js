module.exports = (app) => {
    const notes = require('../controller/retriveData.controller');
    const product = require('../controller/questionThird.controller')

    // Get data from first API
    app.get('/firstapi', notes.apiFirst);
    //Get data from Second API
    app.get('/secondapi', notes.apiSecond);
    // Get data from Third API
    app.get('/thirdapi', notes.apiThird);
    // Get data from Fourth API
    app.get('/fourthapi', notes.apiFourth);
    app.post('/createProduct', product.create);
    app.post('/findProduct', product.findOne)

}
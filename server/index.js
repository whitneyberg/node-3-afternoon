require('dotenv').config()
const express = require('express')
const massive = require('massive');
const products_Controller = require('./products_Controller')

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING).then(dbObj => {
    app.set('db', dbObj);
}).catch(err => console.log(err));

app.use(express.json())

app.post('/api/products', products_Controller.create);
app.get('/api/products', products_Controller.getAll);
app.get('/api/products', products_Controller.getOne);
app.put('/api/products', products_Controller.update);
app.delete('/api/products', products_Controller.delete)

app.listen(SERVER_PORT ,() => {console.log(`server listening on ${SERVER_PORT}`)});





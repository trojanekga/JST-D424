const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const dbService = require('./dbService');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));

// Create
app.post('/insert', (request, response) => {

});

// Read
app.get('/getAll', (request, response) => {
    const db = dbService.getDbServiceInstance();

    const result = db.getAllData();

    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));
    
})

// Update



// Delete


app.listen(process.env.PORT, () => console.log('App is running'));

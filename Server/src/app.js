const express = require('express');
const morgan = require('morgan');
const pool = require('./config/configData.js');
const port  = 5000;
const routes = require('./routes/index.js');
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app)


app.listen(port,()=>{  
    console.log(`listening sucessful port ${port}`)
   
})
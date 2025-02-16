const express = require('express');
const morgan = require('morgan');
const pool = require('./config/configData.js');
const port  = 4000;
const routes = require('./routes/index.js');
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app)


app.listen(port,()=>{  
    // pool.getConnection((err,connection)=>{
    //     if(err){
    //         console.log(err)
    //     }
    //     if(connection){
    //         console.log('Database connected')
    //         connection.release();
    //     }
    // });
    console.log(`listening sucessful port ${port}`)
   
})
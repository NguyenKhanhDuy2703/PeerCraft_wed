const express = require('express');
const morgan = require('morgan');
const port  = 5000;
const routes = require('./routes/index.js');
const cors = require('cors');
const app = express();
const corsOptions = {
    origin: 'http://localhost:3001', // Đảm bảo URL này khớp với frontend của bạn
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // Nếu bạn đang gửi cookie hoặc xác thực
  };
  app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app)

app.listen(port,()=>{  
    console.log(`listening sucessful port ${port}`)
   
})
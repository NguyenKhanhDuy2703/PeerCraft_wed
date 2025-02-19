const express = require('express'); 
const routes = express.Router();
const registerController = require('../controllers/auth/registerController.js');
const loginController = require('../controllers/auth/loginController.js');
routes.post('/register', registerController);
routes.post('/login', loginController); 
module.exports = routes;   

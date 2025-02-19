const e = require('express');
const userModel = require('../../models/user.model.js');
const loginController = async (req, res) => {
     const user = req.body;
       await userModel.getUserByAccount(user.account , user.password,  (error, result) => {
            console.log(result);    
            if(error) {
                return res.status(500).json({
                    message: 'get user by account failed',
                    error: error
                })
            }
            if(result.length === 0) {
                return res.status(404).json({
                    message: 'account not found'
                })
            }

            
            if(user.password !== result[0].password ) {
                return res.status(401).json({
                    message: 'password is incorrect',
                    error: error.message
                })
            }
            return res.status(200).json({
                message: 'login successfully',
                data: result[0]
            })
        })

}
module.exports = loginController;
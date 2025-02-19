const userModel = require('../../models/user.model.js');
const registerController = async (req, res) => { 
    const newUser = req.body;   
    console.log(newUser);
    userModel.createNewUser(newUser, (error, result) => {
            if(error) {
                return res.status(500).json({
                    message: 'create new user failed',
                    error: error
                })
            }
            return res.status(200).json({
                message: 'create new user successfully',
                data: result   
            })

    });

}
module.exports = registerController;  
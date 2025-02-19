 const {createUser , getUserByAccount}  = require('../repositories/user.query');
const pool = require('../config/configData');
const userModel  =  {
    async createNewUser  ( newUser , cb) {
        const connection = await pool.getConnection();
        try {
           const resutl =  await connection.query(createUser, [newUser.account, newUser.password, newUser.email]);
           cb(null, resutl)
        } catch (error) {
            cb(error, null)
        }finally {
            connection.release();
        }
    },
    async getUserByAccount (account, password , cb) {
        const connection = await pool.getConnection();
        try {
            const result = await connection.query(getUserByAccount, [account , password]);
            cb(null, result[0])
        } catch (error) {
            cb(error, null)
        }finally {  
            connection.release();
        }
    }


}
module.exports = userModel;  
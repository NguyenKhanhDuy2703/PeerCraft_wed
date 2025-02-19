const createUser = `INSERT INTO peercraft.user(account , password , email ) VALUES(?, ?, ? )`
const getUserByAccount = `SELECT * FROM peercraft.user WHERE account = ?`

module.exports = {
    createUser ,
    getUserByAccount
}
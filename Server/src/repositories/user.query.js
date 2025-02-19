const createUser = `INSERT INTO peercaft.user(account , password , email, phone ) VALUES(?, ?, ?, ? )`
const getUserByAccount = `SELECT * FROM peercaft.user WHERE account = ?`

module.exports = {
    createUser ,
    getUserByAccount
}
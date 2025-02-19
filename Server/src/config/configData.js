const mySql2 = require('mysql2/promise');
const { dot } = require('node:test/reporters');
require('dotenv').config();

// Database connection
const pool = mySql2.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
  });

(async () => {
  
    try {
        const connection = await pool.getConnection();
        console.log('Database connected...');
        connection.release();
    } catch (error) {
        console.error('Database connection failed');
        console.error(error);
    }
}
)();

module.exports = pool;
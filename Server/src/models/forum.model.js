const forum  = {
 async createNewForum ( newForum , cb) {
    const connection = await pool.getConnection();
    try {
       const result =  await connection.query(createForum, [newForum.name, newForum.description, newForum.category]);
       cb(null, result)
    } catch (error) {
        cb(error, null)
    }finally {
        connection.release();
    }

 },
 async getForumsByName (name , cb) {
    const connection = await pool.getConnection();
    try {
        const result = await connection.query(getForumByName, [name]);
        cb(null, result[0])
    } catch (error) {
        cb(error, null)
    }finally {  
        connection.release();
    }
 }
};
module,exports = forum;
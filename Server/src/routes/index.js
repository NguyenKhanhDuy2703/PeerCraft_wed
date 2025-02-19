const auth = require('./auth.routes.js');
function routes(app) {
    app.use('/api/auth',auth );
}
module.exports = routes;
const newRouter = require('./news');
const siteRouter = require('./news');

function route(app) { 
app.use('/news', newRouter); 
app.use('/', siteRouter); 

}

module.exports= route;
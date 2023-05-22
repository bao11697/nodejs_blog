const express = require('express');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const  methodOverride = require('method-override');
var path = require('path');
const app = express();
const port = 5000;
const db = require('./config/db');
const route = require('./routes');

// Connect to DB check
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(methodOverride('_method'))
// HTTP logger
// app.use(morgan('combined'))

//App Template engine handlebars
app.engine('hbs', 
    handlebars.engine({ 
        extname: '.hbs' ,
        helpers : {
            sum: (a,b)=> a + b
        }
    }));
// Đặt ứng dụng express view engine sử đụng handlebars
app.set('view engine', 'hbs');
// app.set('views', 'handlebars');
app.set('views', path.join(__dirname, 'resources','views'));

// Route init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

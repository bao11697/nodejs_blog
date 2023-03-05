
const express = require('express')
const handlebars = require ('express-handlebars');
const morgan = require('morgan')
var path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname,'public')))

// console.log(path.join(__dirname,'public'))
// HTTP logger
app.use(morgan('combined'))  

//App Template engine handlebars
// app.engine('handlebars', handlebars.engine({defaultLayout : 'main'}));
app.engine('hbs', handlebars.engine({extname: '.hbs'}))
// Đặt ứng dụng express view engine sử đụng handlebars
app.set('view engine', 'hbs');
// app.set('views', 'handlebars');
app.set('views',path.join(__dirname,'resources/views'))

app.get('/', (req, res) => {
  res.render('home');
    // return res.send('123')
})

app.get('/news', (req, res) => {
  res.render('news');
    // return res.send('123')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
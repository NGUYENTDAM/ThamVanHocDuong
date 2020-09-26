const express = require('express');
const exphbs = require('express-handlebars');
var express_handlebars_sections = require('express-handlebars-sections');
const app = express();

app.use(express.urlencoded({
  extended: true
}));
app.engine('hbs', exphbs({
  layoutsDir: 'views/_layouts',
  defaultLayout: 'main',
  partialsDir: 'views/_partials',
  extname: '.hbs',
  helpers:{
    section: express_handlebars_sections()        
}
}));
app.set('view engine', 'hbs');

// app.get('/', function (req, res) {
//   res.render('home');
// })


app.use('/', require('./routes/article.route'));

app.use(function (req, res) {
  res.render('404', { layout: false });
})

const PT = 3000;
app.listen(process.env.PORT||PT, function () {
  console.log(`Server is running at http://localhost:${PT}`);
})
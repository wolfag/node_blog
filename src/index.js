const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));

app.engine('hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.get('/', (req, res) => {
  return res.render('home');
});
app.get('/news', (req, res) => {
  return res.render('news');
});

app.listen(port, () => console.log(`-->sever start add ${port}`));

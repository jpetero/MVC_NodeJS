const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');

const heroesRoute = require('./routes/HeroesRoutes');

const app = express();

app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({ extended: true }));

app.engine('hbs', handlebars({ defaultLayout: 'main', extname: '.hbs' }));

app.set('view engine', 'hbs');

app.set('views', `${__dirname}/views`);

app.get('/about', (req, res) => {
  res.render('about');
});

app.use('/api/heroes', heroesRoute);

const port = 5000;
app.listen(port, () => {
  console.log(`Student App is running @ http://localhost:${port}`);
});

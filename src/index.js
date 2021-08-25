const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 3000;
const routes = require('./routes');
app.use(express.static(path.join(__dirname, 'public')));
//http logger

app.use(morgan('combined'));
// template engine
app.engine('.hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// chạy thì bấm npm start
//đường đi;
// routes init
routes(app);

//127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

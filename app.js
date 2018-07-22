const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');
const {promisify} = require('es6-promisify');
const MongoStore = require('connect-mongo')(session);
require('./config/passport');
const errorHandlers = require('./controllers/errorHandlers');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'dist')));

app.use(session({
  secret: process.env.SECRET,
  key: process.env.KEY,
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use((req, res, next) => {
  res.locals.flashes = req.flash();
  res.locals.user = req.user || null;
  next();
});

// app.use((req, res, next) => {
//   req.login = promisify(req.login, req);
//   next();
// });

// Attach validation methods to every request
app.use(expressValidator());

app.use('/', routes);

app.use(errorHandlers.notFound);
if (app.get('env') === "development") {
  app.use(errorHandlers.developmentErrors);
}
app.use(errorHandlers.productionErrors);



module.exports = app;
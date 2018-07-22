const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'});

// Models
require('./models/User');
require('./models/List');
require('./models/Item');

// Connect to DB
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('open', () => {
  console.log('Connected to mongoDB');
});

// Let's go
const app = require('./app');
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`App running on port ${process.env.PORT}`);
});
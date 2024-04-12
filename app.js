require('@babel/register');
require('dotenv').config();

const express = require('express');
const serverConfig = require('./config/serverConfig');
const indexRouters = require('./routes/index.routes');

const app = express();
const PORT = process.env.PORT || 5000;

serverConfig(app);
app.use('/', indexRouters);

app.listen(PORT, () => {
  console.log('Server works');
});

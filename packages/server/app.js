const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const router = require('./api/routes/index');

const HttpError = require('./api/lib/utils/http-error');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(`/api/`, router);

app.use((err, req, res) => {
  if (err instanceof HttpError) {
    res.status(err.httpStatus);
    /* if (err.body) {
      return res.json(err.body);
    } */
    return res.send({ error: err.message });
  }

  res.status(500).send({ error: err });
});

module.exports = app;

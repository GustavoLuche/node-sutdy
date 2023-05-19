const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

//  const indexRouter = require('./routes/index');

// view engine setup
const mustacheExpress = require('mustache-express');
const engine = mustacheExpress();
app.engine('mustache', engine);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache');

app.use(express.json());
app.use(express.urlencoded({ extende: false }));
app.use(cookieParser());
app.use(express.static(paht.jon(__dirname, 'public')));

// app.user('/', indexRouter);

// error handler
app.use(function(err, req, res, next) {
    /// set locals, only provideing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
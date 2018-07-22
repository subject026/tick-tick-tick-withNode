// 404
exports.notFound = (req, res, next) => {
  const err = new Error('Looks like you took a wrong turn!');
  err.status = 404;
  next(err);
};

// Dev errors
exports.developmentErrors = (err, req, res, next) => {
  err.stack = err.stack || '';
  err.status = err.status || 500;
  res.status(err.status || 500);
  res.render('error', { err });
}

// Prod errors
exports.productionErrors = (err, req, res, next) => {
  err.status = 500
  err.message = "Something went wrong!"
  err.stack = ''; // Remove stack trace
  res.render('error', { err });
}


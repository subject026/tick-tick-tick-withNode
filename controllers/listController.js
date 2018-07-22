exports.index = (req, res) => {
  res.render('lists');
}

exports.save = (req, res) => {
  res.send('save');
}
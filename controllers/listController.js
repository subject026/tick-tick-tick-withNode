exports.index = (req, res) => {
  res.render('lists');
}

// AJAX API

exports.save = (req, res) => {
  const save = {
    data: {
      message: "Saved my lovely!"
    }
  }
  res.json(save);
}
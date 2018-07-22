const mongoose = require('mongoose');
const List = mongoose.model('List');

exports.index = (req, res) => {
  res.render('lists');
}

// AJAX API

exports.save = async (req, res) => {
  console.log("Save a list?!?!?!")
  // const list = new List(req.body)
  console.log(req.body.title);
  const save = {
    data: {
      message: "Saved my lovely!"
    }
  }
  res.json(save);
}
const mongoose = require('mongoose');
const List = mongoose.model('List');

exports.index = async (req, res) => {
  const lists = await List.find({owner: req.user._id});
  res.render('lists', {lists});
}

exports.getLists = async (req, res) => {
  const lists = await List.find({ owner: req.user._id });
  res.json(lists);
}

// AJAX API

exports.save = async (req, res) => {
  req.body.owner = req.user._id;
  console.log(req.body)
  const list = new List(req.body)
  try {
    await list.save();
  } catch (error) {
    res.json({ error: error });
    return;
  }
  const save = {
    data: {
      message: "Saved my lovely!"
    }
  }
  res.json(save);
}
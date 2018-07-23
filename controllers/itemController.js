const mongoose = require('mongoose');
const Item = mongoose.model('Item');

exports.index = async (req, res) => {
  const lists = await List.find();
  res.render('lists', {lists});
}

// AJAX API
exports.save = async (req, res) => {
  req.body.owner = req.user._id;
  const item = new Item(req.body);
  try {
    await item.save();
  } catch(error) {
    res.json({error: error});
    return;
  }
  const save = {
    data: {
      success: true,
      message: "Saved my lovely!"
    }
  }
  res.json(save);
}
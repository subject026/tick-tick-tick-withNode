const mongoose = require('mongoose');
const Item = mongoose.model('Item');

exports.index = async (req, res) => {
  const lists = await List.find();
  res.render('lists', {lists});
}

// AJAX API
exports.saveItem = async (req, res) => {
  req.body.owner = req.user._id;
  // const parent = req.body.parent;
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

exports.getItems = async (req, res) => {
  const parentId = req.query.listId;
  const items = await Item.find({parent: parentId});
  console.log("item.find()... : ", items);
  res.json(items);
}
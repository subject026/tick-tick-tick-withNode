const mongoose = require('mongoose');
const Item = mongoose.model('Item');

exports.index = async (req, res) => {
  const lists = await List.find();
  res.render('lists', {lists});
}

// AJAX API

exports.save = async (req, res) => {
  console.log("Save an ITEM!?!?!");
  console.log(req.body);
  // const list = new Item(req.body)
  // try {
  //   await list.save();
  // } catch(error) {
  //   res.json({error: error});
  //   return;
  // }
  const save = {
    data: {
      success: true,
      message: "Saved my lovely!"
    }
  }
  res.json(save);
}
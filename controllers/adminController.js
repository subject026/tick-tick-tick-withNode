const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.userAdmin = async (req, res) => {   
  const users = await User.find();
  res.render('userAdmin', { users, currentPage: "admin" });
}

require('dotenv').config({ path: __dirname + '/../variables.env' });
const fs = require('fs');

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE);
mongoose.promise = global.Promise;

const User = require('../models/User');

const users = JSON.parse(fs.readFileSync(__dirname + '/dummyUsers2.json', 'utf-8'));

async function saveUser(element) {
  const newUser = new User(element);
  await newUser.save();
}

async function loadData() {
  console.log("loading data")
  const uzers = users.map(item => {
    const obj = {};
    obj.email = item.email;
    obj.salt = item.salt;
    obj.hash = item.hash;
    obj._id = item._id;
    obj.isAdmin = item.iAdmin;
    obj.__v = item.__v;
    return obj;
  });
  console.log(uzers);
  uzers.forEach(element => {
    try {
      saveUser(element);
    } catch(err) {
      if (err) console.log(err);
      return;
    }
  });
  try {
    // console.log(users)
    await User.insertMany(uzers);
    console.log('👍👍👍👍👍👍👍👍 Done!');
    process.exit();
  } catch(e) {
    console.log('\n👎👎👎👎👎👎👎👎 Error! The Error info is below but if you are importing sample data make sure to drop the existing database first with.\n\n\t npm run blowitallaway\n\n\n');
    console.log(e);
    process.exit();
  }
}

async function deleteData() {
  console.log("Deleting data")
  await User.remove();
  console.log('Data Deleted. To load sample data, run\n\n\t yarn loadSampleData \n\n');
  process.exit();
}

if (process.argv.includes('--delete')) {
  deleteData();
} else {
  loadData();
  process.exit();
}

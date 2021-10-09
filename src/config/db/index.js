const mongoose = require('mongoose');

async function connect({ user, password }) {
  try {
    await mongoose.connect(
      `mongodb+srv://${user}:${password}@devconnector.yonbx.mongodb.net/blog_f8?retryWrites=true&w=majority`,
    );
    console.log('connect to db ok');
  } catch (error) {
    console.log('connect to db err:', error);
  }
}

module.exports = { connect };

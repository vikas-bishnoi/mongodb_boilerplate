// "C:\Program Files\MongoDB\Server\4.2\bin\mongod.exe"

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// To fix all deprecation warnings, follow the below steps:
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// Replace update() with updateOne(), updateMany(), or replaceOne()
// Replace remove() with deleteOne() or deleteMany()
// unless you want to count how many documents are in the whole collection (no filter). 
// In the latter case, use estimatedDocumentCount().
// Replace count() with countDocuments(), 


// Making a user model
const UserSchema = new Schema({
  name: String,
  postCount: Number
});

//  Creating User model? class? whatever
const User = mongoose.model('user', UserSchema);

// This lets us use user.js in other file
module.exports = User;

// Assigning package to a variable
// "C:\Program Files\MongoDB\Server\4.2\bin\mongod.exe"
const mongoose = require('mongoose');
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


// Connecting mongoose to mongo database
// Used before hook to connect to mongodb only once for all tests
before((done) => {
  mongoose.connect('mongodb://localhost/users_test');
  mongoose.connection
    .once('open', () => { done( ); })
    .on('error', (error) => {
      console.warn('Warning', error);
    });
});


// Before each test empties the database
beforeEach((done) => {
  // It will take some time but mocha is asyncronous and will run instantly
  mongoose.connection.collections.users.drop(() => {
    // Ready to run next test
     done();
  });
});

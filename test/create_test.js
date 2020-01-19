// This file is used to create a new user and save it to the database
// "C:\Program Files\MongoDB\Server\4.2\bin\mongod.exe"
const assert = require('assert');
const User = require('..\\src\\user');


describe('Creating records', () => {
  // done is included in all its
  it('saves a user', (done) => {
    // Access all the files in src/user.js
    const joe = new User({ name: 'Joe'});
    // Promises. Getting a callback when joe is successfully saved
    joe.save()
      .then(() => {
        // Has joe been saved?
        assert(!joe.isNew);
        done();
      });

  });
});

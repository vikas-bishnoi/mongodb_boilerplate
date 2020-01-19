const assert = require('assert');
const User = require('../src/user');

describe('Reading users from database', () => {
  let joe;
  // A beforeEach hook that will run before
   // User.find(criteria) and User.findOne(criteria)
  beforeEach((done) => {
    joe = new User({ name: 'Joe' });
    joe.save()
      .then(() => { done() });
  });

  it('finds all users with name Joe', (done) => {
    User.find({ name: 'Joe'})
    .then((users) => {
      // console.log(users);
      // assert(users[0]._id === joe._id); wont work because id is in ObjectId data type
      console.log(users[0]._id)
      console.log(joe._id)
      assert(users[0]._id.toString() === joe._id.toString());
      done();
    });
  });

  it('find a user with a particular id', (done) => {
    User.findOne({ _id : joe._id})
      .then((user) => {
        assert(user.name === 'Joe');
        done();
      });
  })
});



    // "test": "nodemon --exec 'mocha -R min'"
    // "test": "nodemon --exec \"mocha -R min\""
const assert = require("assert");
const User = require("../src/user");

// Model class - User
// model instance - user(joe)

describe('Updating records', () => {
	let joe;
	beforeEach((done) => {
		joe = new User({name: 'Joe'});
		joe.save()
			.then(() => {
				done();
			});
	});

	function assertName(action, done) {
		action
			.then(() => User.find({}))
			.then((users) => {
				assert(users.length === 1);
				assert(users[0].name ==='Alex');
				done();
			});
	}


	it('instance update using set and save', (done) => {
		joe.set('name', 'Alex');
		assertName(joe.save(), done);	
	});


	it('model instance update using user.update', (done) => {
		assertName(joe.updateOne({name: 'Alex' }), done);
	});


	it('Model class update using User.update', (done) => {
		assertName(User.updateMany({name: 'Joe' }, {name: 'Alex' }), done);
	});


	it('Model class update using User.findOneAndUpdate', (done) => {
		assertName(User.findOneAndUpdate({name: 'Joe' }, {name: 'Alex' }), done);
	});


	it('Model class update using User.findByIdAndUpdate', (done) => {
		assertName(User.findByIdAndUpdate(joe._id, {name: 'Alex' }), done);
	});

});
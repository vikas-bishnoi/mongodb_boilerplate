const assert = require("assert");
const User = require("../src/user");
// mongoose.set('useFindAndModify', false);

// Model class - User
// model instance - user(joe)
describe('Deleting a user', () => {
	let joe;
	beforeEach((done) => {
		joe = new User({name: 'Joe'});
		joe.save()
			.then(() => done());
	});

	it('model instance remove', (done) =>{
		// joe
		// joe.remove()
		joe.deleteOne()
			.then(() => User.findOne({name: 'Joe'}))
			.then((user) => {
				assert(user===null);
				done();
			});
		
		// 	Equivalent code but a lil nastier
		
		// joe.remove()
		// .then(() => {
		// 	User.findOne({name: 'Joe'})
		// 	.then((user) => {
		// 		assert(user===null);
		// 		done();
		// 	});
		// });
	});
	
	it('class method remove', (done) => { 
		//  User. Remves a bunch of records with a given criteria
		// User.remove({name: 'Joe'})
		User.deleteMany({name: 'Joe'})
		.then(() => User.findOne({name: 'Joe'}))
			.then((user) => {
				assert(user===null);
				done();
			});
	});
	
	it('class method findOneAndRemove', (done) => {
		// Works by finding and removing single user in User modell with certain criteria 
		User.findOneAndRemove({name: 'Joe'})
		.then(() => User.findOne({name: 'Joe'}))
			.then((user) => {
				assert(user===null);
				done();
			}); 
	});

	it('class method findByIdAndRemove', (done) => {
		// Works by finding a single user in User modell by id and removing it 
		User.findByIdAndRemove(joe._id)
		.then(() => User.findOne({name: 'Joe'}))
			.then((user) => {
				assert(user===null);
				done();
			}); 
	});
	
});
 
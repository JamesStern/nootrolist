Meteor.publish('nootropics', function() {

	return Nootropics.find({});
	
	//return Nootropics.find({author: this.userId});
});

Meteor.publish('singleNootropic', function(id) {
	check(id, String);

	return Nootropics.find({_id: id});
	
	//return Nootropics.find({author: this.userId});
});

Meteor.publish('brands', function() {

	return Brands.find({});
	
});

Meteor.publish('singleBrand', function(id) {
	check(id, String);

	return Brands.find({_id: id});
	
	//return Nootropics.find({author: this.userId});
});

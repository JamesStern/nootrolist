Template.Brands.onCreated(function(){
	var self = this;
	self.autorun(function() {
		self.subscribe('brands');
	});
});

Template.Brands.helpers({
	brands: ()=> {
		return Brands.find({});
	}
});
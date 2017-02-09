Template.BrandSingle.onCreated(function(){
	var self = this;
	self.autorun(function() {
		var name = FlowRouter.getParam('name');
		self.subscribe('singleBrand', name);
	});
});

Template.BrandSingle.helpers({
	nootropic: ()=> {
		var name = FlowRouter.getParam('name');
		return Brands.findOne({name: name});
	}
});
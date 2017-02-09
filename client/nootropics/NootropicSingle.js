Template.NootropicSingle.onCreated(function(){
	var self = this;
	self.autorun(function() {
		var id = FlowRouter.getParam('id');
		self.subscribe('singleNootropic', id);
	});
});

Template.NootropicSingle.helpers({
	nootropic: ()=> {
		var id = FlowRouter.getParam('id');
		return Nootropics.findOne({_id: id});
	}
});

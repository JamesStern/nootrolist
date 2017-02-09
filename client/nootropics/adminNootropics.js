Template.adminNootropics.onCreated(function(){
	var self = this;
	self.autorun(function() {
		self.subscribe('nootropics');
	});
});

Template.adminNootropics.helpers({
	nootropics: ()=> {
		return Nootropics.find({});
	}
});

Template.adminNootropics.events({
	'click .new-nootropic': () => {
		Session.set('newNootropic', true);
	}
});
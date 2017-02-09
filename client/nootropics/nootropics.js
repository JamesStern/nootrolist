Template.Nootropics.onCreated(function(){
	var self = this;
	self.autorun(function() {
		self.subscribe('nootropics');
	});
});

Template.Nootropics.helpers({
	nootropics: ()=> {
		return Nootropics.find({});
	}
});

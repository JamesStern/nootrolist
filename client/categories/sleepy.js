Template.Sleepy.onCreated(function(){
	var self = this;
	self.autorun(function() {
		self.subscribe('nootropics');
	});
});

Template.Sleepy.helpers({
	sleepy_nootropics: ()=> {
		return Nootropics.find({"category.name":"Sleepy"});;
	}
});
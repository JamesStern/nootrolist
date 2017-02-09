Template.Happy.onCreated(function(){
	var self = this;
	self.autorun(function() {
		self.subscribe('nootropics');
	});
});

Template.Happy.helpers({
	happy_nootropics: ()=> {
		return Nootropics.find({"category.name":"Happy"});;
	}
});
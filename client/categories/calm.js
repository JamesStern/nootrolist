Template.Calm.onCreated(function(){
	var self = this;
	self.autorun(function() {
		self.subscribe('nootropics');
	});
});

Template.Calm.helpers({
	calm_nootropics: ()=> {
		return Nootropics.find({"category.name":"Calm"});;
	}
});
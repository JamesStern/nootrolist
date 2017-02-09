Template.Energized.onCreated(function(){
	var self = this;
	self.autorun(function() {
		self.subscribe('nootropics');
	});
});

Template.Energized.helpers({
	energized_nootropics: ()=> {
		return Nootropics.find({"category.name":"Energized"});;
	}
});
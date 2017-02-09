Template.Focused.onCreated(function(){
	var self = this;
	self.autorun(function() {
		self.subscribe('nootropics');
	});
});

Template.Focused.helpers({
	focused_nootropics: ()=> {
		return Nootropics.find({"category.name":"Focused"});;
	}
});

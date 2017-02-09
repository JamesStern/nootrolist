Template.adminNootropic.onCreated(function(){
	this.editMode = new ReactiveVar(false);
});

Template.adminNootropic.helpers({
	updateNootropicId: function() {
		return this._id;
	},
	editMode: function() {
		return Template.instance().editMode.get();
	}

});

Template.adminNootropic.events({
	'click .fa-trash' : function() {
		Meteor.call('deleteNootropic', this._id);
	},
	'click .fa-pencil' : function(event, template) {
		template.editMode.set(!template.editMode.get());
	},
});
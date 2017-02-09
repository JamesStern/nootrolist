Nootropics = new Mongo.Collection('nootropics');

Nootropics.allow({
	insert: function(userId, doc) {
		return !!userId;
	},
	update: function(userId, doc) {
		return !!userId;
	}
});

Ingredient = new SimpleSchema ({
	name: {
		type: String
	},
	amount: {
		type: String
	}

});

Category = new SimpleSchema ({
	name: {
		type: String,
		allowedValues: ["Focused", "Energized", "Happy", "Calm", "Sleepy"],
		autoform: {
			afFieldInput: {
        		firstOption: "(Select a Category)"
      		}
		}
	}
});

NootropicSchema = new SimpleSchema ({
	name: {
		type: String,
		label: "Name"
	},
	brand: {
		type: String,
		label: "Brand",
		allowedValues: ["Brother Nature", "Nootrobox", "Natural Stacks", "TruBrain", "Nootropics City", "Onnit", "Optimind"],
		autoform: {
			afFieldInput: {
        		firstOption: "(Select a Brand)"
      		}
		}
	},
	category: {
    	type: [Category],
 
    },
	short_desc: {
		type: String,
		label: "Short Description"
	},
	long_desc: {
		type: String,
		label: "Long Description",
		autoform: {
			afFieldInput: {
				type: "textarea",
				rows: 10,
			}
		}
	},
	ingredients: {
		type: [Ingredient]
	},
	affiliate_url: {
		type: String,
		label: "Affiliate Link"
	},
	image_url: {
		type: String,
		label: "Product Image Url"
	},
	inStack: {
		type: Boolean,
		defaultValue: false,
		optional: true,
		autoform: {
			type: 'hidden'
		}
	},
	author: {
		type: String,
		label: "Author",
		autoValue: function() {
			return this.userId
		},
		autoform: {
			type: "hidden"
		}
	},
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function() {
			return new Date()
		},
		autoform: {
			type: "hidden"
		}
	}
});

Meteor.methods({
	deleteNootropic: function(id) {
		Nootropic.remove(id);
	}
});

Nootropics.attachSchema( NootropicSchema );
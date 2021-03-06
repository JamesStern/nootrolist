Brands = new Mongo.Collection('brands');

Brands.allow({
	insert: function(userId, doc) {
		return true;
	}
});

BrandSchema = new SimpleSchema ({
	name: {
		type: String,
		label: "Name"
	},
	desc: {
		type: String,
		label: "Description"
	},
	website: {
		type: String,
		label: "Website"
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

Brands.attachSchema( BrandSchema );
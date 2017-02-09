Accounts.onLogin(function() {
	FlowRouter.go('nootropics');
});

Accounts.onLogout(function() {
	FlowRouter.go('home');
});

FlowRouter.route('/', {
	name: 'home',
	action() {
		if(Meteor.userId()) {
			FlowRouter.go('nootropics');
		}
		BlazeLayout.render('HomeLayout', {main: 'Nootropics'});
	}
});

FlowRouter.route('/nootropics', {
	name: 'nootropics',
	triggersEnter: [function(context, redirect) {
    	if(!Meteor.userId()) {
    		FlowRouter.go('home');
    	}
  	}],
	action() {
		BlazeLayout.render('MainLayout', {main: 'adminNootropics'});
	}
});

FlowRouter.route('/brands', {
	name: 'brands',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Brands'});
	}
});

FlowRouter.route('/nootropic/:id', {
	name: 'nootropic',
	action() {
		BlazeLayout.render('NootropicLayout', {main: 'NootropicSingle'});
	}
});

FlowRouter.route('/brand/:name', {
	name: 'brand',
	action() {
		BlazeLayout.render('HomeLayout', {main: 'BrandSingle'});
	}
});

FlowRouter.route('/focused', {
	name: 'focused',
	action() {
		BlazeLayout.render('CategoryLayout', {main: 'Focused'});
	}
});

FlowRouter.route('/energized', {
	name: 'energized',
	action() {
		BlazeLayout.render('CategoryLayout', {main: 'Energized'});
	}
});

FlowRouter.route('/happy', {
	name: 'happy',
	action() {
		BlazeLayout.render('CategoryLayout', {main: 'Happy'});
	}
});

FlowRouter.route('/calm', {
	name: 'calm',
	action() {
		BlazeLayout.render('CategoryLayout', {main: 'Calm'});
	}
});

FlowRouter.route('/sleepy', {
	name: 'sleepy',
	action() {
		BlazeLayout.render('CategoryLayout', {main: 'Sleepy'});
	}
});

FlowRouter.route('/login', {
	name: 'login',
	action() {
		BlazeLayout.render('LoginLayout');
	}
});
function DisplayComponent(friends) {
	this.myName = 'Armno';
	this.friends = friends.names;
	this.sayFirstFriend = friends.first;
}

DisplayComponent.annotations = [
	new angular.Component({
		selector: 'display',
		injectables: [FriendsService]
	}),
	new angular.View({
		templateUrl: 'profile/profile.html',
		directives: [
			angular.For,
			angular.If
		]
	})
];

DisplayComponent.parameters = [[FriendsService]];

document.addEventListener('DOMContentLoaded', function() {
	angular.bootstrap(DisplayComponent);
});

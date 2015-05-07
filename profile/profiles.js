function DisplayComponent() {
	this.myName = 'Armno';
	this.friends = ['Func', 'Class', 'Meh', 'Yo', 'Node'];
}

DisplayComponent.annotations = [
	new angular.Component({
		selector: 'display'
	}),
	new angular.View({
		templateUrl: 'profile/profile.html',
		directives: [
			angular.For,
			angular.If
		]
	})
];

document.addEventListener('DOMContentLoaded', function() {
	angular.bootstrap(DisplayComponent);
});

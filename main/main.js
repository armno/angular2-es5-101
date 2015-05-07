function AppComponent() {
}

AppComponent.annotations = [
	new angular.Component({
		selector: 'my-app'
	}),
	new angular.View({
		templateUrl: 'main/main.html'
	})
];

document.addEventListener('DOMContentLoaded', function() {
	angular.bootstrap(AppComponent);
});

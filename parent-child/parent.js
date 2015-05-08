function ParentComponent() {
	this.message = 'From parent!';
}

ParentComponent.annotations = [
	new angular.ComponentAnnotation({
		selector: 'parent'
	}),
	new angular.ViewAnnotation({
		templateUrl: 'parent-child/parent.html',
		directives: [ChildComponent]
	})
];

document.addEventListener('DOMContentLoaded', function() {
	angular.bootstrap(ParentComponent);
});

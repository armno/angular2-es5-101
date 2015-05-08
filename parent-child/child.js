function ChildComponent() {
	this.message = 'From your child!';
}

ChildComponent.annotations = [
	new angular.ComponentAnnotation({
		selector: 'child'
	}),
	new angular.ViewAnnotation({
		templateUrl: 'parent-child/child.html'
	})
];


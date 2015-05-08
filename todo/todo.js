function TodoListComponent() {
	this.todos = [
		'Eat fish',
		'Walk the cat',
		'Be calm'
	];

	this.addTodo = function(todo) {
		this.todos.push(todo);
	};

	this.doneTyping = function($event) {
		if ($event.which === 13) {
			this.addTodo($event.target.value);
			$event.target.value = null;
		}
	};
}

TodoListComponent.annotations = [
	new angular.ComponentAnnotation({
		selector: 'todo-list'
	}),
	new angular.ViewAnnotation({
		templateUrl: 'todo/todo.html',
		directives: [
			angular.For
		]
	})
];

document.addEventListener('DOMContentLoaded', function() {
	angular.bootstrap(TodoListComponent);
});

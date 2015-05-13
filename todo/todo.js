function TodoListComponent() {
	this.todos = [
		'Eat fish',
		'Walk the cat',
		'Be calm'
	];

	this.addTodo = function(todo) {
		this.todos.push(todo.value);
		todo.value = '';
	};

	this.doneTyping = function($event, todotext) {
		if ($event.which === 13) {
			this.addTodo(todotext);
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

# angular2-es5

Learning Angular 2 from [the official guide on angular.io](https://angular.io/docs/js/latest/guide/). ES5 version.

## random notes taken

### 1. Getting started

- the guide recommends `SimpleHTTPServer`. i will just use `http-server`.
- alpha21 is not available at the time of writing (returns 404). alpha20 works.
- `<my-app></my-app>` directive is needed in `index.html`. see [pull request](https://github.com/angular/angular.io/issues/94).
- `new angular.ComponentAnnotation` should be `new angular.Component`. (not sure if this relates to angular2 version pulled from code.angularjs.org)
- `new angular.ViewAnnotation` should be `new angular.View`.

### 2. Displaying data

- This tutorial has nothing to do with `index.html` from 1. Duplicate `profiles.html` from `index.html` and do all the same thing to get `<display>` component up!
- You have to explicitly tell the View which directives will be used in the templates: using `directives` config object.
- Missing a directive in config object doesn't throw an error. For example, removing `angular.If` from config object causes no errors. It just has no effect nor render anything.
- A service is just a plain Class. Nothing Angular-specific, nothing special to expose. Wow.
- But I still don't quite understand how `FriendsService` is injected in `DisplayComponent`. My guess is `injectables` in Component's config object works like `.$inject` in 1.x. For `.parameters` of a Component, I have no idea what it is and why it has to be an array of array.

### 3. User input

- This tutorial assumes you are familiar with bootstraping Angular 2 app already. You can use tutorial 2 as a reference.
- The final code example injects `angular.If` but it is not really used. You can remove it from `directives` config array.
- Event binding using `(event)=func` syntax looks weird to me, as well as `#var`. But it does not difficult to understand at all.
- `doneTyping` function passes event object `$event` to the controller. I think this is not a good practice, especially with testing.
- Just for brevity or maybe that's an easy way to clear the value in `<input>` element from the controller. In `addTodo` function, I cannot make it clear the value in `<input>` element using data binding yet. (since `#var` is a local variable to the view.)
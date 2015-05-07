# angular2-es5

Learning Angular 2 from [the official guide on angular.io](https://angular.io/docs/js/latest/guide/). ES5 version.

## notes
- the guide recommends `SimpleHTTPServer`. i will just use `http-servere`.
- alpha21 is not available at the time of writing (404). alpha20 works.
- `<my-app></my-app>` directive is needed in `index.html`. see [pull request](https://github.com/angular/angular.io/issues/94).
- `new angular.ComponentAnnotation` should be `new angular.Component`. (not sure if this relates to angular2 version pulled from code.angularjs.org)
- `new angular.ViewAnnotation` should be `new angular.View`.
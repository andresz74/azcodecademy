var app = angular.module('GalleryApp', ['ngRoute']);

app.config (function($routeProvider){
  $routeProvider
  	.when('/', {
    	controller: 'HomeController',
    	templateUrl: 'views/home.html'
  	})
  	.when('/photos/:id', {
    	controller: 'PhotoController',
	    templateURL: 'views/photo.html'
  	})
  	.otherwise({
    	redirectTo: '/'
  	});
});



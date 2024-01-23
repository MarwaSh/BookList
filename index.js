var app = angular.module('BooksApp', ['ngRoute', 'ngMaterial']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        })
        .when('/books', {
            templateUrl: 'views/books.html',
            controller: 'BooksController'
        })
        .when('/favorites', {
            templateUrl: 'views/favorites.html',
            controller: 'FavoritesController'
        })
        .otherwise({
            redirectTo: '/'
        });
});
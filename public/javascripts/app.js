angular.module('vidaBlog', [ 'ngRoute'
]).config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false // good for anything IE9+
        })

        $routeProvider
            .when('/', {
                templateUrl: 'ngViews/home.html',
                controller: 'HomeCtrl'
            })
            .when('/blog',{
                templateUrl: 'ngViews/blog.html',
                controller: 'BlogCtrl'
            })
            .when('/login', {
                templateUrl: 'ngViews/login.html',
                controller: 'LogInCtrl'
            })
            .when('/lifestyle', {
                templateUrl: 'ngViews/lifestyle.html',
                controller: 'LifestyleCtrl'
            })
            .when('/cooking', {
                templateUrl: 'ngViews/cooking.html',
                controller: 'CookingCtrl'
            })
            .when('/fitness', {
                templateUrl: 'ngViews/fitness.html',
                controller: 'FitnessCtrl'
            })
            .when('/shopping', {
                templateUrl: 'ngViews/shopping.html',
                controller: 'ShoppingCtrl'
            })
            .when('/post/:itemId', {
            templateUrl: 'ngViews/post.html',
            controller: 'PostCtrl'
            });

        $routeProvider.otherwise({ redirectTo: '/' });
    }
]);
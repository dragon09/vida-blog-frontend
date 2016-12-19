angular.module('vidaBlog')
    .controller('ShoppingCtrl', function($scope, $http, $location){
        $http.get('/data/mockPosts.json').success(function(data){
            $scope.posts = data;
        })
    });
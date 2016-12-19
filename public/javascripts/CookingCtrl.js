angular.module('vidaBlog')
    .controller('CookingCtrl', function($scope, $http, $location){
        $http.get('/data/mockPosts.json').success(function(data){
            $scope.posts = data;
        })
    });
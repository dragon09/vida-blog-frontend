angular.module('vidaBlog')
    .controller('BlogCtrl', function($scope, $http, $location){
        $http.get('/data/mockPosts.json').success(function(data){
            $scope.posts = data;
        })
    });
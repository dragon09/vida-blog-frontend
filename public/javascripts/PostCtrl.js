angular.module('vidaBlog')
    .controller('PostCtrl', function($scope, $http, $routeParams){
    $http.get('/data/mockPosts.json').success(function(data){
        $scope.posts = data;
        $scope.whichItem = $routeParams.itemId;
    })
});
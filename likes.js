var app = angular.module("app", []);
app.controller('likeController', function ($scope) {
    $scope.techList = [
        { name: 'AngularJS', likesCount: 0 },
        { name: 'React', likesCount: 0 }
    ];
    $scope.incLike = function(tech){
        tech.likesCount++;
    };
    $scope.decLike = function(tech){
        tech.likesCount--;
    };
});
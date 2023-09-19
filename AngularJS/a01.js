var app = angular.module("app",[]);
app.controller('emp', function($scope){
    $scope.msg = "This is a message"
})

app.directive('myInfoMsg', function(){
    return {
        // templateUrl: "my-info-msg.html"
        template:"<b>{{msg}}</b>"
    };
});
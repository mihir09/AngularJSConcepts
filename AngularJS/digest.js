var app = angular.module("app",[]);
app.controller('emp',['$scope', '$rootScope',function($scope, $rootScope){
    $scope.a = 1;
    $scope.b = 2;
    $scope.s = 3;
    

    // $scope.$watch("a", function(newValue, oldValue){
    //     if(newValue != oldValue){
    //         console.log("a modified to: "+ newValue)
    //     }
    // })

    // $scope.$watch("b", function(newValue, oldValue){
    //     if(newValue != oldValue){
    //         console.log("b modified to: "+ newValue)
    //     }
    // })

    // $scope.$watch("c", function(newValue, oldValue){
    //     if(newValue != oldValue){
    //         console.log("c modified to: "+ newValue)
    //     }
    // })
    $scope.calcSum = function(){
        $scope.s = Number($scope.a) + Number($scope.b);
    }

    $rootScope.$watch(function(){
        console.log("--digest process starts--")
    })

}]);

var btnClick = function(){
    var $scope =  angular.element($("#div1")).scope();
    // $scope.s = Number($scope.a) + Number($scope.b)
    // $scope.$apply();

    $scope.$apply(function(){
        $scope.s = Number($scope.a) + Number($scope.b)
    })
}

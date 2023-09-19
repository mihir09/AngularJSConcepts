var app = angular.module("app",[]);
app.controller('emp',['$scope',function($scope){

    $scope.emps = [
        {empno:"1001", ename:"John"},
        {empno:"1002", ename:"Jill"},
        {empno:"1003", ename:"Jimmy"},
        {empno:"1004", ename:"Johny"},
    ]

    $scope.addEmp = function(){
       var newEmpno = 1000 + $scope.emps.length + 1
       var newEname = "ename"+newEmpno

       $scope.emps.push({empno:newEmpno, ename:newEname})
    }

    $scope.modify3rdEmp = function(){
        $scope.emps[2].ename = "Test"
    }

    //deeep watch/equality watch
    $scope.$watch('emps', function(newValue, oldValue){
        console.log("No. of Employees: "+$scope.emps.length)
    }, true)

    // $scope.$watchCollection('emps', function(newValue, oldValue){
    //     console.log("No. of Employees: "+$scope.emps.length)
    // })
   

    // $scope.a = 1;
    // $scope.b = 2;
    // $scope.c = 3;

    // $scope.o = {
    //     a:1,
    //     b:2,
    //     c:3
    // }


    // $scope.$watch("o", function(newValue, oldValue){
    //     if(newValue != oldValue){
    //         $scope.o.c = $scope.o.a * $scope.o.b
    //     }
    // }, true)

    // $scope.$watchGroup(['o.a','o.b'], function(newValue, oldValue){
    //     if(newValue != oldValue){
    //         $scope.o.c = $scope.o.a * $scope.o.b
    //     }
    // })


    // $scope.updateC = function(){
    //     $scope.c = $scope.a * 4
    // };

    // $scope.$watch("a", function(newValue, oldValue){
    //     if(newValue != oldValue){
    //         $scope.b = $scope.a * 4
    //     }
    // })

    // $scope.$watch("b", function(newValue, oldValue){
    //     if(newValue != oldValue){
    //         $scope.c = $scope.b * 4
    //     }
    // })

    // $scope.$watch("c", function(newValue, oldValue){
    //     if(newValue != oldValue){
    //         console.log("updated C to: "+ newValue)
    //     }
    // })

    // $scope.$watchGroup(["a","b"], function(newValue, oldValue){
    //     if(newValue != oldValue){
    //         $scope.c = $scope.a * $scope.b;
    //         console.log("updated C to: "+ newValue)
    //     }
    // })


}])
var app = angular.module("app",[]);
app.controller('emp',function($q, $scope){
  
    function add(x,y){
     var q = $q.defer();
     setTimeout(function(){
        var result = x+y
        if(result >=0 ){
            q.resolve(x+y);
        }else{
            q.reject('negative values: '+ result)
        }
     }, 100);
     return q.promise;
   }
   var startTime = Date.now()

   var promise = add(5,2)
   promise
   .then(function(result){
    return add(result, -10)
   })
   .then(function(result){
    return add(result, 1)
   }, function(failure){return 0})
   .then(function(result){
      $scope.result = result;
      $scope.elapsedTime = Date.now() - startTime;
   })
   .catch(function(failure){
        $scope.failure = failure
   })
//    add(5,2, function(result){
//     add(result,3, function(result){
//        add(result, 1, function(result){
//         $scope.result = result
//         $scope.elapsedTime = Date.now() - startTime;
//        }, function(error){console.log(error)});
//     }, function(error){console.log(error)});
//    }, function(error){console.log(error)});
   
});


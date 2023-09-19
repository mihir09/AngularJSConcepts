var app = angular.module("app",[]);

app.controller('emp',['$scope',function($scope){

}]);

app.directive('message', function($interpolate){
    return{
        compile: function(tElement, tAttribute){
            console.log(tAttribute.text, " In Compile");
            tElement.css("border", "2px solid grey")

            return {
                pre: function($scope, iElement, iAttribute, controller){
                    console.log(iAttribute.text, " In pre");
                },
                post: function($scope, iElement, iAttribute, controller){
                    console.log(iAttribute.text, " In post");
                    if (iAttribute.text==="3"){
                        iElement.css("border", "2px solid red")
                    }
                    iElement.on("click", $scope.btnClick)
                }
            }
        },
        controller: function($scope, $element, $attrs){
            var v = $interpolate($attrs.text)($scope)
            console.log(v, " In Controller");
            $scope.btnClick = function(){
                alert(v)
            }
        }
    }
});
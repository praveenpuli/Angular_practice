app.controller ("ctrl",ctrl);
function ctrl ($scope){
    $scope.fun_one = function(){
        return $scope.fun_two();
    };
    $scope.fun_two = function(){
        return "inner function in controller..!";
    }
}
app.controller ("ctrl",ctrl);
function ctrl ($scope){
    $scope.my_fun = function (){
        return "function in controller..!";
    }
}
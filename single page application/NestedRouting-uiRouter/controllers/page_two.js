(function(){
    "use strict";

    app.controller("page_two",page_two);
    function page_two($scope){
        $scope.var_two = "nested uiRouter text from page_two...!";
    }
})();
angular.module('myApp').controller('mainController', function($scope, $http) {
    $scope.data = {};
 
    $scope.submit = function(){
        console.log('clicked submit');
        $http({
            url:'http://localhost:3000/insertingDataUsingAngularjs',
            method: 'POST',
            data: $scope.data
        }).then(function (httpResponse) {
            console.log('response:', httpResponse);
        })
        // $http.post("/insertingDataUsingAngularjs", data).success(function(data, status) {
        //     console.log('Data posted successfully');
        // })
    }
});
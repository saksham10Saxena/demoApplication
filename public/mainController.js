angular.module('myApp').controller('mainController', function($scope, $http) {
    $scope.data = {};
    $scope.reset = function() {
        $scope.user = angular.copy($scope.data);
        $scope.successMessagebox = false;
    }
    $scope.submit = function(){
        console.log('clicked submit');
        $http({
            url:'http://localhost:3000/insertingDataUsingAngularjs',
            method: 'POST',
            data: $scope.data
        }).then(function (httpResponse) {
            // $scope.successMessagebox = false;
            $scope.successMessage = "Data Submitted Successfully"
            $scope.successMessagebox = true;
            // $timeout(function() {
            //     $scope.successMessagebox = false;
            //     window.location = '/insertingDataUsingAngularjs';
            // }, 5000);
            
            console.log('response:', httpResponse);
        })
        // $http.post("/insertingDataUsingAngularjs", data).success(function(data, status) {
        //     console.log('Data posted successfully');
        // })
    }
});
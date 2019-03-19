angular.module('myApp').config(function($routeProvider){
    $routeProvider.
    when('/', {
        templateUrl:'./../../myProject3/toDoApp/index.html'
    })
})

angular.module('myApp').controller('mainController', function($scope, $http) {
    $scope.data = {};
    $scope.reset = function() {
        $scope.user = angular.copy($scope.data);
        $scope.successMessagebox = false;
    }
    // $scope.submit = function(){
    //     console.log('clicked submit');
    //     $http({
    //         url:'http://localhost:3000/insertingDataUsingAngularjs',
    //         method: 'POST',
    //         data: $scope.data
    //     }).then(function (httpResponse) {
    //         // $scope.successMessagebox = false;
    //         $scope.successMessage = "Data Submitted Successfully"
    //         $scope.successMessagebox = true;

            
    //         console.log('response:', httpResponse);
    //     })

    // }


       $scope.submit = function() {
           console.log('clicked submit');
           $http({
               url:'http://localhost:5000/login',
               method: 'POST',
               data: $scope.data
           }).then(function(httpResponse) {
               $scope.successMessage = "Data Submitted Successfully"
               $scope.successMessagebox = true;
              $scope.data = {};
            //    $scope.successMessagebox = false;

               console.log('response:', httpResponse);
           })
       }
});
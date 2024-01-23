app.controller('LoginController', function ($scope, $location) {
   
    $scope.username = '';
    $scope.password = '';


    $scope.fakeLogin = function () {
        // For now, just redirect to the books page after login
        $location.path('/books');
    };
});

'use strict';

app.controller('LoginController', function ($scope, $http) {
   $scope.login = function (user) {
        $http.post('/login', user).then(
            function success(response) {
                console.log('success');
                console.log(response);
            },
            function error(response) {
                console.log('error');
                console.log(response);
            }
        );
   };
});
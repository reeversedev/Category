var app = angular.module("app");
app.controller("LoginController", [
  "$scope",
  "$state",
  "User",
  "$location",
  function($scope, User, $location) {
    $scope.login = function() {
      User.login(this.username, this.password).then(
        function(response) {
          $location.path("/home");
          console.log(response);
        },
        function(err) {
          alert(err.data.error.message);
          console.log(err);
        }
      );
    };
  }
]);

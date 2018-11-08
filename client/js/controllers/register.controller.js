angular.module("app").controller("RegisterController", [
  "$scope",
  "$state",
  "User",
  "$location",
  function($scope, $state, User, $location) {
    $scope.register = function() {
      console.log($scope);
      User.create({ email: $scope.email, password: $scope.password }).then(
        function(response) {
          console.log(response);
          $location.path("/login");
        },
        function(err) {
          console.log(err);
          alert(err.data.error.message);
        }
      );
    };
  }
]);

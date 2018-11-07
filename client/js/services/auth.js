(function() {
  angular.module("app").factory("authService", authService);

  authService.$inject = ["User", "$rootScope"];

  function authService(User, $rootScope) {
    var service = {};
  }
  function login(email, password) {
    return User.login({ email: email, password: password }).$promise;
  }
  function logout() {
    return User.logout().$promise;
  }
  function register() {
    return User.create({ email: email, password: password }).$promise;
  }
  function isAuthenticated() {
    return User.isAuthenticated();
  }
  function getCurrentUser() {
    return User.getCurrent();
  }
  return {
    authService: authService,
    login: login,
    logout: logout,
    register: register,
    isAuthenticated: isAuthenticated,
    getCurrentUser: getCurrentUser
  };
})();

angular
  .module("app", ["lbServices", "ui.router"])
  .config([
    "$stateProvider",
    "$urlRouterProvider",
    "$locationProvider",
    function($stateProvider, $urlRouterProvider, $locationProvider) {
      $locationProvider.html5Mode(true);
      $locationProvider.hashPrefix("");

      $stateProvider
        .state("login", {
          url: "/login",
          templateUrl: "views/login.html",
          controller: "LoginController"
        })
        .state("home", {
          url: "/home",
          templateUrl: "views/home.html",
          controller: "HomeController"
        })
        .state("register", {
          url: "register",
          templateUrl: "views/register.html",
          controller: "RegisterController"
        });

      $urlRouterProvider.otherwise("login");
    }
  ])
  .run([
    "$rootScope",
    "$location",
    "$http",
    "User",
    function($rootScope, $location, $http, User) {
      console.log(User.isAuthenticated());

      $rootScope.$on("$stateChangeStart", function(
        event,
        toState,
        toParams,
        fromState,
        fromParams
      ) {
        $("#ui-view").html("");
        $(".page-loading").removeClass("hidden");
      });
      $rootScope.$on("$locationChangeStart", function(event, next, current) {
        // Redirecting the user to login page if not logged in or trying to access a restricted page.
        var restrictedPage =
          $.inArray($location.path(), ["/login", "/register"]) === -1;
        if (restrictedPage && !User.isAuthenticated()) {
          console.log("User is not authenticated");
          $location.path("/login");
        }
        if (User.isAuthenticated()) {
          $location.path("/home");
        }
      });
    }
  ]);

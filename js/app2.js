var app = angular.module('personalSite', ['ui.bootstrap', 'ngRoute']);
//angular.module('myApp', [require('angular-route')]);
app.controller('MainCtrl', function($scope) {
    $scope.name = 'World';
  }
);

app.controller('newCtrl', function($scope, $window) {



});

app.config(function($routeProvider){
  $routeProvider
          .when('/aboutMe',{
                templateUrl: 'templates/aboutMe.html',
                controller: 'aboutCtrl'
          })
          .when('/education',{
                templateUrl: 'templates/education.html',
                controller: 'MainCtrl'
              })
          .when('/experience',{
                    templateUrl: 'templates/experience.html',
                    controller: 'MainCtrl'
                  })
          .when('/', {
            templateUrl:'templates/home.html',
            controller: 'MainCtrl'
          })
          .when('/home', {
            templateUrl:'templates/home.html',
            controller: 'MainCtrl'
          })
          .otherwise({
        redirectTo: '/home'
      });
});
app.controller('aboutCtrl', function($scope){



});
app.controller('educationCtrl', function($scope){



});

app.controller('experienceCtrl', function($scope){



});
